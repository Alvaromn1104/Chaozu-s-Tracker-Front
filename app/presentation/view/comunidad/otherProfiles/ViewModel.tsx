import { useState } from "react";
import { UserProfileInterface } from "../../../../domain/entities/UserProfile";
import { Platino } from "../../../../domain/entities/Platino";
import { ClipsInterface } from "../../../../domain/entities/Clip";
import allCharacters from "../../../../data/personajes/personajes.json";
import { GetUserProfileByProfileIdUseCase } from "../../../../domain/useCases/userProfile/GetInfoProfileByUserProfileIdUseCase";
import { GetObtainedTrophiesByProfileIdUseCase } from "../../../../domain/useCases/userProfile/GetObtainedTrophiesByProfileIdUseCase"; // ✅ nuevo use case

export const usePerfilAjenoViewModel = () => {
    const [profile, setProfile] = useState<UserProfileInterface | null>(null);
    const [favoritos, setFavoritos] = useState<typeof allCharacters>([]);
    const [clips, setClips] = useState<ClipsInterface[]>([]);
    const [obtainedTrophies, setObtainedTrophies] = useState<Platino[]>([]);
    const [errorMessage, setErrorMessage] = useState<string>("");

    const getForeignProfile = async (userProfileId: number) => {
        setErrorMessage("");
        try {
            // 1. Obtener perfil por profileId
            const data = await GetUserProfileByProfileIdUseCase(userProfileId);
            setProfile(data);

            // 2. Obtener favoritos
            const favs = allCharacters.filter((char) =>
                data.favoritosIds?.includes(char.id)
            );
            setFavoritos(favs);

            // 3. Clips
            setClips(data.clips ?? []);

            // 4. Trofeos obtenidos por profileId ✅
            const trophies = await GetObtainedTrophiesByProfileIdUseCase(userProfileId);
            setObtainedTrophies(trophies);
        } catch (err) {
            console.error("Error loading foreign profile:", err);
            setErrorMessage("No se pudo cargar el perfil de usuario");
        }
    };

    return {
        profile,
        favoritos,
        clips,
        obtainedTrophies,
        errorMessage,
        getForeignProfile,
    };
};
