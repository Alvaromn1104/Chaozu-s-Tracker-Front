import { UserProfileInfoRepositoryImpl } from "../../../data/repositories/UserProfileInfoRepository";
import {ClipsInterface} from "../../entities/Clip";


const repo = new UserProfileInfoRepositoryImpl();

export const UploadUserClipUseCase = async (
    userId: number,
    clipUri: string,
    nombre: string
): Promise<ClipsInterface> => {
    return await repo.uploadUserClip(userId, clipUri, nombre);
};