import {UserProfileInterface} from "../entities/UserProfile";

export interface UserProfileInfoRepository {
    getUserProfileInfo(id: number): Promise<UserProfileInterface>
    addFavorito(id: number, personajeId: number): Promise<void>;
    removeFavorito(id: number, personajeId: number): Promise<void>;
}