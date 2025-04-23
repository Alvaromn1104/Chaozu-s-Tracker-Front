import {StyleSheet, View, Image, Text} from "react-native";
import {AppTheme} from "../../../theme/AppThemes";


interface Props {
    text?: string,
    habilitate: number,
}

export const HabilityStyle = ({text, habilitate}: Props) => {
    let tipo;
    if (habilitate == 1){
        tipo = styles.habilidad1
    }else if (habilitate == 2){
        tipo = styles.habilidad2
    }else {
        tipo = styles.habilidad3
    }

    return (
        <View style={tipo}>
            <View style={styles.circuloContainer}>
                <Image style={styles.circulo} source={require("../../../../../assets/characters/charactersDetails/circuloHabilidades.svg")}/>
            </View>
            <Text style={styles.texto}>{text}</Text>
        </View>
    );

}

const styles = StyleSheet.create({
    habilidad1: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#496B93",
        padding: 10,
        borderRadius: 10,
        marginVertical: 5,
        width: "90%",
        flex: 1,
    },
    habilidad2: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#F29B4F",
        padding: 10,
        borderRadius: 10,
        marginVertical: 5,
        width: "90%",
    },
    habilidad3: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#8273A8",
        padding: 10,
        borderRadius: 10,
        marginVertical: 5,
        width: "90%",
    },
    circuloContainer: {
        width: 13,
        height: 13,
        borderRadius: 50,
        backgroundColor: "#EFE18B",
        filter: "blur(2px)",
        overflow: "hidden",
        display: "flex",
        marginRight: 10,
    },
    circulo: {
        width: 13,
        height: 13,
        borderRadius: 50,
        backgroundColor: "transparent",
    },
    texto: {
        fontSize: 18,
        color: "#EFE18B",
        fontFamily:AppTheme.cuerpo,
        borderColor: "black",

    },
})