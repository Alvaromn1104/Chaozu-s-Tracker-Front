import {StyleSheet, Text, View} from "react-native";
import {AppTheme} from "../../theme/AppThemes";

interface Props {
    style: string;
    text: string;
}

export const StyleControles = ({text, style}: Props) => {
    let tipo;
    if (style === "titulo") {
        tipo = styles.textoTitulo;
    }
    else if (style === "tecnica") {
        tipo = styles.nombreTecnica;
    }
    else if (style === "letra") {
        tipo = styles.letra;
    }
    else if (style === "descripcion") {
        tipo = styles.textoDescripcionTecnica
    }

    return (
        <View style={styles.seccionContainer}>
            <Text style={tipo}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    seccionContainer: {
        width: '100%',
    },
    textoTitulo: {
        alignSelf: 'center',
        marginTop: 10,
        marginBottom: 10,
        color: "blue",
        fontSize: 30,
        fontFamily:AppTheme.cuerpo,
        paddingHorizontal: 15,
    },
    letra: {
        alignSelf: 'flex-start',
        paddingHorizontal: 10,
        paddingBottom: 20,
        fontSize: 17,
        fontFamily:AppTheme.cuerpo,
        lineHeight: 20,
    },
    nombreTecnica: {
        alignSelf: 'flex-start',
        paddingHorizontal: 10,
        paddingBottom: 2,
        fontFamily:AppTheme.cuerpo,
        lineHeight: 25,
        fontSize: 23,
    },
    textoDescripcionTecnica: {
        alignSelf: 'flex-start',
        marginTop: 10,
        marginBottom: 10,
        paddingHorizontal: 15,
        color: "purple",
        fontSize: 25,
        fontFamily:AppTheme.cuerpo,
    }
})