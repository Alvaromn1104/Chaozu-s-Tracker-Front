import {useState} from "react";
import {CharacterDetail} from "../../../../domain/entities/CharacterDetail";
import {GetCharacterInfoByIdUseCase} from "../../../../domain/useCases/Characters/GetCharacterInfoByIdUseCase";
import {GetCharacterByIdUseCase} from "../../../../domain/useCases/Characters/GetCharacterByIdUseCase";

const CharacterDetailsViewModel = () => {

    const [character, setCharacter] = useState<CharacterDetail | null>(null);
    const [errorMessage, setErrorMessage] = useState('');

    const getCharacterInforById = async (id: number) => {
        try{
            const data = await GetCharacterInfoByIdUseCase(id);
            setCharacter(data);
            return data ?? null;
        }
        catch (error) {
            setErrorMessage("Error al obtener la  informacion del personaje");
        }
    }

    return {
        character,
        errorMessage,
        getCharacterInforById,
    };

};

const TransformationsViewModel = () => {

    const [transformations, setTransformations] = useState<CharacterDetail[] | null>(null);
    const [errorMessage2, setErrorMessage] = useState('');

    const fetchTransformations = async (ids: number[]) => {
        try {
            const results = await Promise.all(ids.map(id => GetCharacterInfoByIdUseCase(id)));
            setTransformations(results);
        } catch {
            setErrorMessage("Error al obtener las transformaciones");
        }
    };

    return {
        transformations,
        setTransformations,
        errorMessage2,
        fetchTransformations
    };
};


export default {CharacterDetailsViewModel, TransformationsViewModel};