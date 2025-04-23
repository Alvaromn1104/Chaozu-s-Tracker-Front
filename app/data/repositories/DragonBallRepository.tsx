import {DragonBallRepository} from "../../domain/repositories/DragonBallRepository";
import {AxiosError} from "axios";
import {apiDragonBall} from "../source/remote/api/ApiDragonball";


export class DragonBallRepositoryImpl implements DragonBallRepository {
    async getCharacterById(id: number): Promise<string[]> {
        try{
            const response = await apiDragonBall.get(`/characters/${id}`)

            const data = response.data;

            const transformacionesImg: string[] = data.transformations.map((item: any) => item.image);

            return transformacionesImg;
        }
        catch(error){
            let e = error as AxiosError
            console.error("Error fetching character" +JSON.stringify(e.response?.data));
            throw e;
        }
    }

}