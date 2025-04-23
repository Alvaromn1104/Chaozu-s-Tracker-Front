import React from "react";
import {Animated, ImageBackground, StyleSheet, View, Image, Text} from "react-native";
import ScrollView = Animated.ScrollView;
import {CharacterComponent} from "../../components/characters/CharacterComponent";
import {AppTheme} from "../../theme/AppThemes";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "../../../../App";
import styles from "./CharacterStyles";

interface PropStackNaviation extends NativeStackScreenProps<RootStackParamList,"CharactersScreen">{}

export function CharactersScreen({navigation, route}: PropStackNaviation) {
    return (
        <ImageBackground
            source={require("../../../../assets/imagenesFondo/fondoPrincipal.jpg")}
            style={styles.container}>

            <ScrollView style={styles.containerScroll}>
                <View>
                    <Image
                          style={styles.imagenChaoz}
                          source={require("../../../../assets/logo.png")}
                    />
                    <Text style={styles.titulo}>PERSONAJES</Text>
                </View>

                <View style={styles.personajesContainer}>
                    <CharacterComponent url={"goku"} text={"Goku (Super)"} navigation={navigation}/>
                    <CharacterComponent url={"vegeta"} text={"Vegeta (Super)"} navigation={navigation}/>
                    <CharacterComponent url={"wish"} text={"Wish"} navigation={navigation}/>
                    <CharacterComponent url={"bills"} text={"Bills"} navigation={navigation}/>
                    <CharacterComponent url={"gohan(sh)"} text={"Gohan (SH)"} navigation={navigation}/>
                    <CharacterComponent url={"trunks(z)"} text={"Trunks (Z)"} navigation={navigation}/>
                    <CharacterComponent url={"piccolo"} text={"Piccolo"} navigation={navigation}/>
                    <CharacterComponent url={"frezzer"} text={"Frezzer"} navigation={navigation}/>
                    <CharacterComponent url={"majinBuu"} text={"Majin Buu"} navigation={navigation}/>
                    <CharacterComponent url={"broly(s)"} text={"Broly (super)"} navigation={navigation}/>
                </View>

            </ScrollView>

        </ImageBackground>
    )
}