import {Image, ImageBackground, ScrollView, StyleSheet, Text, View} from "react-native";
import {InfoWhatIfComponent} from "../../../../components/historia/InfoWhatIfComponent";
import styles from "../../WhatIfInfoStyle";

export function VegetaWhatIf2InfoScreen() {
    return (
        <ImageBackground source={require('../../../../../../assets/imagenesFondo/fondoPrincipal.jpg')} style={styles.container} >
            <ScrollView style={styles.containerScroll} horizontal={false}>
                <View>
                    <Image style={styles.imagenChaoz} source={require("../../../../../../assets/logo.png")}></Image>
                    <Text style={styles.titulo}>VEGETA: What if?</Text>
                </View>

                <InfoWhatIfComponent
                    url={"vegeta"}
                    title={"Primer lugar"}
                    description={"El segundo y último episodio Sparking que puedes desbloquear en la historia de Vegeta es el que recibe el título de \"Primer lugar\", al que se puede acceder durante las fases del Arco del Monstruo Bu, en el Capítulo 3."}
                    url2={"wivegeta3"}
                    description2={"Para comenzar este episodio, debes entrar en la fase \"El corazón vil de Vegeta\".\n" + "\n" +
                        "En esta fase, tendrás que escoger la opción de diálogo que dice \"Librarte del control mental\".\n" + "\n" +
                        "Al elegir esta ruta, pasarás a la fase \"Vegeta desatado\", que es la que comienza el recorrido lineal de este camino alternativo.\n"}
                    url3={"wivegeta4"}
                    description3={"Cabe añadir aquí que algunos jugadores pueden tener problemas con el paso de elegir el diálogo \"Librarte del control mental\", ya que, según reportes, es posible que esta opción no aparezca disponible en la fase, dependiendo de una acción previa concreta.\n" +
                        "\n" +
                        "Si este es tu caso, ten en cuenta que, al parecer, para que dicha opción de diálogo esté disponible, debes jugar la anterior fase del capítulo (titulada \"Los protagonistas siempre llegan tarde\") y en ella tienes que derrotar a Trunks niño sin que apenas te haga daño a tu barra de vida.\n" +
                        "\n" +
                        "Trata de completar la batalla sin que Trunks niño te golpee demasiado y luego comprueba si en la siguiente fase ya te aparece disponible la opción de librarte del control mental. Todo esto recuerda hacerlo en dificultad normal. Así, el juego debería permitirte elegir ese diálogo para empezar el episodio Sparking sin mayores inconvenientes."}/>
            </ScrollView>
        </ImageBackground>
    )
}