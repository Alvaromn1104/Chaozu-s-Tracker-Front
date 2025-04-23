import {CharacterDetail} from "../entities/CharacterDetail";

export interface CharacterInfoRepository {
    getCharacterInfoById(id: number): Promise<CharacterDetail>;
}