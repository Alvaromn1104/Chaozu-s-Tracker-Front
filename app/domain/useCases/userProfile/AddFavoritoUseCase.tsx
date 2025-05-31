import { UserProfileInfoRepositoryImpl } from "../../../data/repositories/UserProfileInfoRepository";

const { addFavorito } = new UserProfileInfoRepositoryImpl();

export const AddFavoritoUseCase = async (id: number, personajeId: number): Promise<void> => {
    await addFavorito(id, personajeId);
};