import {EditUserProfileInterface} from "../entities/UserProfile";

export interface EditUserProfileRepository {
    updateUserProfile(userId: number, userProfile: EditUserProfileInterface): Promise<EditUserProfileInterface>;
}