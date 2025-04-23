import {Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {HistoriaComponent} from "../../components/historia/HistoriaComponent";
import {PropStackNaviation} from "../../interfaces/StackNav";
import styles from "./HistoriaStyles";

export function HistoriaScreen ({navigation, route}: PropStackNaviation) {
    return (
        <ImageBackground source={require('../../../../assets/imagenesFondo/fondoPrincipal.jpg')} style={styles.container} >
            <ScrollView style={styles.containerScroll} horizontal={false}>
                <View>
                    <Image style={styles.imagenChaoz} source={require("../../../../assets/logo.png")}></Image>
                    <Text style={styles.titulo}>HISTORIA: What if?...</Text>
                </View>

                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('GokuHistoriaScreen')
                    }}
                >
                    <HistoriaComponent url={"goku"} text={"Goku(super)"}/>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('VegetaHistoriaScreen')
                    }}
                >
                    <HistoriaComponent url={"vegeta"} text={"Vegeta(super)"}/>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('GohanHistoriaScreen')
                    }}
                >
                    <HistoriaComponent url={"gohan"} text={"Gohan(super)"}/>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('PiccoloHistoriaScreen')
                    }}
                >
                    <HistoriaComponent url={"piccolo"} text={"Piccolo"}/>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('FrezzerHistoriaScreen')
                    }}
                >
                    <HistoriaComponent url={"frezzer"} text={"Frezzer"}/>
                </TouchableOpacity>

            </ScrollView>
        </ImageBackground>
    );
};
