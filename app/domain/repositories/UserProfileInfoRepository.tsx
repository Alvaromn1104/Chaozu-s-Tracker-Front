import {UserProfileInterface} from "../entities/UserProfile";
import {ClipsInterface} from "../entities/Clip";
import {Platino} from "../entities/Platino";

export interface UserProfileInfoRepository {
    getUserProfileInfo(id: number): Promise<UserProfileInterface>
    getUserProfileByProfileId(profileId: number): Promise<UserProfileInterface>;
    addFavorito(id: number, personajeId: number): Promise<void>;
    removeFavorito(id: number, personajeId: number): Promise<void>;
    uploadProfileImage(userId: number, imageUri: string): Promise<string>;
    deleteProfileImage(userId: number): Promise<string>;
    uploadUserClip(userId: number, clipUri: string, nombre: string): Promise<ClipsInterface>;
    deleteUserClip(userId: number, publicId: number): Promise<void>;
    getAllUserProfiles(): Promise<UserProfileInterface[]>;
    getObtainedTrophiesByProfileId(profileId: number): Promise<Platino[]>;
}