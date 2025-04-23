import {ImageBackground, View, StyleSheet, Text} from "react-native";
import {AppTheme} from "../../theme/AppThemes";


interface Props {
    url: string,
    text: string,
}

const imageSource: { [key:string]: any } = {
    "chr": require('../../../../assets/imagenesCategorias/personajes.png'),
    "ctr": require('../../../../assets/imagenesCategorias/controles.png'),
    "his": require('../../../../assets/imagenesCategorias/historias.png'),
    "plt": require('../../../../assets/imagenesCategorias/platino.png'),
}

export const BigCategorie = ({ text, url }: Props) =>{
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <ImageBackground
                    style={styles.imagen}
                    source={imageSource[url]}>

                    <Text style={styles.text}>{text}</Text>
                </ImageBackground>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignSelf: 'center',
        marginTop: 45,

    },
    imageContainer: {
        borderRadius: 10,
        borderColor: "black",
        borderWidth: 2,
        marginHorizontal: 15,


    },
    imagen: {
        width: "100%",
        height: 120,

    },
    text: {
        fontSize: 30,
        fontFamily: AppTheme.cuerpo,
        color: "white",
        alignSelf: "center",
        marginTop: 40,
    },
})