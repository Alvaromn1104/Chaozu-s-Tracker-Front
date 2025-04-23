import {PropStackNaviation} from "../../interfaces/StackNav";
import {ImageBackground, ScrollView, StyleSheet, View, Image, Text} from "react-native";
import {DlcRectangle} from "../../components/dcl/DLCComponent";
import styles from "./DlcStyles";

export function DlcScreen({navigation, route}: PropStackNaviation) {
    return (
        <ImageBackground source={require('../../../../assets/imagenesFondo/fondoPrincipal.jpg')} style={styles.container} >
            <View style={styles.header}>
                <Image style={styles.imagenChaoz} source={require("../../../../assets/logo.png")}></Image>
                <Text style={styles.titulo}>DLC´S</Text>
            </View>

            <ScrollView style={styles.containerScroll} horizontal={false}>
                <DlcRectangle url={"superhero"} dlc={"DRAGON BALL: Sparking! ZERO HERO OF JUSTICE Pack"}
                              description={"El HERO OF JUSTICE Pack de DRAGON BALL: Sparking! ZERO incluye los siguientes contenidos de la película Dragon Ball SUPER: SUPER HERO.\n" +
                                  "\n" +
                                  "- 11 personajes jugables:\n" +
                                  "• Son Gohan (Super Hero)\n" +
                                  "• Son Gohan (Super Hero, Súper Saiyan)\n" +
                                  "• Son Gohan definitivo (Super Hero)\n" +
                                  "• Son Gohan (Bestia)\n" +
                                  "• Piccolo (Super Hero)\n" +
                                  "• Piccolo (potencial desatado)\n" +
                                  "• Piccolo Naranja\n" +
                                  "• Piccolo Naranja (forma gigante)\n" +
                                  "• Gamma 1\n" +
                                  "• Gamma 2\n" +
                                  "• Cell Max\n" +
                                  "\n" +
                                  "- Nuevo traje:\n" +
                                  "• Piccolo (Super Hero)\n" +
                                  "Este es el traje que lleva Piccolo cuando se infiltra en la base del Ejército Red Ribbon en Dragon Ball SUPER: SUPER HERO.\n" +
                                  "\n" +
                                  "- 3 combates adicionales"}/>
                <DlcRectangle url={"seasonpass"} dlc={"DRAGON BALL: Sparking! ZERO Season Pass"}
                              description={"El pase de temporada de DRAGON BALL: " +
                                  "Sparking! ZERO incluye 3 paquetes de contenido descargable y, como bonificación, " +
                                  "podrás invocar a Shenron para obtener objetos como trajes o zeni y 3 días de acceso " +
                                  "anticipado a los 3 paquetes de contenido descargable.\n \n" +
                                  "DLC 1: Dragon Ball Super Hero\n" +
                                  "DLC 2: Dragon ball Daima 1\n" +
                                  "DLC 3: Dragon ball Daima 2"}/>
            </ScrollView>
        </ImageBackground>
    )
}

