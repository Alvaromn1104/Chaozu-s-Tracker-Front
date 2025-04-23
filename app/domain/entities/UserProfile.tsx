import {ClipsInterface} from "./Clip";
export interface UserProfileInterface {
    id?: number,
    userName: string,
    description?: string,
    clips: ClipsInterface[],
    favoritos: number[]
}

export type EditUserProfileInterface = Pick<UserProfileInterface, "id" | "userName" | "description">