import {Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {PropStackNaviation} from "../../../interfaces/StackNav";
import {WhatIfComponente} from "../../../components/historia/WhatIfComponente";
import styles from "../WhatIfStyle";

export function GokuHistoriaScreen({navigation, route}: PropStackNaviation) {
    return (
        <ImageBackground source={require('../../../../../assets/imagenesFondo/fondoPrincipal.jpg')} style={styles.container} >
            <ScrollView style={styles.containerScroll} horizontal={false}>
                <View>
                    <Image style={styles.imagenChaoz} source={require("../../../../../assets/logo.png")}></Image>
                    <Text style={styles.titulo}>SON GOKU: What if?</Text>
                </View>

                <TouchableOpacity onPress={() => navigation.navigate('GokuWhatIf1InfoScreen')}>
                <WhatIfComponente url={"goku"} title={"Codo con codo"} description={"El primer episodio Sparking que puedes desbloquear en la historia de Goku es el que recibe el título de Codo con codo, al que se puede acceder durante las fases del Arco de los Saiyans, en el Capítulo 1."}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {navigation.navigate('GokuWhatIf2InfoScreen')}}>
                <WhatIfComponente url={"goku"} title={"Superando los limites"} description={"El segundo episodio Sparking que está disponible para desbloquear en la historia de Goku es el que recibe el título de Superando los límites, y, como el primero, puedes tener acceso a él durante las fases del Arco de los Saiyans..."}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {navigation.navigate('GokuWhatIf3InfoScreen')}}>
                <WhatIfComponente url={"goku"} title={"El futuro cambiante"} description={"El tercer y último episodio Sparking que puedes desbloquear en la historia de Goku es el que recibe el título de \"El futuro cambiante\", al que se puede acceder durante las fases del Arco de los androides y Célula..."}/>
                </TouchableOpacity>
            </ScrollView>
        </ImageBackground>
    )
}

