import { UserProfileInfoRepositoryImpl } from "../../../data/repositories/UserProfileInfoRepository";

const repo = new UserProfileInfoRepositoryImpl();

export const AddTrophyToUserUseCase = async (userId: number, trophyId: number) => {
    await repo.addTrophy(userId, trophyId);
};