import {CharacterInfoRepositoryImpl} from "../../../data/repositories/CharacterInfoRepository";
import {CharacterDetail} from "../../entities/CharacterDetail";

const {getCharacterInfoById} = new CharacterInfoRepositoryImpl()

export const GetCharacterInfoByIdUseCase = async (id: number): Promise<CharacterDetail> => {
    return await getCharacterInfoById(id)
}