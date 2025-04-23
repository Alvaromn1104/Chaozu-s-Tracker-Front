import {Image, ImageBackground, ScrollView, StyleSheet, Text, View} from "react-native";
import {InfoWhatIfComponent} from "../../../../components/historia/InfoWhatIfComponent";
import styles from "../../WhatIfInfoStyle";

export function GokuWhatIf1InfoScreen() {
    return (
        <ImageBackground source={require('../../../../../../assets/imagenesFondo/fondoPrincipal.jpg')} style={styles.container} >
            <ScrollView style={styles.containerScroll} horizontal={false}>
                <View>
                    <Image style={styles.imagenChaoz} source={require("../../../../../../assets/logo.png")}></Image>
                    <Text style={styles.titulo}>SON GOKU: What if?</Text>
                </View>

                <InfoWhatIfComponent
                    url={"goku"}
                    title={"Codo con codo"}
                    description={"El primer episodio Sparking que puedes desbloquear en la historia de Goku es el que recibe el título de \"Codo con codo\", al que se puede acceder durante las fases del Arco de los Saiyans, en el Capítulo 1."}
                    url2={"wigoku1"}
                    description2={"Para desbloquear este episodio especial, comienza entrando en la fase \"¿El dúo más poderoso de la Tierra?!\", en la que simplemente tienes que tomar una decisión de diálogo.\n" +
                        "Cuando tengas la ocasión, elige la opción \"Luchar en solitario\".\n" +
                        "De esta manera, pasarás a la fase \"Raditz contra la Escuela Tortuga\".\n" +
                        "\n" +
                        "En tu combate contra Raditz (en el que te acompañará Krilin), tendrás que cumplir con la condición secundaria de la fase para poder desbloquear el acceso a este episodio Sparking en cuestión.\n" + "\n" +
                        "Básicamente, lo que debes hacer aquí es derrotar a Raditz lo más rápido que puedas, antes de que Piccolo tenga tiempo suficiente de cargar su cañón de rayos.\n"}
                    url3={"wigoku2"}
                    description3={"Sabrás que Piccolo está cerca de cargar su rayo porque te avisará con una frase. Si tardas demasiado tiempo en derrotar a Raditz, simplemente regresarás a la línea de misiones originales, cosa que no te interesa. Por lo tanto, asegúrate de ser lo suficientemente rápido (puedes usar este truco de nuestra guía para conseguirlo).\n" +
                        "\n" +
                        "En caso de cumplir el requisito secundario correctamente, darás inicio al episodio \"Codo con codo\", que es bastante largo para tratarse de un episodio Sparking. De todas formas, no hay más caminos a partir de aquí que se bifurquen, así que solo tienes que ir derrotando a los siguientes contrincantes hasta terminar el episodio."}/>
            </ScrollView>
        </ImageBackground>
    )
}