import { Platino } from "../entities/Platino";

export interface PlatinoRepository {
    getAllTrophies(): Promise<Platino[]>;
    getObtainedTrophies(userId: number): Promise<Platino[]>;
}