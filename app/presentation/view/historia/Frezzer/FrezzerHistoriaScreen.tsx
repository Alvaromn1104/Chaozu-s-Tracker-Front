import {Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {WhatIfComponente} from "../../../components/historia/WhatIfComponente";
import {PropStackNaviation} from "../../../interfaces/StackNav";
import styles from "../WhatIfStyle";

export function FrezzerHistoriaScreen({navigation, route}: PropStackNaviation) {
    return (
        <ImageBackground source={require('../../../../../assets/imagenesFondo/fondoPrincipal.jpg')} style={styles.container} >
            <ScrollView style={styles.containerScroll} horizontal={false}>
                <View>
                    <Image style={styles.imagenChaoz} source={require("../../../../../assets/logo.png")}></Image>
                    <Text style={styles.titulo}>FREEZER: What if?</Text>
                </View>


                <TouchableOpacity
                onPress={() => {
                    navigation.navigate('FreezerWhatIfInfoScreen')
                }}>
                <WhatIfComponente url={"freezer"} title={"El ejército de Freezer se une al combate"} description={"El primer y único episodio Sparking que puedes desbloquear en la historia de Freezer es el que recibe el título de \"El ejército de Freezer se une al combate\", al que se puede acceder durante las fases del Arco de Bills, Dios de la Destrucción/resurrección de Freezer..."}/>
                </TouchableOpacity>
            </ScrollView>
        </ImageBackground>
    )
}