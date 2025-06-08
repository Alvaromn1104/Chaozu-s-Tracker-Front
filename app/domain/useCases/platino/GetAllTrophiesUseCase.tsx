import { PlatinoRepositoryImpl } from "../../../data/repositories/PlatinoRepository";
import {Platino} from "../../entities/Platino";

const { getAllTrophies } = new PlatinoRepositoryImpl();

export const GetAllTrophiesUseCase = async (): Promise<Platino[]> => {
    return await getAllTrophies();
};
