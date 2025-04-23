import {StyleSheet} from "react-native";
import {AppTheme} from "../../theme/AppThemes";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imagenChaoz: {
        marginTop: 15,
        width: 50,
        height: 50,
        alignSelf: 'center',
        borderRadius: 50,
        borderWidth: 1,
    },
    titulo: {
        marginTop: 40,
        fontSize: 22,
        textAlign: "center",
        color: "white",
        textShadowColor: "black",
        textShadowOffset: { width: 4, height: 0 },
        textShadowRadius: 5,
        fontFamily: AppTheme.titulo
    },
    containerScroll: {
        width: "90%",
    },
    personajesContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        marginTop: 20,
    },
});

export default styles;