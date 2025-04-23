import CharacterDetailsViewModel from "./ViewModel";
import React, {useEffect} from "react";
import {Image, ImageBackground, ScrollView, StyleSheet, Text, View} from "react-native";
import {HabilityStyle} from "./habilitiesStyles";
import viewModel from "./ViewModel";
import FavoriteButton from "../../../components/FavButton/FavoriteButton";
import styles from "./CharacterDetailsStyles";

export function VegetaDetailsScreen({route}: any) {

    const { id } = route.params;
    const {character, errorMessage, getCharacterInforById} = viewModel.CharacterDetailsViewModel();
    const {characterApi, errorMessage2, getTransformationsFromApiById} = viewModel.TransformationsViewModel();

    useEffect(() => {
        getCharacterInforById(id);
    }, [id]);

    useEffect(() => {
        getTransformationsFromApiById(id);
        console.log(getTransformationsFromApiById(id));
    }, [id]);

    return (

        <ImageBackground
            source={require("../../../../../assets/imagenesFondo/fondoPrincipal.jpg")}
            style={styles.container}
        >
            <View>
                <Image style={styles.imagenChaoz} source={require("../../../../../assets/logo.png")}></Image>
                <Text style={styles.titulo}>INFORMACION DEL PERSONAJE</Text>
            </View>
            <ScrollView style={styles.principal} horizontal={false}>
                <View style={styles.adjustContainer}>
                    <View style={styles.nameContainer}>
                        <Text style={styles.goku}>VEGETA</Text>
                        <FavoriteButton itemId={character?.nombre ?? "default"}></FavoriteButton>
                    </View>
                    <View style={styles.imagenContainer}>
                        <Image style={styles.imagen} source={{uri: character?.imagen}} resizeMode={'contain'}/>
                    </View>

                    <Text style={styles.habilidadesTitle}>HABILIDADES</Text>
                    <View style={styles.habilidadesContainer}>
                        <HabilityStyle text={character?.habilidades[0]} habilitate={1}></HabilityStyle>
                        <HabilityStyle text={character?.habilidades[1]} habilitate={1}></HabilityStyle>
                        <HabilityStyle text={character?.habilidades[2]} habilitate={2}></HabilityStyle>
                        <HabilityStyle text={character?.habilidades[3]} habilitate={2}></HabilityStyle>
                        <HabilityStyle text={character?.habilidades[4]} habilitate={3}></HabilityStyle>
                    </View>


                    <View style={styles.transformacionesContainer}>
                        <Text style={styles.habilidadesTitle}>TRANSFORMACIONES</Text>
                        <ScrollView horizontal={true}>
                            <Image style={styles.imagenTrans} source={{uri: characterApi?.[0]}} resizeMode={'contain'}/>
                            <Image style={styles.imagenTrans} source={{uri: characterApi?.[1]}} resizeMode={'contain'}/>
                            <Image style={styles.imagenTrans} source={{uri: character?.transformaciones[0]}} resizeMode={'contain'}/>
                            <Image style={styles.imagenTrans} source={{uri: characterApi?.[2]}} resizeMode={'contain'}/>
                            <Image style={styles.imagenTrans} source={{uri: character?.transformaciones[1]}} resizeMode={'contain'}/>
                            <Image style={styles.imagenTrans} source={{uri: characterApi?.[3]}} resizeMode={'contain'}/>
                            <Image style={styles.imagenTrans} source={{uri: character?.transformaciones[2]}} resizeMode={'contain'}/>
                        </ScrollView>
                    </View>
                </View>
            </ScrollView>
        </ImageBackground>

    )
}

