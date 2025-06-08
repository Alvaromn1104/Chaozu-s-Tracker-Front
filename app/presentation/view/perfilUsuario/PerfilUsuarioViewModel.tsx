import { deleteUserUseCase } from "../../../domain/useCases/UserLocal/DeleteUser";
import { useEffect, useState } from "react";
import * as ImagePicker from 'expo-image-picker';
import { EditUserProfileInterface, UserProfileInterface } from "../../../domain/entities/UserProfile";
import { GetUserProfileByUserIdUseCase } from "../../../domain/useCases/userProfile/GetUserProfileInforByUseIdUseCase";
import { UpdateUserProfileUseCase } from "../../../domain/useCases/userProfile/UpdateUserProfileUseCase";
import { Platino } from "../../../domain/entities/Platino";
import { GetAllTrophiesUseCase } from "../../../domain/useCases/platino/GetAllTrophiesUseCase";
import { GetObtainedTrophiesUseCase } from "../../../domain/useCases/platino/GetObtainedTrophies";
import {UploadUserProfileImageUseCase} from "../../../domain/useCases/userProfile/UploadPfpUseCase";
import {DeleteUserProfileImageUseCase} from "../../../domain/useCases/userProfile/DeletePfpUseCase";
import {ClipsInterface} from "../../../domain/entities/Clip";
import {UploadUserClipUseCase} from "../../../domain/useCases/userProfile/UploadClipUseCase";
import {DeleteUserClipUseCase} from "../../../domain/useCases/userProfile/DeleteClipUseCase";

const PerfilUsuarioViewModel = () => {
    const deleteSession = async () => {
        await deleteUserUseCase();
    };

    return {
        deleteSession,
    };
};

const GetInforUserProfileModel = () => {
    const [inforUserProfile, setInforUserProfile] = useState<UserProfileInterface | null>(null);
    const [allTrophies, setAllTrophies] = useState<Platino[]>([]);
    const [obtainedTrophies, setObtainedTrophies] = useState<Platino[]>([]);
    const [errorMessage, setErrorMessage] = useState("");

    // Cargar todos los trofeos una vez al montar el hook
    useEffect(() => {
        const fetchTrophies = async () => {
            try {
                const trophies = await GetAllTrophiesUseCase();
                setAllTrophies(trophies);
            } catch (error) {
                console.error("Error al obtener trofeos", error);
                setErrorMessage("Error al obtener trofeos");
            }
        };
        fetchTrophies();
    }, []);

    const getInforUserProfile = async (id: number) => {
        try {
            const data = await GetUserProfileByUserIdUseCase(id);
            console.log("📸 Imagen de perfil actual:", data.pfp);
            setInforUserProfile(data);

            // Traemos directamente los trofeos obtenidos para este userId
            const trophies = await GetObtainedTrophiesUseCase(id);
            setObtainedTrophies(trophies);
        } catch (error) {
            setErrorMessage("Error al obtener informacion o trofeos del perfil de usuario");
        }
    };

    return {
        inforUserProfile,
        allTrophies,
        obtainedTrophies,
        errorMessage,
        getInforUserProfile,
    };
};

const EditarPerfilViewModel = () => {
    const [errorMessage, setErrorMessage] = useState("");
    const [success, setSuccess] = useState(false);
    const [values, setValues] = useState<Omit<EditUserProfileInterface, "id">>({
        userName: "",
        description: "",
        rango: "UNRATED"
    });

    const onChangeProfile = (property: string, value: string) => {
        setValues({ ...values, [property]: value });
    };

    const updateProfile = async (id: number) => {
        try {
            const response = await UpdateUserProfileUseCase(id, {
                userName: values.userName,
                description: values.description,
                rango: values.rango,
            });

            if (response) {
                setSuccess(true);
            } else {
                console.log("No se recibió una respuesta válida del backend");
            }
        } catch (error) {
            setErrorMessage("Error al actualizar el perfil");
        }
    };

    return {
        ...values,
        onChangeProfile,
        updateProfile,
        errorMessage,
        success,
    };
};

const useProfileImageActions = () => {
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const requestPermission = async (): Promise<boolean> => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            setError("Permiso denegado para acceder a la galería.");
            return false;
        }
        return true;
    };

    const uploadProfileImage = async (userId: number): Promise<string> => {
        try {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
                throw new Error("Permiso denegado para acceder a la galería.");
            }

            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                quality: 1,
                aspect: [4, 3],
            });

            if (result.canceled) {
                throw new Error("El usuario canceló la selección de imagen.");
            }

            const imageUri = result.assets[0].uri;
            const responseMessage = await UploadUserProfileImageUseCase(userId, imageUri);

            return responseMessage;
        } catch (err: any) {
            throw err;
        }
    };



    const deleteProfileImage = async (userId: number): Promise<{ success: boolean; message?: string }> => {
        try {
            setLoading(true);
            setMessage(null);
            setError(null);

            const responseMessage = await DeleteUserProfileImageUseCase(userId);
            setMessage(responseMessage);
            return { success: true, message: responseMessage };
        } catch (err) {
            console.error(err);
            const errorMsg = "Error al eliminar la imagen.";
            setError(errorMsg);
            return { success: false, message: errorMsg };
        } finally {
            setLoading(false);
        }
    };

    return {
        uploadProfileImage,
        deleteProfileImage,
        loading,
        message,
        error,
    };
};

const useClipActions = () => {
    const [clips, setClips] = useState<ClipsInterface[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const uploadClip = async (userId: number, nombre: string) => {
        try {
            setLoading(true);
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
                throw new Error("Permiso denegado para acceder a la galería.");
            }

            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Videos,
                quality: 1,
            });

            if (result.canceled) {
                throw new Error("Selección cancelada.");
            }

            const clipUri = result.assets[0].uri;
            const nuevoClip = await UploadUserClipUseCase(userId, clipUri, nombre);
            setClips(prev => [...prev, nuevoClip]);
        } catch (err: any) {
            console.error(err);
            setError(err.message || "Error al subir clip.");
        } finally {
            setLoading(false);
        }
    };

    const deleteClip = async (userId: number, clipId: number) => {
        try {
            await DeleteUserClipUseCase(userId, clipId);
            setClips((prev) => prev.filter((clip) => clip.id !== clipId));
        } catch (err) {
            console.error(err);
            setError("Error al eliminar el clip.");
        }
    };

    return {
        clips,
        setClips,
        loading,
        error,
        uploadClip,
        deleteClip,
    };
};
export default { PerfilUsuarioViewModel, GetInforUserProfileModel, EditarPerfilViewModel, useProfileImageActions, useClipActions };
