import {UserProfileInfoRepository} from "../../domain/repositories/UserProfileInfoRepository";
import {UserProfileInterface} from "../../domain/entities/UserProfile";
import {AxiosError} from "axios";
import {ApiDelivery} from "../source/remote/api/ApiDelivery";

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
}