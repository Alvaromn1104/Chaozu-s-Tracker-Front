import {Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {SmallCategorie} from "../../components/categories/smallCategory";
import {BigCategorie} from "../../components/categories/bigCategorie";
import {PropStackNaviation} from "../../interfaces/StackNav";
import {useLocalStorage} from "../../hooks/UseLocalStorage";
import {useEffect} from "react";
import styles from "./CategoriasStyles";

export function CategoriasScreen({navigation, route}: PropStackNaviation){
    const { user , getUserSession } = useLocalStorage();

    useEffect(() => {
        getUserSession()
    }, [user]);

    return (

    <ImageBackground source={require("../../../../assets/imagenesFondo/fondoPrincipal.jpg")} style={styles.container}>


        <View style={styles.alignContainer}>
            <Image style={styles.imagenChaoz} source={require("../../../../assets/logo.png")}></Image>
            {!user ? (
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('LoginScreen')
                }}>
            <Image style={styles.inicioSesion}source={require("../../../../assets/imagenesCategorias/loginn.png")}></Image>
            </TouchableOpacity>
                ) : null}
        </View>


        <View style={styles.headerContainer}>

            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('DlcScreen');
                }}
            >
                <SmallCategorie url={"dlc"} text={"DLC´S"}/>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('NoticiasScreen')
                }}
            >
                <SmallCategorie url={"new"} text={"NOTICIAS"}/>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => {
                    if (user) {
                        navigation.navigate('PerfilUsuarioScreen')
                    }else {
                        alert("Tienes que iniciar sesión para acceder a esta función.");
                    }
                }}
            >
                <SmallCategorie url={"acc"} text={"MI CUENTA"}/>
            </TouchableOpacity>
        </View>

        <TouchableOpacity
            onPress={() => {
                navigation.navigate('CharactersScreen')
            }}
        >
            <BigCategorie url={"chr"} text={"PERSONAJES"}/>
        </TouchableOpacity>

        <TouchableOpacity
            onPress={() => {
                navigation.navigate('ControlesScreen')
            }}
        >
            <BigCategorie url={"ctr"} text={"CONTROLES"}/>
        </TouchableOpacity>

        <TouchableOpacity
            onPress={() => {
                navigation.navigate('HistoriaScreen')
            }}
        >
            <BigCategorie url={"his"} text={"HISTORIA"}/>
        </TouchableOpacity>

        <TouchableOpacity
            onPress={() => {
                navigation.navigate('PlatinoScreen')
            }}
        >
            <BigCategorie url={"plt"} text={"PLATINO"}/>
        </TouchableOpacity>

    </ImageBackground>
    )
}