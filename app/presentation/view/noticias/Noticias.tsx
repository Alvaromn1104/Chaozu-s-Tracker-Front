import {PropStackNaviation} from "../../interfaces/StackNav";
import {ImageBackground, ScrollView, View, Image, Text} from "react-native";
import {NoticiasRectangle} from "../../components/noticias/NoticiasComponent";
import styles from "./StylesNoticias";

export function NoticiasScreen({navigation, route}: PropStackNaviation) {
    return (
        <ImageBackground source={require('../../../../assets/imagenesFondo/fondoPrincipal.jpg')} style={styles.container} >
            <ScrollView style={styles.containerScroll} horizontal={false}>
                <View>
                    <Image style={styles.imagenChaoz} source={require("../../../../assets/logo.png")}></Image>
                    <Text style={styles.titulo}>NOTICIAS</Text>
                </View>

                <NoticiasRectangle
                    videoUrl={'https://www.youtube.com/embed/2f8v9L8fyok'}
                    title={"AJUSTES EN EL SISTEMA DE COMBATE"}
                    description={"Ataques de carga (ataque de golpe o cadena frenética): ya no retrocederás mientras cargues al recibir un ataque frenético o una Ráfaga de Ki frenética de un rival en el modo Sparking!.\n" +
                        "Ataque frenético: ahora es más difícil ejecutar por error un ataque de golpe durante los ataques frenéticos.\n" +
                        "Gran Tajo: golpear a un rival que está cayendo después de un Gran Tajo con otro Gran Tajo lo hará volar por los aires dando vueltas.\n" +
                        "Ráfaga de Ki frenética: ya no tendrás que ejecutar una evasión veloz cuando te golpeen.\n" +
                        "Ráfaga de Ki de golpe: ahora será más fácil que te golpeen cuando dispares al moverte.\n" +
                        "Percepción/Superpercepción:  \n" +
                        "‐Tras su activación, se consumirá una cierta cantidad de Ki. \n" +
                        "‐Se ha aumentado el tiempo para poder ejecutar la siguiente acción una vez terminado el movimiento. \n" +
                        "Supercontraataque: ha aumentado el tiempo para poder ejecutar una acción tras fallar al realizar el movimiento.\n" +
                        "Impacto Veloz: se ha retrasado el momento de poder volver a ejecutar una acción una vez que acabe el movimiento.\n" +
                        "Cambio de persecución: el daño infligido por personajes gigantes se ha reducido cuando se realice un cambio de persecución contra ellos.\n" +
                        "Recuperación de impacto:  \n" +
                        "‐Cuando te derriben con Golpe Levantador, si mantienes pulsado el botón, se activará la recuperación de impacto al tocar el suelo.  \n" +
                        "‐Además, cuando te derriben y salgas dando vueltas, si mantienes pulsado el botón, se activará la recuperación de impacto al tocar el suelo."}/>

                <NoticiasRectangle
                    videoUrl={'https://www.youtube.com/embed/E2NOsM9u7wE'}
                    title={"AJUSTES FUNCIONALIDAD Y HABILIDADES"}
                    description={"Combate de episodio: ahora se puede cambiar la dificultad incluso si estás utilizando un Orbe Dragón.\n" +
                        "Combate personalizado: se han añadido más situaciones, efectos y texto que podrás configurar.\n" +
                        "Partida de jugador:  \n" +
                        "‐ Se ha modificado la partida rápida para que no tengas que entrar en una sala y te emparejen instantáneamente con un rival.\n" +
                        "‐ También hemos añadido \"Búsqueda de sala rápida\" a la partida rápida.  \n" +
                        "Partida igualada: se ha añadido un tiempo de espera antes del comienzo de la partida como penalización según el número de veces que te hayas desconectado.\n" +
                        "Configuración del combate: ahora puedes ver la explicación de los controles al seleccionar un personaje.\n" +
                        "Entrenamiento: se ha añadido la opción \"En guardia tras los ataques\" cuando se juegue contra una CPU." +
                        "" + "\n" + "\n" + "\n" +
                        "Habilidades generales de evasión automática (p. ej., Sentido salvaje): el adversario no podrá usar estas habilidades al realizar un combo y ejecutar a continuación una precipitación.\n" +
                        "Sentido salvaje: se ha reducido el daño de ataque.\n" +
                        "Kaioken: se ha reducido el consumo de habilidad acumulada (solo para Son Goku [Z - Inicio]).\n" +
                        "¡Tachán!: se ha reducido el consumo de habilidad acumulada.\n" +
                        "¡Solo necesito cinco segundos!: el Ki se recupera completamente."}/>

                <NoticiasRectangle
                    videoUrl={'https://www.youtube.com/embed/E2NOsM9u7wE'}
                    title={"11 PERSONAJES: SUPER HERO!"}
                    description={"Los nuevos personajes que debutan en DRAGON BALL: Sparking! ZERO  son:\n" +
                        "\n" +
                        " \n" +
                        "\n" +
                        "• Son Gohan (Super Hero)\n" +
                        "\n" +
                        "• Son Gohan (Super Hero), Súper Saiyan\n" +
                        "\n" +
                        "• Son Gohan definitivo (Super Hero)\n" +
                        "\n" +
                        "• Son Gohan Beast\n" +
                        "\n" +
                        "• Piccolo (Super Hero)\n" +
                        "\n" +
                        "• Piccolo (Super Hero), despertar del poder\n" +
                        "\n" +
                        "• Piccolo Naranja\n" +
                        "\n" +
                        "• Piccolo Naranja, forma gigante\n" +
                        "\n" +
                        "• Gamma 1\n" +
                        "\n" +
                        "• Gamma 2\n" +
                        "\n" +
                        "• Cell Max"}/>

                <NoticiasRectangle
                    videoUrl={'https://www.youtube.com/embed/E2NOsM9u7wE'}
                    title={""}
                    description={""}/>

            </ScrollView>
        </ImageBackground>
    )
}

