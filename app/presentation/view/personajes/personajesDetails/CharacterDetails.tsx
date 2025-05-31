import React, { useEffect } from "react";
import {
    Image,
    ImageBackground,
    ScrollView,
    Text,
    View,
    TouchableOpacity,
} from "react-native";
import { HabilityStyle } from "./habilitiesStyles";
import viewModel from "./ViewModel";
import FavoriteButton from "../../../components/FavButton/FavoriteButton";
import styles from "./CharacterDetailsStyles";

export function CharacterDetailScreen({ route }: any) {
    const { id } = route.params;
    const { character, getCharacterInforById } = viewModel.CharacterDetailsViewModel();

    useEffect(() => {
        getCharacterInforById(id);
    }, [id]);

    const handleTransformationSelect = (transformacionId: number) => {
        getCharacterInforById(transformacionId);
    };

    return (
        <ImageBackground
            source={require("../../../../../assets/imagenesFondo/fondoPrincipal.jpg")}
            style={styles.container}
        >
            <View>
                <Image style={styles.imagenChaoz} source={require("../../../../../assets/logo.png")} />
                <Text style={styles.titulo}>INFORMACION DEL PERSONAJE</Text>
            </View>

            <ScrollView style={styles.principal}>
                {character && (
                    <View style={styles.adjustContainer}>
                        {/* Nombre y botón de favorito */}
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                            <Text style={styles.goku}>{character.nombre}</Text>
                            <FavoriteButton itemId={character.id} />
                        </View>

                        {/* Imagen principal */}
                        <View style={styles.imagenContainer}>
                            <Image style={styles.imagen} source={{ uri: character.imagen }} resizeMode="contain" />
                        </View>

                        {/* Habilidades */}
                        <Text style={styles.habilidadesTitle}>HABILIDADES</Text>
                        <View style={styles.habilidadesContainer}>
                            {character.habilidades.map((habilidad: string, index: number) => (
                                <HabilityStyle key={index} text={habilidad} habilitate={Math.floor(index / 2) + 1} />
                            ))}
                        </View>

                        {/* Transformaciones */}
                        {character.transformaciones && character.transformaciones.length > 0 && (
                            <>
                                <Text style={styles.habilidadesTitle}>TRANSFORMACIONES</Text>
                                <ScrollView horizontal>
                                    {character.transformaciones.map((trans: any) => (
                                        <TouchableOpacity key={trans.id} onPress={() => handleTransformationSelect(trans.id)}>
                                            <Image style={styles.imagenTrans} source={{ uri: trans.imagen }} resizeMode="contain" />
                                        </TouchableOpacity>
                                    ))}
                                </ScrollView>
                            </>
                        )}
                    </View>
                )}
            </ScrollView>
        </ImageBackground>
    );
}
