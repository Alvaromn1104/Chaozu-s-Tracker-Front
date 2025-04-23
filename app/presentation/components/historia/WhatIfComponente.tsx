import {Image, StyleSheet, View, Text, TouchableOpacity} from "react-native";
import {AppTheme} from "../../theme/AppThemes";


interface Props {
    url: string;
    title: string;
    description: string;
}

const imageSources: { [key: string]: any } = {
    "goku": require("../../../../assets/Historia/WhatIf/goku/goku.jpg"),
    "vegeta": require("../../../../assets/Historia/WhatIf/vegeta/vegeta.jpg"),
    "gohan": require("../../../../assets/Historia/WhatIf/gohan/gohan.jpg"),
    "piccolo": require("../../../../assets/Historia/WhatIf/piccolo/piccolo.jpg"),
    "freezer": require("../../../../assets/Historia/WhatIf/frezzer/frezzer.jpg"),
};

export const WhatIfComponente = ({ title, description, url }: Props) => {
    return (
            <View style={styles.container}>
                <View style={styles.encabezado}>
                    <Image style={styles.imagen} source={imageSources[url]} />
                    <Text style={styles.titulo}>{title}</Text>
                </View>

                <Text style={styles.texto}>{description}</Text>

            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginTop: 20,
        borderWidth: 2,
        borderColor: 'black',
        backgroundColor: 'white',
        marginBottom: 10,
        elevation: 5,
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
    },
    titulo: {
        fontSize: 34,
        fontFamily:AppTheme.cuerpo,
        textAlign: 'left',
        textDecorationLine: 'underline',
        flexShrink: 1,
    },
    texto: {
        fontSize: 20,
        fontFamily:AppTheme.cuerpo,
        textAlign: 'left',
        flexWrap: 'wrap',
        lineHeight: 22,
    },
    imagenContainer: {

    }
})