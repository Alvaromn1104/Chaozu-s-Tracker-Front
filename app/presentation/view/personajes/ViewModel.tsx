import { useState, useMemo } from "react";
import personajes from "../../../data/personajes/personajes.json";

export function useCharactersViewModel() {
    const [searchText, setSearchText] = useState("");
    const [selectedRaza, setSelectedRaza] = useState<string | null>(null);
    const [selectedSaga, setSelectedSaga] = useState<string | null>(null);
    const [selectedCoste, setSelectedCoste] = useState<number | null>(null);

    const personajesPrincipales = useMemo(() => personajes.filter(p => p.principal), []);

    const filteredCharacters = useMemo(() => {
        return personajesPrincipales.filter(p => {
            const matchName = p.nombreId.toLowerCase().includes(searchText.toLowerCase());
            const matchRaza = selectedRaza ? p.raza === selectedRaza : true;
            const matchSaga = selectedSaga ? p.saga === selectedSaga : true;
            const matchCoste = selectedCoste ? p.coste_dp === selectedCoste : true;
            return matchName && matchRaza && matchSaga && matchCoste;
        });
    }, [personajesPrincipales, searchText, selectedRaza, selectedSaga, selectedCoste]);

    const razas = useMemo(
        () =>
            [...new Set(
                personajesPrincipales
                    .map(p => p.raza)
                    .filter((r): r is string => typeof r === "string" && r.trim() !== "")
            )],
        [personajesPrincipales]
    );


    const sagas = useMemo(
        () =>
            [...new Set(
                personajesPrincipales
                    .map(p => p.saga)
                    .filter((s): s is string => typeof s === "string" && s.trim() !== "")
            )],
        [personajesPrincipales]
    );


    const costes = useMemo(
        () =>
            [...new Set(
                personajesPrincipales
                    .map(p => p.coste_dp)
                    .filter((c): c is number => typeof c === "number")
            )]
                .sort((a, b) => a - b)
                .map(c => `${c} DP`),
        [personajesPrincipales]
    );


    const clearFilters = () => {
        setSearchText("");
        setSelectedRaza(null);
        setSelectedSaga(null);
        setSelectedCoste(null);
    };

    return {
        filteredCharacters,
        razas,
        sagas,
        costes,
        searchText,
        setSearchText,
        selectedRaza,
        setSelectedRaza,
        selectedSaga,
        setSelectedSaga,
        selectedCoste,
        setSelectedCoste,
        clearFilters,
    };
}
