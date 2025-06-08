import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imagenChaoz: {
        marginTop: 15,
        width: 50,
        height: 50,
        alignSelf: 'center',
        borderRadius: 1000,
        borderWidth: 1,
    },
    headerContainer: {
        alignSelf: "center",
        flexDirection: "row",
    },
    inicioSesion: {
        width: 105,
        height: 30,
        marginLeft: 70,
        marginTop: 27,
        position: "absolute",
        resizeMode: 'cover'
    },
    alignContainer: {
        flexDirection: "row",
        alignSelf: 'center',
    },
    scrollContent: {
        paddingBottom: 20,
    },
});

export default styles;