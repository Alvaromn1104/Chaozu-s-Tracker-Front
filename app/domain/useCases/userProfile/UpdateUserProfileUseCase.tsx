import {EditUserProfileRepositoryImpl} from "../../../data/repositories/EditProfileRepository";
import {EditUserProfileInterface} from "../../entities/UserProfile";

const {updateUserProfile} = new EditUserProfileRepositoryImpl();

export const UpdateUserProfileUseCase =
    async (userId: number, userProfile: EditUserProfileInterface): Promise<EditUserProfileInterface> => {
        return await updateUserProfile(userId, userProfile);

}