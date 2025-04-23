import {useState} from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import WebView from "react-native-webview";
import {AppTheme} from "../../theme/AppThemes";

interface Props {
    title: string;
    description: string;
    videoUrl: string;
}

export const NoticiasRectangle = ({ title, description, videoUrl }: Props) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.videoContainer}>
                <WebView
                    style={styles.video}
                    source={{ uri: videoUrl }}
                />
            </View>

            <Text style={styles.titulo}>{title}</Text>

            <Text style={styles.texto} numberOfLines={expanded ? undefined : 4}>
                {description}
            </Text>

            <TouchableOpacity style={styles.sabermas} onPress={() => setExpanded(!expanded)}>
                <Text style={styles.sabermasTexto}>{expanded ? "Mostrar menos" : "Saber más..."}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginTop: 20,
        borderWidth: 2,
        borderColor: 'black',
        backgroundColor: 'white',
        marginBottom: 10,
        shadowColor: 'black',
    },
    videoContainer: {
        flex: 1,
    },
    video: {
        width: 350,
        height: 200,
        alignSelf: 'center',
    },
    titulo: {
        fontSize: 20,
        fontFamily: AppTheme.cuerpo,
        textAlign: 'center',
        marginTop: 20,
        marginHorizontal: 10,
    },
    texto: {
        fontSize: 16,
        fontFamily: AppTheme.cuerpo,
        textAlign: 'left',
        lineHeight: 22,
        marginTop: 5,
    },
    sabermas: {
        width: 80,
        height: 28,
        alignSelf: 'flex-end',
        marginTop: 15,
        padding: 8,
        backgroundColor: 'lightblue',
        borderWidth: 1,
        borderColor: 'black',
    },
    sabermasTexto: {
        fontSize: 8,
        fontWeight: "bold",
        color: "black",
        alignSelf: 'center',
    }
})