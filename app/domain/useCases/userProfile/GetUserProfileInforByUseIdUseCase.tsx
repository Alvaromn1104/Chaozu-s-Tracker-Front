import {UserProfileInfoRepositoryImpl} from "../../../data/repositories/UserProfileInfoRepository";
import {UserProfileInterface} from "../../entities/UserProfile";

const {getUserProfileInfo} = new UserProfileInfoRepositoryImpl()

export const GetUserProfileByUserIdUseCase = async (id: number): Promise<UserProfileInterface> => {
    return await getUserProfileInfo(id);
}