import {PlatinoRepositoryImpl} from "../../../data/repositories/PlatinoRepository";
import {Platino} from "../../entities/Platino";


const { getObtainedTrophies } = new PlatinoRepositoryImpl();

export const GetObtainedTrophiesUseCase = async (userId: number): Promise<Platino[]> => {
    return await getObtainedTrophies(userId);
};