import { UserProfileInfoRepositoryImpl } from "../../../data/repositories/UserProfileInfoRepository";

const repo = new UserProfileInfoRepositoryImpl();

export const RemoveTrophyFromUserUseCase = async (userId: number, trophyId: number) => {
    await repo.removeTrophy(userId, trophyId);
};