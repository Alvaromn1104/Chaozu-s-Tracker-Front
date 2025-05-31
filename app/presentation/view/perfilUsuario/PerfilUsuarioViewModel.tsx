import {deleteUserUseCase} from "../../../domain/useCases/UserLocal/DeleteUser";
import {useEffect, useState} from "react";
import {EditUserProfileInterface, UserProfileInterface} from "../../../domain/entities/UserProfile";
import {GetUserProfileByUserIdUseCase} from "../../../domain/useCases/userProfile/GetUserProfileInforByUseIdUseCase";
import {useFavorites} from "../../hooks/useFavorites";
import {UpdateUserProfileUseCase} from "../../../domain/useCases/userProfile/UpdateUserProfileUseCase";

const PerfilUsuarioViewModel = () => {

    const deleteSession = async () => {
        await deleteUserUseCase();
    }

    return{
        deleteSession
    }

}

const GetInforUserProfileModel = () => {


    const [inforUserProfile, setInforUserProfile] = useState<UserProfileInterface | null>(null);
    const [errorMessage, setErrorMessage] = useState('');

    const getInforUserProfile = async (id: number) => {

        try{
            const data = await GetUserProfileByUserIdUseCase(id);
            setInforUserProfile(data);
        }
        catch (error) {
            setErrorMessage("Error al obtener informacion del perfil de usuario");
        }
    }

    return {
        inforUserProfile,
        errorMessage,
        getInforUserProfile,
    }

}


const EditarPerfilViewModel = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const [success, setSuccess] = useState(false);
    const [values, setValues] = useState<Omit<EditUserProfileInterface, "id">>({
        userName: "",
        description: "",
    });

    const onChangeProfile = (property: string, value: string) => {
        setValues({ ...values, [property]: value });
    };

    const updateProfile = async (id: number) => {
        try {
            const response = await UpdateUserProfileUseCase(id, {
                userName: values.userName,
                description: values.description,
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

export default {PerfilUsuarioViewModel, GetInforUserProfileModel, EditarPerfilViewModel};