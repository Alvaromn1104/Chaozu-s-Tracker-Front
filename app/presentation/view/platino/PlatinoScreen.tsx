import { Image, ImageBackground, FlatList, Text, View, TextInput, TouchableOpacity } from "react-native";
import { PlatinoComponent } from "./PlatinoComponent";
import styles from "./PlatinoStyle";
import { useEffect } from "react";
import GetAllTrophiesViewModel from "./ViewModel";
import { useLocalStorage } from "../../hooks/UseLocalStorage";
import { CustomPicker } from "../../components/characters/CustomPicker";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export function PlatinoScreen() {
    const { user } = useLocalStorage();
    const {
        trophies,
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
    } = GetAllTrophiesViewModel(user?.id);

    useEffect(() => {
        if (user?.id) {
            getAllTrophies(); // ✅ llama directamente la función desestructurada
        }
    }, [user?.id]);

    if (!trophies.length && !errorMessage) return null;

    return (
        <ImageBackground
            source={require('../../../../assets/imagenesFondo/fondoPrincipal.jpg')}
            style={styles.container}
        >
            <View style={styles.encabezadoFijo}>
                <Image style={styles.imagenChaoz} source={require("../../../../assets/logo.png")} />
                <Text style={styles.titulo}>TROFEOS PLATINO</Text>

                <View style={styles.filtrosFila}>
                    <CustomPicker
                        label="Tipo"
                        options={tiposDisponibles}
                        selectedValue={tipoFiltro}
                        onValueChange={setTipoFiltro}
                        iconName="medal"
                    />

                    {user && (
                        <CustomPicker
                            label="Estado"
                            options={[
                                { label: "Obtenidos", value: "obtenidos" },
                                { label: "No obtenidos", value: "no_obtenidos" },
                            ]}
                            selectedValue={estadoFiltro}
                            onValueChange={(val) => {
                                if (val === "obtenidos" || val === "no_obtenidos" || val === null) {
                                    setEstadoFiltro(val);
                                }
                            }}
                            iconName="check-decagram"
                        />
                    )}
                </View>

                {(tipoFiltro || estadoFiltro) && (
                    <View style={styles.botonLimpiarWrapper}>
                        <TouchableOpacity onPress={clearFilters} style={styles.botonLimpiar}>
                            <Icon name="autorenew" size={32} color="#000" />
                        </TouchableOpacity>
                    </View>
                )}
            </View>

            <FlatList
                data={trophies}
                contentContainerStyle={{ paddingHorizontal: 16 }}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <PlatinoComponent
                        nombre={item.nombre}
                        descripcion={item.descripcion}
                        tipo={item.tipo}
                        imagen={item.imagen}
                        showCheckbox={!!user}
                        isSelected={selectedTrophies.includes(item.id)}
                        onToggle={() => toggleTrophySelection(item.id)}
                    />
                )}
            />
        </ImageBackground>
    );
}
