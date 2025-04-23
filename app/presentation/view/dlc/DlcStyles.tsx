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
        borderRadius: 1000,
        borderWidth: 1,
    },
    titulo: {
        fontFamily: AppTheme.titulo,
        marginTop: 20,
        fontSize: 22,
        textAlign: "center",
        color: "white",
        textShadowColor: "black",
        textShadowOffset: { width: 4, height: 0 },
        textShadowRadius: 5,
        flexWrap: "wrap",
        width: "100%"
    },
    containerScroll: {
        width: "90%",
    },
    header: {
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 10,
    }
});

export default styles;