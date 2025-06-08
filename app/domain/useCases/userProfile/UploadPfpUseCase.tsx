import { UserProfileInfoRepositoryImpl } from "../../../data/repositories/UserProfileInfoRepository";

const repo = new UserProfileInfoRepositoryImpl();

export const UploadUserProfileImageUseCase = async (userId: number, imageUri: string) => {
    return await repo.uploadProfileImage(userId, imageUri);
};