import {AuthRepositoryImpl} from "../../../data/repositories/AuthRepository";
import {UserLoginInterface} from "../../entities/User";


const {login} = new AuthRepositoryImpl()

export const LoginAuthUseCase = async (user: UserLoginInterface) => {
    return await login(user)
}