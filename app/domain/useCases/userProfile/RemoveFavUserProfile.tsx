import {UserProfileInfoRepositoryImpl} from "../../../data/repositories/UserProfileInfoRepository";

const { removeFavorito } = new UserProfileInfoRepositoryImpl();

export const RemoveFavoritoUseCase = async (id: number, personajeId: number): Promise<void> => {
    await removeFavorito(id, personajeId);
};