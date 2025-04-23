import React from "react";
import { Image, StyleSheet, View } from "react-native";

interface Props {
    characterKey: string;
}

const imagenSource: { [key: string]: any } = {
    "Goku (Super)": require("../../../../assets/characters/goku.png"),
    "Vegeta (Super)": require("../../../../assets/characters/vegeta.png"),
    "Whis": require("../../../../assets/characters/wish.png"),
    "Bills": require("../../../../assets/characters/bills.png"),
    "Gohan": require("../../../../assets/characters/gohan(sh).png"),
    "Trunks": require("../../../../assets/characters/trunks(z).png"),
    "Piccolo": require("../../../../assets/characters/piccolo.png"),
    "Freezer": require("../../../../assets/characters/frezzer.png"),
    "Majin Buu": require("../../../../assets/characters/majinBuu.png"),
    "Broly": require("../../../../assets/characters/broly(s).png")
};

export const CharacterImage = ({ characterKey }: Props) => {


    return (
        <View style={styles.container}>
            <Image source={imagenSource[characterKey]} style={styles.image} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        marginHorizontal: 20,
        marginVertical: 12,
    },
    image: {
        width: 100,
        height: 112,
        marginTop: 20,
    },
});

export default CharacterImage;