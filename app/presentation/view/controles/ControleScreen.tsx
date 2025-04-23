import {PropStackNaviation} from "../../interfaces/StackNav";
import {Image, ImageBackground, ScrollView, StyleSheet, Text, View} from "react-native";
import {StyleControles} from "./StyleControles";
import {AppTheme} from "../../theme/AppThemes";

export function ControlesScreen({navigation, route}: PropStackNaviation) {
    return (
        <ImageBackground source={require('../../../../assets/imagenesFondo/fondoPrincipal.jpg')} style={styles.container} >
            <View>
                <Image style={styles.imagenChaoz} source={require("../../../../assets/logo.png")}></Image>
                <Text style={styles.titulo}>DRAGON BALL: SPARKING! ZERO: Combos y funciones</Text>
            </View>

            <ScrollView style={{marginBottom:10}} contentContainerStyle={{ paddingBottom: 50 }} horizontal={false}>
                <View style={styles.imagenContainer}>
                    <Image style={styles.imagen} source={require("../../../../assets/controles/imagenTorneo.jpg")}></Image>
                </View>

                <View style={styles.principal}>
                    <StyleControles style={"letra"} text={"Antes de empezar a luchar en tus primeros combates en DRAGON BALL: " +
                        "Sparking! ZERO, tendrás que conocer los movimientos de los que dispones. Con nuestra última guía, conoce " +
                        "el sistema de combate y repasa los movimientos de ataque y defensa que hay en el juego."}/>

                    <StyleControles style={"titulo"} text={"I. Movimiento"}/>
                    <StyleControles style={"letra"} text={"En juegos de combate 3D en la arena como DRAGON BALL: " +
                        "Sparking! ZERO, es muy importante dominar el movimiento. Hay muchas formas de moverse, " +
                        "no solo por el mapa, sino también alrededor de tu enemigo. ¡Echemos un vistazo a los más " +
                        "importantes!"}/>

                    <StyleControles style={"tecnica"} text={"Sprint con pasos/corto"}/>
                    <StyleControles style={"letra"} text={"Pulsa [✖/A] para avanzar o moverte lateralmente. De este modo, " +
                        "tu posición será menos estática y más difícil de predecir cuando te enfrentes a un rival. Si pulsas " +
                        "[✖/A], puedes moverte rápidamente en la dirección a la que apunte el joystick. Si estás cerca de " +
                        "tu rival, ejecutará Sprint con pasos, pero, si estás lejos, ejecutará un Sprint corto, que es útil " +
                        "para esquivar diferentes ataques, como los ataques de ráfaga."}/>

                    <StyleControles style={"tecnica"} text={"Acometida Dragón"}/>
                    <StyleControles style={"letra"} text={"Pulsa [R2/RT] + [✖/A] para correr a gran velocidad en la dirección " +
                        "a la que apunte el joystick. Al activarlo y mientras te mueves, se consume Ki, pero es una forma " +
                        "práctica de desplazarte por mapas grandes. Puedes continuar este movimiento con varios combos " +
                        "frenéticos o un ataque de golpe."}/>

                    <StyleControles style={"tecnica"} text={"Acometida de Explosión Z"}/>
                    <StyleControles style={"letra"} text={"Si pulsas [R2/RT] + [✖/A] + [✖/A], podrás realizar una Acometida " +
                        "de Explosión Z. Es un movimiento muy veloz que te permite colocarte detrás de tu rival durante la " +
                        "Acometida Dragón. Consume más Ki que la Acometida Dragón, pero también dificulta que tu oponente se " +
                        "proteja."}/>

                    <StyleControles style={"tecnica"} text={"Ascenso rápido"}/>
                    <StyleControles style={"letra"} text={"Pulsa [R2/RT] + [L1/LB] para subir rápidamente mientras emites tu " +
                        "Aura de Ki. En este movimiento, se consumirá tu indicador de Ki."}/>

                    <StyleControles style={"tecnica"} text={"Descenso rápido"}/>
                    <StyleControles style={"letra"} text={"Pulsa [R2/RT] + [L2/LT] para bajar rápidamente mientras emites tu " +
                        "Aura de Ki. Este movimiento también consumirá tu indicador de "}/>


                    <StyleControles style={"titulo"} text={"II. Ofensivos"}/>
                    <StyleControles style={"descripcion"} text={"Acciones de cadena frenética"}/>
                    <StyleControles style={"letra"} text={"Los combos de cadena frenética se activan pulsando [☐/X] (hasta 4 veces como máximo) + [△/Y]. Cuanto más largo sea el combo, más daño infligirás a tu rival, al que golpearás con una cadena de combos."}/>

                    <StyleControles style={"tecnica"} text={"Ataques de golpe"}/>
                    <StyleControles style={"letra"} text={"Los ataques de golpe son un tipo de ataque acumulado que lanzará a tu oponente al alcanzarlo. Su potencia varía en función del tiempo que cargues el ataque. Al ejecutar un ataque de golpe, golpea en el momento adecuado."}/>
                    <StyleControles style={"letra"} text={"Un Golpe Poderoso es más potente que un ataque de golpe normal y mandará más lejos a tu oponente. Mantén pulsado [☐/X] para ejecutar un ataque de golpe y suelta una vez que se haya cargado para ejecutar un Golpe Poderoso. Este movimiento hará retroceder a tu rival y le infligirá mucho daño. También puedes cargarlo no solo para mantener a distancia a tu oponente, sino para conectar Golpes Poderosos con otros ataques, como Persecución Dragón y el ataque evanescente, así que no olvides incluirlo en tu estrategia de combate"}/>

                    <StyleControles style={"descripcion"} text={"Golpe Levantador/Gran Tajo"}/>
                    <StyleControles style={"tecnica"} text={"Golpe Levantador"}/>
                    <StyleControles style={"letra"} text={"Pulsa [☐/X] ↑ + [△/Y] para mandar al rival volando por los aires."}/>
                    <StyleControles style={"tecnica"} text={"Gran Tajo"}/>
                    <StyleControles style={"letra"} text={"Pulsa [☐/X] ↓ + [△/Y] dirigiendo tus ataques hacia abajo. Si lo ejecutas desde el suelo, este movimiento hará que tu rival caiga."}/>

                    <StyleControles style={"descripcion"} text={"Combos de movimientos rápidos"}/>
                    <StyleControles style={"tecnica"} text={"Asalto evanescente (corto y medio alcance)"}/>
                    <StyleControles style={"letra"} text={"Pulsa [✖/A] + [☐/X] cerca de tu rival para aparecer detrás de él y poder atacarlo. Se puede ejecutar a corta y media distancia. Si lo usas a corta distancia, harás retroceder al rival y tendrás la oportunidad de seguir atacando."}/>
                    <StyleControles style={"tecnica"} text={"Entrada Frenética"}/>
                    <StyleControles style={"letra"} text={"Pulsa [✖/A] [☐/X] [☐/X] [☐/X] para ejecutar un ataque frenético desde un paso."}/>
                    <StyleControles style={"tecnica"} text={"Explosión Meteórica"}/>
                    <StyleControles style={"letra"} text={"Pulsa [△/Y] + [☐/X] después de una Acometida de Explosión Z para continuar con un ataque que golpeará y derribará a tu rival."}/>

                    <StyleControles style={"descripcion"} text={"Continuaciones"}/>
                    <StyleControles style={"tecnica"} text={"Ataque de Acometida Dragón"}/>
                    <StyleControles style={"letra"} text={"Ataque que puedes ejecutar durante la Acometida Dragón. Pulsa [☐/X] durante una Acometida Dragón o mantén pulsado el botón para realizar un ataque que haga retroceder a tu rival. Puedes continuar con un ataque de persecución."}/>
                    <StyleControles style={"tecnica"} text={"Persecución Dragón"}/>
                    <StyleControles style={"letra"} text={"Te permite perseguir a un enemigo que haya salido volando. Pulsa [✖/A] + [☐/X] y continúa con una Acometida de Ki [✖/A] en el aire. Este movimiento se puede continuar con un Golpe Dragón, que puede infligir más daño."}/>
                    <StyleControles style={"tecnica"} text={"Ataque evanescente"}/>
                    <StyleControles style={"letra"} text={"Pulsa [△/Y] para continuar con un ataque tras un asalto evanescente [✖/A] + [☐/X] incluso sin perseguir a tu rival con Persecución Dragón. Puedes escoger hacia dónde saldrá disparado tu rival con los controles de dirección."}/>
                    <StyleControles style={"tecnica"} text={"Ataque relampagueante"}/>
                    <StyleControles style={"letra"} text={"Pulsa [⭘/B] cuando puedas continuar con un ataque que mande a tu rival al suelo. Utiliza esta técnica tras un asalto evanescente [✖/A] + [☐/X] cuando quieras que el combate prosiga en el suelo."}/>
                    <StyleControles style={"tecnica"} text={"Lanzamiento"}/>
                    <StyleControles style={"letra"} text={"Pulsa [R1/RB] + [☐/X] para agarrar a tu rival y ejecutar un ataque de lanzamiento. Muchos personajes del juego tienen un ataque de agarre único."}/>
                    <StyleControles style={"tecnica"} text={"Lanzamiento terrestre"}/>
                    <StyleControles style={"letra"} text={"Pulsa [R1/RB] + [☐/X] para agarrar a un rival derribado y lanzarlo. Utiliza este ataque para seguir presionando a un oponente caído y causarle más daño al mismo tiempo."}/>

                    <StyleControles style={"titulo"} text={"III. Defensivos"}/>
                    <StyleControles style={"descripcion"} text={"Guardias"}/>
                    <StyleControles style={"letra"} text={"Pulsa [R1/RB] y orienta el movimiento con ↑ o ↓. Ciertos ataques parten desde arriba o abajo, así que estas guardias pueden ser útiles para ofrecer respuestas concretas.\n" +
                        "\n" +
                        "Ten cuidado con algunos movimientos ofensivos y defensivos, ya que las guardias dirigidas pueden dejarte en desventaja. La guardia se puede romper con un una rotura de guardia."}/>
                    <StyleControles style={"descripcion"} text={"Recuperación"}/>
                    <StyleControles style={"tecnica"} text={"Recuperación suelo/pared"}/>
                    <StyleControles style={"letra"} text={"Pulsa ↓ antes de golpear una pared o el suelo."}/>
                    <StyleControles style={"tecnica"} text={"Recuperación de Acometida Dragón"}/>
                    <StyleControles style={"letra"} text={"Pulsa ↑ antes de golpear el suelo o una pared. Te permite volver directamente donde está tu enemigo con una Acometida Dragón."}/>
                    <StyleControles style={"descripcion"} text={"Contraataques"}/>
                    <StyleControles style={"tecnica"} text={"Superpercepción"}/>
                    <StyleControles style={"letra"} text={"Mantener [⭘/B] consume Ki o habilidad acumulada (dependiendo del contraataque) y te sirve para contraatacar a tu rival antes de que te golpee. Si usas Superpercepción en el último momento contra un ataque frenético del rival, se activará una Oscilación Sónica, lo que te permitirá esquivar rápidamente el ataque y contraatacar mientras reduces su Ki. También contrarresta algunas ráfagas, como el Kamehameha, pero te costará 2 puntos de habilidad acumulada."}/>
                    <StyleControles style={"tecnica"} text={"Contraataques Z"}/>
                    <StyleControles style={"letra"} text={"Pulsa [R1/RB] antes de que te golpee el asalto evanescente de tu rival. Cuanto más dure el intercambio de golpes, más daño infligirá un contraataque. Se producirá un intercambio de Contraataques Z hasta que tu rival o tú no contraataquéis a tiempo."}/>
                    <StyleControles style={"tecnica"} text={"Contraataque vengador"}/>
                    <StyleControles style={"letra"} text={"Pulsa [R3/R] para ejecutar un contraataque que puedes utilizar incluso cuando te estén atacando. Usar este ataque consume una habilidad acumulada, pero es una respuesta efectiva contra cualquier ataque enemigo. Presta atención a la dirección desde la que te atacan antes de usar el contraataque vengador."}/>
                    <StyleControles style={"tecnica"} text={"Supercontraataques"}/>
                    <StyleControles style={"letra"} text={"Contraataque eficaz contra casi todos los ataques. Pulsa ↑ + [☐/X] para asestar un gran golpe que contrarreste a tu rival. Se puede usar mientras te golpean o te atacan desde atrás, pero debes ejecutarlos en el momento justo."}/>
                    <StyleControles style={"descripcion"} text={"Evasión"}/>
                    <StyleControles style={"tecnica"} text={"Evasión veloz"}/>
                    <StyleControles style={"letra"} text={"Pulsa [R1/RB] justo antes de algunos ataques  para esquivarlos y poder contraatacar y barrer a tu rival."}/>
                    <StyleControles style={"tecnica"} text={"Movimiento con paso"}/>
                    <StyleControles style={"letra"} text={"Pulsa [✖/A] y, a continuación, [R1/RB] para poder ejecutar una evasión contra un ataque."}/>
                </View>
            </ScrollView>

        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titulo: {
        marginTop: 30,
        fontSize: 22,
        fontFamily:AppTheme.titulo,
        textAlign: "center",
        color: "white",
        textShadowColor: "black",
        textShadowOffset: { width: 4, height: 0 },
        textShadowRadius: 5,
    },
    imagenChaoz: {
        marginTop: 15,
        width: 50,
        height: 50,
        alignSelf: 'center',
        borderRadius: 1000,
        borderWidth: 1,
    },
    imagenContainer: {
        width: '100%',
    },
    imagen: {
        alignSelf: 'center',
        width: 400,
        height: 210,
        marginTop: 20,
    },
    principal: {
        width: '95%',
        alignSelf: 'center',
        marginVertical: 30,
        borderColor: "black",
        borderWidth: 1,
        backgroundColor: "white",
        marginBottom:10
    },
})