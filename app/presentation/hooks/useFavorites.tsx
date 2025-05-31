import { useLocalStorage } from "./UseLocalStorage";
import { useEffect, useState } from "react";
import { GetUserProfileByUserIdUseCase } from "../../domain/useCases/userProfile/GetUserProfileInforByUseIdUseCase";
import { AddFavoritoUseCase } from "../../domain/useCases/userProfile/AddFavoritoUseCase";
import { RemoveFavoritoUseCase } from "../../domain/useCases/userProfile/RemoveFavUserProfile";

export const useFavorites = () => {
    const { user } = useLocalStorage(); // user.id es el perfil del usuario
    const [favorites, setFavorites] = useState<Set<number>>(new Set());

    useEffect(() => {
        if (user) {
            loadFavorites();
        }
    }, [user]);

    const loadFavorites = async () => {
        if (!user?.id) return;

        try {
            const profile = await GetUserProfileByUserIdUseCase(user.id);
            setFavorites(new Set(profile.favoritosIds));
        } catch (error) {
            console.error("Error cargando favoritos del backend", error);
        }
    };

    const toggleFavorite = async (personajeId: number) => {
        if (!user || !user.id) {
            alert("Tienes que iniciar sesión para añadir favoritos.");
            return;
        }

        const isFav = favorites.has(personajeId);
        try {
            if (isFav) {
                await RemoveFavoritoUseCase(user.id, personajeId);
                setFavorites(prev => {
                    const newSet = new Set(prev);
                    newSet.delete(personajeId);
                    return newSet;
                });
            } else {
                await AddFavoritoUseCase(user.id, personajeId);
                setFavorites(prev => new Set(prev).add(personajeId));
            }
        } catch (error) {
            console.error("Error actualizando favorito", error);
        }
    };


    const isFavorite = (personajeId: number): boolean => {
        return favorites.has(personajeId);
    };

    return {
        favorites,
        toggleFavorite,
        isFavorite,
        loadFavorites,
    };
};
