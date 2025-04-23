export interface DragonBallRepository {
    getCharacterById(id: number): Promise<string[]>;
}