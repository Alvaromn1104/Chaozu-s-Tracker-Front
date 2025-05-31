import {ClipsInterface} from "./Clip";
export interface UserProfileInterface {
    id?: number,
    userName: string,
    description?: string,
    clips: ClipsInterface[],
    favoritosIds: number[]
}

export type EditUserProfileInterface = Pick<UserProfileInterface, "id" | "userName" | "description">