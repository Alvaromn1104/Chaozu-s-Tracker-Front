import {UserProfileInfoRepository} from "../../domain/repositories/UserProfileInfoRepository";
import {UserProfileInterface} from "../../domain/entities/UserProfile";
import {AxiosError} from "axios";
import {ApiDelivery} from "../source/remote/api/ApiDelivery";
import {ClipsInterface} from "../../domain/entities/Clip";
import {Platino} from "../../domain/entities/Platino";

export class UserProfileInfoRepositoryImpl implements UserProfileInfoRepository{
    async getUserProfileInfo(id: number): Promise<UserProfileInterface> {
        try{
            const response = await ApiDelivery.get(`/users_profiles/${id}`)
            return response.data as UserProfileInterface;
        }
        catch(error){
            let e = error as AxiosError;
            console.error("Error al traer la información del perfil "+JSON.stringify(e.response?.data));
            throw null;
        }
    }

    async addFavorito(id: number, personajeId: number): Promise<void> {
        try {
            await ApiDelivery.patch(`/users_profiles/${id}/favoritos/add/${personajeId}`);
        } catch (error) {
            const e = error as AxiosError;
            console.error("Error al añadir favorito: " + JSON.stringify(e.response?.data));
            throw null;
        }
    }

    async removeFavorito(id: number, personajeId: number): Promise<void> {
        try {
            await ApiDelivery.patch(`/users_profiles/${id}/favoritos/remove/${personajeId}`);
        } catch (error) {
            const e = error as AxiosError;
            console.error("Error al eliminar favorito: " + JSON.stringify(e.response?.data));
            throw null;
        }
    }

    async addTrophy(id: number, trofeoId: number): Promise<void> {
        try {
            await ApiDelivery.patch(`/users_profiles/${id}/trofeos/add/${trofeoId}`);
        } catch (error) {
            const e = error as AxiosError;
            console.error("Error al añadir trofeo: " + JSON.stringify(e.response?.data));
            throw null;
        }
    }

    async removeTrophy(id: number, trofeoId: number): Promise<void> {
        try {
            await ApiDelivery.patch(`/users_profiles/${id}/trofeos/remove/${trofeoId}`);
        } catch (error) {
            const e = error as AxiosError;
            console.error("Error al eliminar trofeo: " + JSON.stringify(e.response?.data));
            throw null;
        }
    }

    async uploadProfileImage(userId: number, imageUri: string): Promise<string> {
        try {
            const formData = new FormData();
            formData.append("file", {
                uri: imageUri,
                type: "image/jpeg",
                name: "profile.jpg"
            } as any);

            const response = await ApiDelivery.post(
                `/users_profiles/${userId}/pfp`,
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
            );

            return response.data as string;
        } catch (error) {
            const e = error as AxiosError;
            console.error("Error al subir imagen de perfil: " + JSON.stringify(e.response?.data));
            throw "Error al subir imagen de perfil";
        }
    }

    async deleteProfileImage(userId: number): Promise<string> {
        try {
            const response = await ApiDelivery.delete(`/users_profiles/${userId}/pfp`);
            return response.data as string;
        } catch (error) {
            const e = error as AxiosError;
            console.error("Error al eliminar imagen de perfil: " + JSON.stringify(e.response?.data));
            throw "Error al eliminar imagen de perfil";
        }
    }

    async uploadUserClip(userId: number, clipUri: string, nombre: string): Promise<ClipsInterface> {
        try {
            const formData = new FormData();
            formData.append("file", {
                uri: clipUri,
                type: "video/mp4",
                name: `${nombre}.mp4`,
            } as any);

            const response = await ApiDelivery.post(
                `/users_profiles/${userId}/clips`,
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
            );
            
            return response.data as ClipsInterface;
        } catch (error) {
            const e = error as AxiosError;
            console.error("Error al subir clip: " + JSON.stringify(e.response?.data));
            throw "Error al subir clip";
        }
    }

    async deleteUserClip(userId: number, clipId: number): Promise<void> {
        try {
            await ApiDelivery.delete(`/users_profiles/${userId}/clips/${clipId}`);
        } catch (error) {
            const e = error as AxiosError;
            console.error("Error al eliminar clip: " + JSON.stringify(e.response?.data));
            throw "Error al eliminar clip";
        }
    }

    async getAllUserProfiles(): Promise<UserProfileInterface[]> {
        try {
            const response = await ApiDelivery.get('/users_profiles/all');
            return response.data as UserProfileInterface[];
        } catch (error) {
            const e = error as AxiosError;
            console.error("Error al obtener todos los perfiles: " + JSON.stringify(e.response?.data));
            throw "Error al obtener los perfiles";
        }
    }

    async getUserProfileByProfileId(profileId: number): Promise<UserProfileInterface> {
        try {
            const response = await ApiDelivery.get(`/users_profiles/profiles/by-id/${profileId}`);
            return response.data as UserProfileInterface;
        } catch (error) {
            const e = error as AxiosError;
            console.error("Error al traer el perfil por profileId: " + JSON.stringify(e.response?.data));
            throw null;
        }
    }

    async getObtainedTrophiesByProfileId(profileId: number): Promise<Platino[]> {
        try {
            const response = await ApiDelivery.get(`/users_profiles/perfil/${profileId}/trofeos`);
            return response.data as Platino[];
        } catch (error) {
            const e = error as AxiosError;
            console.error(`Error fetching obtained trophies for user ${profileId}: ${JSON.stringify(e.response?.data)}`);
            throw "Error al obtener los trofeos obtenidos";
        }
    }

}