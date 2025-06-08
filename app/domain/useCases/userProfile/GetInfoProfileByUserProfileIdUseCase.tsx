import { UserProfileInfoRepositoryImpl } from "../../../data/repositories/UserProfileInfoRepository";
import { UserProfileInterface } from "../../entities/UserProfile";

const { getUserProfileByProfileId } = new UserProfileInfoRepositoryImpl();

export const GetUserProfileByProfileIdUseCase = async (profileId: number): Promise<UserProfileInterface> => {
    return await getUserProfileByProfileId(profileId);
};
