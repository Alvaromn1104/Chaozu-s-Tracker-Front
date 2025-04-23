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

    const [characterApi, setCharacterApi] = useState<string[] | null>(null);
    const [errorMessage2, setErrorMessage] = useState('');

    const getTransformationsFromApiById = async (id: number) => {
        try{

            const data = await GetCharacterByIdUseCase(id);
            if (data) {
                setCharacterApi(data);
            } else {
                setErrorMessage("No se encontraron transformaciones.");
            }

        }
        catch (error) {
            setErrorMessage("Error al obtener las transformaciones de la API")
        }
    }

    return {
        characterApi,
        errorMessage2,
        getTransformationsFromApiById
    }
};


export default {CharacterDetailsViewModel, TransformationsViewModel};