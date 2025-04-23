import {Image, StyleSheet, View, Text} from "react-native";
import {AppTheme} from "../../theme/AppThemes";

interface Props {
    url: string
    title: string
    description: string
}

const imageSources: { [key: string]: any } ={

    "platino": require("../../../../assets/platino/trofeo_platino.png"),
    "oro": require("../../../../assets/platino/trofeo_oro.png"),
    "plata": require("../../../../assets/platino/trofeo_plata.png"),
    "bronce": require("../../../../assets/platino/trofeo_bronce.png")

};

export const PlatinoComponent = ({title, description, url}: Props) => {

    return (
        <View style={styles.container}>
            <View style={styles.encabezado}>
                <Image style={styles.imagen} source={imageSources[url]} />
                <Text style={styles.titulo}>{title}</Text>
            </View>

            <Text style={styles.texto}>{description}</Text>

        </View>

    );

}

const styles = StyleSheet.create({
    container: {
        height: 120,
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
        width: 50,
        height: 50,
        marginRight: 10,
    },
    titulo: {
        fontSize: 27,
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
    }
});