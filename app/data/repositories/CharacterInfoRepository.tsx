import {CharacterInfoRepository} from "../../domain/repositories/CharacterInfoRepository";
import {AxiosError} from "axios";
import {ApiDelivery} from "../source/remote/api/ApiDelivery";
import {CharacterDetail} from "../../domain/entities/CharacterDetail";

export class CharacterInfoRepositoryImpl implements CharacterInfoRepository {
    async getCharacterInfoById(id: number): Promise<CharacterDetail> {
        try{
            const response = await ApiDelivery.get(`/datos_personajes/${id}`);
            return response.data as CharacterDetail;
        }
        catch (error) {
            let e = error as AxiosError
            console.error("Error fetching character info:", e.response ? e.response.data : e.message);
            console.error("Error fetching character info " +JSON.stringify(e.response?.data));
            throw e;
        }
    }
}