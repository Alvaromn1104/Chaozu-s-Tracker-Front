import {useLocalStorage} from "./UseLocalStorage";
import {useEffect, useState} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const useFavorites = () => {
    const { user } = useLocalStorage();
    const [favorites, setFavorites] = useState<Record<string, boolean>>({});

    useEffect(() => {
        if (user) {
            loadFavorites();
        }
    }, [user]);

    const loadFavorites = async () => {

        if(!user) return;

        try{
            const storedFavorites = await AsyncStorage.getItem(`favorites_${user.id}`);
            if (storedFavorites) {
                setFavorites(JSON.parse(storedFavorites));
            }
        }
        catch (error) {
            console.log("error cargando favoritos"+error);
        }
    };


    const toggleFavorite = async (itemId: string) => {
        if (!user){
            alert("Tienes que iniciar sesion para añadir favoritos a tu perfil");
            return;
        }

        const updatedFavorites = {
            ...favorites,
            [itemId]: !favorites[itemId]
        };
        setFavorites(updatedFavorites);

        try{
            await AsyncStorage.setItem(`favorites_${user.id}`, JSON.stringify(updatedFavorites));
        }
        catch (error) {
            console.log("error cargando favoritos"+error);
        }
    }
    return {
        favorites,
        toggleFavorite,
        loadFavorites
    };

}