import {StyleSheet} from "react-native";
import {AppTheme} from "../../theme/AppThemes";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    fila: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginVertical: 10,
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
    buscador: {
        backgroundColor: "#fff",
        margin: 10,
        padding: 8,
        borderRadius: 8,
        fontSize: 12,
        fontFamily: AppTheme.titulo,
    },
    filtrosFila: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: 10,
        marginTop: 10,
        gap: 6,
    },

    filtrosContainer: {
        paddingHorizontal: 16,
    },
    botonLimpiarWrapper: {
        alignItems: "center",
        marginVertical: 5,
    },

    botonLimpiar: {
        backgroundColor: "#f4b400",
        borderRadius: 24,
        width: 48,
        height: 48,
        justifyContent: "center",
        alignItems: "center",
    },
    encabezadoFijo: {
        paddingTop: 20,
        paddingHorizontal: 16,
        paddingBottom: 10,
        backgroundColor: 'transparent',
    },
});

export default styles;