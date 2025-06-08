import { UserProfileInfoRepositoryImpl } from "../../../data/repositories/UserProfileInfoRepository";
import { Platino } from "../../entities/Platino";

const repo = new UserProfileInfoRepositoryImpl();

export const GetObtainedTrophiesByProfileIdUseCase = async (profileId: number): Promise<Platino[]> => {
    return await repo.getObtainedTrophiesByProfileId(profileId);
};
