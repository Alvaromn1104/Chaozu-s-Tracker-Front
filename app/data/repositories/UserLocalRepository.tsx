import {UserLocalRepository} from "../../domain/repositories/UserLocalRepository";
import {UserLogin, UserLoginInterface} from "../../domain/entities/User";
import {LocalStorage} from "../source/local/LocalStorage";

export class UserLocalRepositoryImpl implements UserLocalRepository{

    async save(user: UserLogin): Promise<void>{
        const{save} = LocalStorage();
        await save("chaozus_tracker_usuario", JSON.stringify(user));
    }

    async getUser(): Promise<UserLogin> {
        const {getItem} = LocalStorage();
        const data = await getItem("chaozus_tracker_usuario");
        return await JSON.parse(data as any) as UserLogin;
    }

    async deleteItem(): Promise<void>{
        const {deleteItem} = LocalStorage();
        await deleteItem("chaozus_tracker_usuario");
    }
}