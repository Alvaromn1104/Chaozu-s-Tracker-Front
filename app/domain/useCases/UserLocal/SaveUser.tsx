import {UserLocalRepositoryImpl} from "../../../data/repositories/UserLocalRepository";
import {UserLogin} from "../../entities/User";

const {save} = new UserLocalRepositoryImpl();

export const SaveUserUseCase = async (user: UserLogin) =>{
    return await save(user)
}