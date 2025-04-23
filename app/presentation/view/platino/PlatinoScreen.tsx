import {Image, ImageBackground, ScrollView, StyleSheet, Text, View} from "react-native";
import {TrophyText} from "./PlatinoContenido";
import {PlatinoComponent} from "./PlatinoComponent";
import styles from "./PlatinoStyle";

export function PlatinoScreen() {
    return (
        <ImageBackground source={require('../../../../assets/imagenesFondo/fondoPrincipal.jpg')} style={styles.container} >
            <ScrollView style={styles.containerScroll} horizontal={false}>
                <View>
                    <Image style={styles.imagenChaoz} source={require("../../../../assets/logo.png")}></Image>
                    <Text style={styles.titulo}>TROFEOS PLATINO</Text>
                </View>

                {TrophyText.map((item, index) => (
                    <PlatinoComponent key={index} url={item.url} title={item.title} description={item.description} />
                ))}

            </ScrollView>
        </ImageBackground>
    )
}

