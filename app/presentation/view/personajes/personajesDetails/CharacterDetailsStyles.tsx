import {StyleSheet} from "react-native";
import {AppTheme} from "../../../theme/AppThemes";

const styles = StyleSheet.create({
    imagenChaoz: {
        marginTop: 15,
        width: 50,
        height: 50,
        alignSelf: 'center',
        borderRadius: 1000,
        borderWidth: 1,
    },
    titulo: {
        marginTop: 30,
        fontSize: 22,
        fontFamily: AppTheme.titulo,
        textAlign: "center",
        color: "white",
        textShadowColor: "black",
        textShadowOffset: { width: 4, height: 0 },
        textShadowRadius: 5,
    },
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    principal: {
        width: '100%',
        flex: 1,
        marginVertical: 30
    },
    adjustContainer: {
        width: '95%',
        margin: "auto",
        marginBottom: 40,
        borderWidth: 2,
        borderColor: "black",
        backgroundColor: 'rgba(255, 255, 255, 0.39)',
    },
    goku: {
        fontSize: 27,
        fontFamily:AppTheme.cuerpo,
        textAlign: "center",
        marginBottom: 10,
        marginLeft: 50,
        marginTop: 10,
        color: "white",
        textShadowColor: "black",
        textShadowOffset: { width: 4, height: 0 },
        textShadowRadius: 5,
        alignSelf: 'center',
        flex: 1,
    },
    like: {
        position: "absolute",
        right: 15,
    },
    imagenContainer: {
        alignSelf: 'center',
    },
    imagen: {
        marginTop: 10,
        marginBottom: 40,
        width: 110,
        height: 250,
    },
    habilidadesTitle: {
        fontSize: 23,
        fontFamily: AppTheme.cuerpo,
        marginBottom: 10,
        textAlign: "center",
        color: "white",
        textShadowColor: "black",
        textShadowOffset: { width: 4, height: 0 },
        textShadowRadius: 5,
    },
    habilidadesContainer: {
        width: "100%",
        alignItems: "center",
    },
    transformacionesContainer: {
        alignItems: "center",
        marginTop: 30,
    },
    imagenTrans: {
        marginTop: 10,
        marginBottom: 15,
        marginHorizontal: 10,
        width: 150,
        height: 200,
    },
    nameContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        position: "relative",
    }
})

export default styles;