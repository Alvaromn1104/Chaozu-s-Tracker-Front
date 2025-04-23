import {AuthRepository} from "../../domain/repositories/AuthRepository";
import {UserInterface, UserLoginInterface} from "../../domain/entities/User";
import {ApiDeliveryResponse} from "../source/remote/models/ResponseApiDelivery";
import {AxiosError} from "axios";
import {ApiDelivery} from "../source/remote/api/ApiDelivery";


export class AuthRepositoryImpl implements AuthRepository {

    async register(user: UserInterface): Promise<ApiDeliveryResponse> {
        try{
            const response = await ApiDelivery.post("users/create", user);
            return Promise.resolve(response.data);
        }
        catch(error){
            let e = (error as AxiosError);
            console.log("Error: ", + JSON.stringify(e.response?.data));
            return Promise.resolve(JSON.parse(JSON.stringify(e.response?.data)) as ApiDeliveryResponse);
        }
    }

    async login(user: UserLoginInterface): Promise<ApiDeliveryResponse> {
        try{
            const response = await ApiDelivery.post("users/login", user);
            return Promise.resolve(response.data);
        }
        catch(error){
            let e = (error as AxiosError);
            console.log("Error: ", + JSON.stringify(e.response?.data));
            return Promise.resolve(JSON.parse(JSON.stringify(e.response?.data)) as ApiDeliveryResponse);
        }
    }

}