import {RangoType} from "./RangoType";
import {ClipsInterface} from "./Clip";
export interface UserProfileInterface {
    id?: number;
    userName: string;
    description?: string;
    pfp?: string;
    clips?: ClipsInterface[];
    favoritosIds: number[];
    trophiesIds: number[];
    rango: RangoType;
}

export type EditUserProfileInterface = Pick<UserProfileInterface, "id" | "userName" | "description" | "rango">;
