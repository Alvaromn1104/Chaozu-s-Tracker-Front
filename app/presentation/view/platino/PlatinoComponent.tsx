import {Image, StyleSheet, View, Text, Pressable} from "react-native";
import {AppTheme} from "../../theme/AppThemes";
import Checkbox from 'expo-checkbox'; // o usa cualquier checkbox que estés usando

interface Props {
    nombre: string;
    descripcion: string;
    tipo: string;
    imagen: string;
    showCheckbox?: boolean;
    isSelected?: boolean;
    onToggle?: () => void;
}

export const PlatinoComponent = ({ nombre, descripcion, tipo, imagen, showCheckbox = false, isSelected = false, onToggle }: Props) => {
    return (
        <View style={styles.container}>
            <View style={styles.encabezado}>
                <Image style={styles.imagen} source={{ uri: imagen }} />
                <Text style={styles.titulo}>{nombre}</Text>
                {showCheckbox && (
                    <Pressable style={styles.checkboxContainer} onPress={onToggle}>
                        <Checkbox value={isSelected} onValueChange={onToggle} />
                    </Pressable>
                )}
            </View>
            <Text style={styles.texto}>{descripcion}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: "auto",
        padding: 10,
        marginTop: 20,
        borderWidth: 2,
        borderColor: 'black',
        backgroundColor: 'white',
        marginBottom: 10,
        elevation: 5,
        width: '95%',
    },
    encabezado: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        justifyContent: 'space-between',
    },
    imagen: {
        width: 50,
        height: 50,
        marginRight: 10,
    },
    titulo: {
        fontSize: 27,
        fontFamily: AppTheme.cuerpo,
        textAlign: 'left',
        textDecorationLine: 'underline',
        flexShrink: 1,
        flex: 1,
    },
    texto: {
        fontSize: 20,
        fontFamily: AppTheme.cuerpo,
        textAlign: 'left',
        flexWrap: 'wrap',
        lineHeight: 22,
    },
    checkboxContainer: {
        marginLeft: 10,

    },
});
