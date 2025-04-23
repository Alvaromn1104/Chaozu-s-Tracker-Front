import {ImageBackground, StyleSheet, Text, View} from "react-native";

interface Props {
    url: string,
    text: string,
}

const imgSources: { [key: string]: any } = {
    "dlc": require('../../../../assets/imagenesCategorias/dlcs.png'),
    "new": require('../../../../assets/imagenesCategorias/news.png'),
    "acc": require('../../../../assets/imagenesCategorias/my_profile.png')
}

export const SmallCategorie = ({url, text}: Props) =>{
    return (
        <View style={styles.rectangleHeader}>
            <View style={styles.imageContainer}>
                <ImageBackground
                    source={imgSources[url]}
                    style={styles.imagenHeader}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    rectangleHeader: {
        marginHorizontal: 6,
        marginTop: 20,
        width: 120,
        height: 70,
    },
    imageContainer: {
        flex: 1,
        borderRadius: 5,
        overflow: "hidden",
        borderColor: "black",
        borderWidth: 2,
    },
    imagenHeader: {
        width: "100%",
        height: "100%",
    },
})