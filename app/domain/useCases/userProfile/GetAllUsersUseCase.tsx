import { UserProfileInfoRepositoryImpl } from "../../../data/repositories/UserProfileInfoRepository";
import { UserProfileInterface } from "../../entities/UserProfile";

const repo = new UserProfileInfoRepositoryImpl();

export const GetAllUserProfilesUseCase = async (): Promise<UserProfileInterface[]> => {
    return await repo.getAllUserProfiles();
};
