import {UserProfileInterface} from "../entities/UserProfile";

export interface UserProfileInfoRepository {
    getUserProfileInfo(id: number): Promise<UserProfileInterface>
}