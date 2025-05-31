export interface CharacterDetail {
    id: number;
    nombre: string;
    imagen: string;
    transformaciones: {
        id: number;
        nombre: string;
        imagen: string;
    }[];
    habilidades: string[];
}