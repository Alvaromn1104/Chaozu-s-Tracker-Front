import {Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {PropStackNaviation} from "../../../interfaces/StackNav";
import {WhatIfComponente} from "../../../components/historia/WhatIfComponente";
import styles from "../WhatIfStyle";

export function GohanHistoriaScreen({navigation, route}: PropStackNaviation) {
    return (
        <ImageBackground source={require('../../../../../assets/imagenesFondo/fondoPrincipal.jpg')} style={styles.container} >
            <ScrollView style={styles.containerScroll} horizontal={false}>
                <View>
                    <Image style={styles.imagenChaoz} source={require("../../../../../assets/logo.png")}></Image>
                    <Text style={styles.titulo}>SON GOHAN: What if?</Text>
                </View>

                <TouchableOpacity
                onPress={() => {
                    navigation.navigate('GohanWhatIfInfoScreen')
                }}>
                <WhatIfComponente url={"gohan"} title={"El guerrero mas fuerte"} description={"El primer y único episodio Sparking que puedes desbloquear en la historia de Son Gohan es el que recibe el título de \"El guerrero más fuerte\", al que se puede acceder durante las fases del Arco de Bills, Dios de la Destrucción/resurrección de Freezer..."}/>
                </TouchableOpacity>
            </ScrollView>
        </ImageBackground>
    )
}