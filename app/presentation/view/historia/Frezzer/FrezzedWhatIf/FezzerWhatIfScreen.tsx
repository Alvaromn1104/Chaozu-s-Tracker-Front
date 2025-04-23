import {Image, ImageBackground, ScrollView, StyleSheet, Text, View} from "react-native";
import {InfoWhatIfComponent} from "../../../../components/historia/InfoWhatIfComponent";
import styles from "../../WhatIfInfoStyle";

export function FreezerWhatIfInfoScreen() {

    return (
        <ImageBackground source={require('../../../../../../assets/imagenesFondo/fondoPrincipal.jpg')} style={styles.container} >
            <ScrollView style={styles.containerScroll} horizontal={false}>
                <View>
                    <Image style={styles.imagenChaoz} source={require("../../../../../../assets/logo.png")}></Image>
                    <Text style={styles.titulo}>PICCOLO: What if?</Text>
                </View>

                <InfoWhatIfComponent
                    url={"freezer"}
                    title={"El ejercito de Freezer" + "\n" + "se une al combate?"}
                    description={"El primer y único episodio Sparking que puedes desbloquear en la historia de Freezer es el que recibe el título de \"El ejército de Freezer se une al combate\", al que se puede acceder durante las fases del Arco de Bills, Dios de la Destrucción/resurrección de Freezer, en el Capítulo 5."}
                    url2={"wifreezer1"}
                    description2={"Comienza por entrar en la fase titulada \"Freezer resucitado\".\n" + "\n" +
                        "Aquí debes cumplir con la condición secundaria, la cual te pide derrotar a Goku y Vegeta muy rápidamente.\n" + "\n" +
                        "Si logras vencerlos a los dos en un tiempo concreto, abrirás la ruta hacia el episodio Sparking, que continúa en la fase \"La filosofía de Freezer\".\n" + "\n" +
                        "A partir de este punto podrás escoger entre distintos personajes: Dodoria y Zarbon, Cooler, La Fuerza Ginyu y King Cold.\n" + "\n" +
                        "Para completar el resto del episodio, tendrás que seleccionar cada elección de personaje y completar los sucesivos combates que le siguen a cada uno.\n" + "\n"}
                    url3={"wifreezer2"}
                    description3={"La parte que podríamos considerar más complicada de este episodio es la de derrotar muy rápido a Goku y Vegeta en \"Freezer resucitado\". " + "\n" +
                        "Como otras veces, el juego no te dirá exactamente con qué velocidad debes derrotarlos, pero ya te adelantamos que tienes más o menos un par de minutos para ello. Es un tiempo muy ajustado.\n" +
                        "\n" +
                        "Por esto mismo, para lograr vencer a ambos personajes muy rápido no debes dejarles apenas tiempo de que te ataquen ni tampoco que te bloqueen tus golpes. Una buena manera de lograrlo es cargar al máximo la barra de Ki para entrar en modo Sparking y usar enseguida la habilidad definitiva de Freezer (consulta aquí cómo hacerlo si no lo sabes).\n" +
                        "\n" +
                        "Este ataque hace un gran daño cuando impacta y deja a tu oponente tirado en el suelo un tiempo prolongado, por lo que (con un poco de suerte) podrás volver a cargar el Ki al máximo para repetir la jugada hasta acabar con Goku y Vegeta de esta manera. Si no lo consigues rápidamente, solo te queda repetir y repetir hasta perfeccionar la estrategia."}/>
            </ScrollView>
        </ImageBackground>
    )

}