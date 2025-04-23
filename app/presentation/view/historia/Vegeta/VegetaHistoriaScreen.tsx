import {Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {PropStackNaviation} from "../../../interfaces/StackNav";
import {WhatIfComponente} from "../../../components/historia/WhatIfComponente";
import styles from "../WhatIfStyle";

export function VegetaHistoriaScreen({navigation, route}: PropStackNaviation) {
    return (
        <ImageBackground source={require('../../../../../assets/imagenesFondo/fondoPrincipal.jpg')} style={styles.container} >
            <ScrollView style={styles.containerScroll} horizontal={false}>
                <View>
                    <Image style={styles.imagenChaoz} source={require("../../../../../assets/logo.png")}></Image>
                    <Text style={styles.titulo}>VEGETA: What if?</Text>
                </View>

                <TouchableOpacity
                onPress={() => {
                    navigation.navigate('VegetaWhatIf1InfoScreen')
                }}>
                <WhatIfComponente url={"vegeta"} title={"Vínculo parental"} description={"El primer episodio Sparking que puedes desbloquear en la historia de Vegeta es el que recibe el título de \"Vínculo parental\", al que se puede acceder durante las fases del Arco de los androides y Célula..."}/>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={() => {
                    navigation.navigate('VegetaWhatIf2InfoScreen')
                }}>
                <WhatIfComponente url={"vegeta"} title={"Primer lugar"} description={"El segundo y último episodio Sparking que puedes desbloquear en la historia de Vegeta es el que recibe el título de \"Primer lugar\", al que se puede acceder durante las fases del Arco del Monstruo Bu..."}/>
                </TouchableOpacity>
            </ScrollView>
        </ImageBackground>
    )
}