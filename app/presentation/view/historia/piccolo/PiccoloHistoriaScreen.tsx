import {Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {PropStackNaviation} from "../../../interfaces/StackNav";
import {WhatIfComponente} from "../../../components/historia/WhatIfComponente";
import styles from "../WhatIfStyle";

export function PiccoloHistoriaScreen({navigation, route}: PropStackNaviation) {
    return (
        <ImageBackground source={require('../../../../../assets/imagenesFondo/fondoPrincipal.jpg')} style={styles.container} >
            <ScrollView style={styles.containerScroll} horizontal={false}>
                <View>
                    <Image style={styles.imagenChaoz} source={require("../../../../../assets/logo.png")}></Image>
                    <Text style={styles.titulo}>PICCOLO: What if?</Text>
                </View>

                <TouchableOpacity onPress={() => {navigation.navigate('PiccoloWhatIfInfoScreen')}}>
                <WhatIfComponente url={"piccolo"} title={"La enseñanza de un mentor"} description={"El primer y único episodio Sparking que puedes desbloquear en la historia de Piccolo es el que recibe el título de \"La enseñanza de un mentor\", al que se puede acceder durante las fases del Arco de los androides y Célula..."}/>
                </TouchableOpacity>
            </ScrollView>
        </ImageBackground>
    )
}