import { UserProfileInfoRepositoryImpl } from "../../../data/repositories/UserProfileInfoRepository";

const repo = new UserProfileInfoRepositoryImpl();

export const DeleteUserProfileImageUseCase = async (userId: number) => {
    return await repo.deleteProfileImage(userId);
};