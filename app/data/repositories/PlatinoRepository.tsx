
import { PlatinoRepository } from "../../domain/repositories/PlatinoRepository";
import { Platino } from "../../domain/entities/Platino";
import { ApiDelivery } from "../source/remote/api/ApiDelivery";
import { AxiosError } from "axios";

export class PlatinoRepositoryImpl implements PlatinoRepository {
    async getAllTrophies(): Promise<Platino[]> {
        try {
            const response = await ApiDelivery.get("/platino");
            return response.data as Platino[];
        } catch (error) {
            const e = error as AxiosError;
            console.error("Error fetching trophies:", e.response?.data || e.message);
            throw e;
        }
    }

    async getObtainedTrophies(userId: number): Promise<Platino[]> {
        try {
            const response = await ApiDelivery.get(`/users_profiles/${userId}/trophies`);
            return response.data as Platino[];
        } catch (error) {
            const e = error as AxiosError;
            console.error(`Error fetching obtained trophies for user ${userId}:`, e.response?.data || e.message);
            throw e;
        }
    }
}