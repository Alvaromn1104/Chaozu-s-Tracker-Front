import {UserLogin, UserLoginInterface} from "../entities/User";


export interface UserLocalRepository {
    save (user: UserLoginInterface): Promise<void>;
    getUser(): Promise<UserLogin>,
    deleteItem(): Promise<void>,
}