import {DragonBallRepositoryImpl} from "../../../data/repositories/DragonBallRepository";


const {getCharacterById} = new DragonBallRepositoryImpl()

export const GetCharacterByIdUseCase = async (id: number): Promise<string[]> => {
    return await getCharacterById(id)
}