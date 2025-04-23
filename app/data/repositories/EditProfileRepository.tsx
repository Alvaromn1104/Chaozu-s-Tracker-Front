import {EditUserProfileRepository} from "../../domain/repositories/EditProfileRepository";
import {EditUserProfileInterface} from "../../domain/entities/UserProfile";
import {ApiDeliveryResponse} from "../source/remote/models/ResponseApiDelivery";
import {ApiDelivery} from "../source/remote/api/ApiDelivery";
import {AxiosError} from "axios";

export class EditUserProfileRepositoryImpl implements EditUserProfileRepository {
    async updateUserProfile(userId: number, userProfile: EditUserProfileInterface): Promise<EditUserProfileInterface> {
        try {
            const response = await ApiDelivery.patch(`users_profiles/${userId}`, userProfile);
            return response.data as EditUserProfileInterface;
        } catch (error) {
            console.log("❌ Error en el repositorio al actualizar:", error);
            throw error;
        }
    }
}