import React, { useMemo } from "react";
import {
    ImageBackground,
    View,
    Image,
    Text,
    TextInput,
    TouchableOpacity,
    FlatList,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../App";
import styles from "./CharacterStyles";
import { useCharactersViewModel } from "./ViewModel";
import { CustomPicker } from "../../components/characters/CustomPicker";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { CharacterComponent } from "../../components/characters/CharacterComponent";

interface PropStackNavigation extends NativeStackScreenProps<RootStackParamList, "CharactersScreen"> {}

export function CharactersScreen({ navigation }: PropStackNavigation) {
    const {
        filteredCharacters,
        searchText,
        setSearchText,
        selectedRaza,
        setSelectedRaza,
        selectedSaga,
        setSelectedSaga,
        selectedCoste,
        setSelectedCoste,
        razas,
        sagas,
        costes,
        clearFilters
    } = useCharactersViewModel();

    const personajesEnFilas = useMemo(() => {
        const porFila = 2;
        const resultado = [];
        for (let i = 0; i < filteredCharacters.length; i += porFila) {
            resultado.push(filteredCharacters.slice(i, i + porFila));
        }
        return resultado;
    }, [filteredCharacters]);

    return (
        <ImageBackground
            source={require("../../../../assets/imagenesFondo/fondoPrincipal.jpg")}
            style={styles.container}
        >
            {/* Cabecera fija */}
            <View style={styles.encabezadoFijo}>
                <Image style={styles.imagenChaoz} source={require("../../../../assets/logo.png")} />
                <Text style={styles.titulo}>PERSONAJES</Text>

                <TextInput
                    placeholder="Buscar personaje"
                    value={searchText}
                    onChangeText={setSearchText}
                    style={styles.buscador}
                />

                <View style={styles.filtrosFila}>
                    <CustomPicker
                        label="Raza"
                        options={razas}
                        selectedValue={selectedRaza}
                        onValueChange={setSelectedRaza}
                        iconName="account-group"
                    />
                    <CustomPicker
                        label="Saga"
                        options={sagas}
                        selectedValue={selectedSaga}
                        onValueChange={setSelectedSaga}
                        iconName="book-open-page-variant"
                    />
                    <CustomPicker
                        label="Puntos"
                        options={costes}
                        selectedValue={selectedCoste ? `${selectedCoste} DP` : null}
                        onValueChange={(val) => {
                            const parsed = val ? parseInt(val.split(" ")[0]) : null;
                            setSelectedCoste(!isNaN(parsed as number) ? parsed : null);
                        }}
                        iconName="numeric"
                    />
                </View>

                {(selectedRaza || selectedSaga || selectedCoste) && (
                    <View style={styles.botonLimpiarWrapper}>
                        <TouchableOpacity onPress={clearFilters} style={styles.botonLimpiar}>
                            <Icon name="autorenew" size={32} color="#000" />
                        </TouchableOpacity>
                    </View>
                )}
            </View>

            {/* Lista de personajes (simple FlatList) */}
            <FlatList
                data={personajesEnFilas}
                renderItem={({ item: fila }) => (
                    <View style={styles.fila}>
                        {fila.map(personaje => (
                            <CharacterComponent
                                key={personaje.id}
                                id={personaje.id}
                                nombre={personaje.nombreId}
                                imagen={personaje.url}
                                navigation={navigation}
                            />
                        ))}
                    </View>
                )}
                contentContainerStyle={styles.personajesContainer}
            />
        </ImageBackground>
    );
}
