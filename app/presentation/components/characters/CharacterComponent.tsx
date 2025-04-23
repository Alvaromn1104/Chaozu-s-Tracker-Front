import {Image, StyleSheet, View, Text, TouchableOpacity} from "react-native";
import {RootStackParamList} from "../../../../App";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {AppTheme} from "../../theme/AppThemes";


interface Props {
    url: string,
    text: string,
    navigation: NativeStackNavigationProp<RootStackParamList, keyof RootStackParamList>;
}

const imagenSource: {[key: string]: {id: number, image: any, details: keyof RootStackParamList }} = {
    "goku": { id: 1, image: require("../../../../assets/characters/goku.png"), details: "GokuDetailsScreen"},
    "vegeta": { id: 2, image: require("../../../../assets/characters/vegeta.png"), details: "VegetaDetailsScreen"},
    "wish": { id: 3, image: require("../../../../assets/characters/wish.png"), details: "WishDetailsScreen"},
    "bills": { id: 4, image: require("../../../../assets/characters/bills.png"), details: "BillsDetailsScreen"},
    "gohan(sh)": { id: 5, image: require("../../../../assets/characters/gohan(sh).png"), details: "GohanDetailsScreen"},
    "trunks(z)": { id: 6, image: require("../../../../assets/characters/trunks(z).png"), details: "TrunksDetailsScreen"},
    "piccolo": { id: 7, image: require("../../../../assets/characters/piccolo.png"), details: "PiccoloDetailsScreen"},
    "frezzer": { id: 8, image: require("../../../../assets/characters/frezzer.png"), details: "FrezzerDetailsScreen"},
    "majinBuu": { id: 9, image: require("../../../../assets/characters/majinBuu.png"), details: "MajinBuuDetailsScreen"},
    "broly(s)": { id: 10, image: require("../../../../assets/characters/broly(s).png"), details: "BolyDetailsScreen"}
}


export const CharacterComponent = ({text, url, navigation}: Props) => {



    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => {
                navigation.navigate(imagenSource[url].details as any, {id: imagenSource[url].id});
            }}>
                <Image source={imagenSource[url].image} style={styles.imagen}></Image>
            </TouchableOpacity>
            <Text style={styles.texto}>{text}</Text>
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

    },
})