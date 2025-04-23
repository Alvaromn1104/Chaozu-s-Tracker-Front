import { Image, StyleSheet, View, Text } from "react-native";
import {AppTheme} from "../../theme/AppThemes";

interface Props {
    url: string;
    url2: string;
    url3: string;
    title: string;
    description: string;
    description2: string;
    description3: string;
}

const imageSources: { [key: string]: any } = {
    "goku": require("../../../../assets/Historia/WhatIf/goku/goku.jpg"),
    "wigoku1": require("../../../../assets/Historia/WhatIf/goku/wi1.png"),
    "wigoku2": require("../../../../assets/Historia/WhatIf/goku/wi2.png"),
    "wigoku3": require("../../../../assets/Historia/WhatIf/goku/wi3.png"),
    "wigoku4": require("../../../../assets/Historia/WhatIf/goku/wi4.png"),
    "wigoku5": require("../../../../assets/Historia/WhatIf/goku/wi5.png"),
    "wigoku6": require("../../../../assets/Historia/WhatIf/goku/wi6.png"),
    "vegeta": require("../../../../assets/Historia/WhatIf/vegeta/vegeta.jpg"),
    "wivegeta1": require("../../../../assets/Historia/WhatIf/vegeta/wi1.png"),
    "wivegeta2": require("../../../../assets/Historia/WhatIf/vegeta/wi2.png"),
    "wivegeta3": require("../../../../assets/Historia/WhatIf/vegeta/wi3.png"),
    "wivegeta4": require("../../../../assets/Historia/WhatIf/vegeta/wi4.png"),
    "gohan": require("../../../../assets/Historia/WhatIf/gohan/gohan.jpg"),
    "wigohan1": require("../../../../assets/Historia/WhatIf/gohan/wi1.png"),
    "wigohan2": require("../../../../assets/Historia/WhatIf/gohan/wi2.png"),
    "piccolo": require("../../../../assets/Historia/WhatIf/piccolo/piccolo.jpg"),
    "wipiccolo1": require("../../../../assets/Historia/WhatIf/piccolo/wi1.png"),
    "wipiccolo2": require("../../../../assets/Historia/WhatIf/piccolo/wi2.png"),
    "freezer": require("../../../../assets/Historia/WhatIf/frezzer/frezzer.jpg"),
    "wifreezer1": require("../../../../assets/Historia/WhatIf/frezzer/wi1.png"),
    "wifreezer2": require("../../../../assets/Historia/WhatIf/frezzer/wi2.png"),
};

export const InfoWhatIfComponent = ({title,description,description2,description3,url,url2,url3}: Props) => {

    return (
        <View style={styles.container}>
            <View style={styles.encabezado}>
                <Image style={styles.imagen} source={imageSources[url]} />
                <Text style={styles.titulo}>{title}</Text>
            </View>

            <Text style={styles.texto}>{description}</Text>

            <Image style={styles.imagenContainer} source={imageSources[url2]} />

            <Text style={styles.description2}>{description2}</Text>

            <Image style={styles.imagenContainer} source={imageSources[url3]} />

            <Text style={styles.description2}>{description3}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        marginTop: 20,
        borderWidth: 2,
        borderColor: 'black',
        backgroundColor: 'white',
        marginBottom: 10,
    },
    encabezado: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    imagen: {
        width: 80,
        height: 80,
        marginRight: 10,
        borderColor: 'black',
        borderWidth: 2,
    },
    titulo: {
        fontSize: 35,
        fontFamily:AppTheme.cuerpo,
        textAlign: 'left',
        textDecorationLine: 'underline',
    },
    imagenContainer: {
        width: "100%",
        height: 200,
        resizeMode: "contain",
        marginVertical: 10,
    },
    texto: {
        fontSize: 20,
        fontFamily:AppTheme.cuerpo,
        textAlign: 'left',
        lineHeight: 22,
    },
    description2: {
        fontSize: 20,
        fontFamily:AppTheme.cuerpo,
        padding: 10,
        marginTop: 10,
        textAlign: 'left',
    },
});