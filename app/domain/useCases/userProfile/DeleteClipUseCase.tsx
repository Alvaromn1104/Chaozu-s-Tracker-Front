import {UserProfileInfoRepositoryImpl} from "../../../data/repositories/UserProfileInfoRepository";


const repo = new UserProfileInfoRepositoryImpl();

export const DeleteUserClipUseCase = async (
    userId: number,
    clipId: number
): Promise<void> => {
    return await repo.deleteUserClip(userId, clipId);
};