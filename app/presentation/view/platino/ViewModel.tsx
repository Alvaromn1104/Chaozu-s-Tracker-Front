import { useState } from "react";
import { Platino } from "../../../domain/entities/Platino";
import { GetAllTrophiesUseCase } from "../../../domain/useCases/platino/GetAllTrophiesUseCase";
import { GetObtainedTrophiesUseCase } from "../../../domain/useCases/platino/GetObtainedTrophies";
import { RemoveTrophyFromUserUseCase } from "../../../domain/useCases/userProfile/RemoveTrophyFromUserUseCase";
import { AddTrophyToUserUseCase } from "../../../domain/useCases/userProfile/AddTrophyToUseCase";

const tiposDisponibles = ['bronce', 'plata', 'oro', 'platino'];
const estadosDisponibles = ['obtenidos', 'no_obtenidos'];

const GetAllTrophiesViewModel = (userId?: number) => {
    const [trophies, setTrophies] = useState<Platino[]>([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [selectedTrophies, setSelectedTrophies] = useState<number[]>([]);
    const [tipoFiltro, setTipoFiltro] = useState<string | null>(null);
    const [estadoFiltro, setEstadoFiltro] = useState<'obtenidos' | 'no_obtenidos' | null>(null);

    const getAllTrophies = async () => {
        try {
            const data = await GetAllTrophiesUseCase();
            setTrophies(data);

            if (userId) {
                const obtained = await GetObtainedTrophiesUseCase(userId);
                const obtainedIds = obtained.map(t => t.id);

                setSelectedTrophies(obtainedIds);
            }
        } catch (error) {
            setErrorMessage("Error al obtener los trofeos");
        }
    };

    const toggleTrophySelection = async (trophyId: number) => {
        if (!userId) return;

        const isSelected = selectedTrophies.includes(trophyId);

        try {
            if (isSelected) {
                await RemoveTrophyFromUserUseCase(userId, trophyId);
                setSelectedTrophies(prev => prev.filter(id => id !== trophyId));
            } else {
                await AddTrophyToUserUseCase(userId, trophyId);
                setSelectedTrophies(prev => [...prev, trophyId]);
            }
        } catch (error) {
            console.error("Error al modificar trofeo del usuario");
        }
    };

    const filteredTrophies = trophies.filter(t => {
        const porTipo = tipoFiltro ? t.tipo.toLowerCase() === tipoFiltro.toLowerCase() : true;
        const porEstado = userId && estadoFiltro
            ? estadoFiltro === 'obtenidos'
                ? selectedTrophies.includes(t.id)
                : !selectedTrophies.includes(t.id)
            : true;
        return porTipo && porEstado;
    });

    const clearFilters = () => {
        setTipoFiltro(null);
        setEstadoFiltro(null);
    };

    return {
        trophies: filteredTrophies,
        errorMessage,
        getAllTrophies,
        selectedTrophies,
        toggleTrophySelection,
        tipoFiltro,
        setTipoFiltro,
        estadoFiltro,
        setEstadoFiltro,
        tiposDisponibles,
        estadosDisponibles,
        clearFilters
    };
};

export default GetAllTrophiesViewModel;
