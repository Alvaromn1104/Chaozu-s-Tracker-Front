import {Image, StyleSheet, View, Text, TouchableOpacity} from "react-native";
import {AppTheme} from "../../theme/AppThemes";


interface Props {
    url: string;
    text: string;
}

const imageSources: { [key: string]: any } = {
    "goku": require("../../../../assets/characters/goku.png"),
    "vegeta": require("../../../../assets/characters/vegeta.png"),
    "gohan": require("../../../../assets/characters/gohan(sh).png"),
    "piccolo": require("../../../../assets/characters/piccolo.png"),
    "frezzer": require("../../../../assets/characters/frezzer.png"),
};


export const HistoriaComponent  = ({text, url}: Props) => {
    return (
            <View style={styles.container}>
                <Image style={styles.imagen} source={imageSources[url]} />
                <Text style={styles.texto}>{text}</Text>
            </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "white",
        borderWidth: 2,
        borderColor: "black",
        padding: 10,
        marginVertical: 20,
        width: "90%",
        alignSelf: "center",
        marginTop: 50,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
    },
    imagen: {
        width: 100,
        height: 100,
        resizeMode: "contain",
        marginRight: 15,
    },
    texto: {
        fontSize: 25,
        fontFamily: AppTheme.cuerpo,
        flex: 1,
    },
})