import { Image, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { RootStackParamList } from "../../../../App";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AppTheme } from "../../theme/AppThemes";

interface Props {
    id: number;
    nombre: string;
    imagen: string;
    navigation: NativeStackNavigationProp<RootStackParamList, keyof RootStackParamList>;
}

export const CharacterComponent = ({ id, nombre, imagen, navigation }: Props) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate("CharacterDetailScreen", { id })}>
                <Image source={{ uri: imagen }} style={styles.imagen} />
            </TouchableOpacity>
            <Text style={styles.texto}>{nombre}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        marginHorizontal: 40,
        marginVertical: 12,
    },
    imagen: {
        width: 100,
        height: 112,
        marginTop: 20,
    },
    texto: {
        fontSize: 20,
        fontFamily: AppTheme.cuerpo,
        color: "white",
        marginTop: 5,
        textAlign: "center",
        maxWidth: 100,
        alignSelf: "center",
    },
});
