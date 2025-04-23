import {UserProfileInterface} from "./UserProfile";

export interface UserInterface {
    id?: number,
    email: string,
    firstName: string,
    lastName: string,
    userName?: string,
    password: string,
    confirmPassword: string,
}

export type UserLoginInterface = Pick<UserInterface,"email" | "password">

export interface UserLogin extends UserInterface {
    token: string,
    userProfile: UserProfileInterface
}