import {StyleSheet} from "react-native";
import {AppTheme} from "../../theme/AppThemes";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },
    innerContainer: {
        justifyContent: "space-between",
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
        marginTop: 20,
        fontSize: 22,
        fontFamily:AppTheme.titulo,
        color: "white",
        textShadowColor: "black",
        textShadowOffset: { width: 4, height: 0 },
        textShadowRadius: 5,
        textAlign: "left",
        marginHorizontal: 10,
    },
    username: {
        fontFamily:AppTheme.cuerpo,
        color: "white",
        textShadowColor: "black",
        textShadowOffset: { width: 4, height: 0 },
        textShadowRadius: 5,
        alignSelf: 'center',
        fontSize: 25,
        marginHorizontal: 10,
        marginVertical: 10,
    },
    persfav: {
        marginTop: 5,
        fontSize: 25,
        fontFamily:AppTheme.cuerpo,
        textAlign: "center",
        color: "white",
        textShadowColor: "black",
        textShadowOffset: { width: 4, height: 0 },
        textShadowRadius: 5,
    },
    scrollContainer: {
        paddingHorizontal: 10,
        paddingVertical: 20,
    },
    imgfav: {
        marginHorizontal: 10,
    },
    info: {
        borderWidth: 2,
        borderColor: 'black',
        backgroundColor: 'white',
        padding: 10,
        marginHorizontal: 10,
        marginTop: 15,
        shadowColor: 'black',
    },
    clips: {
        height: 100,
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        padding: 10,
        marginHorizontal: 10,
        marginTop: 15,
        shadowColor: 'black',
        alignItems: 'center',
    },
    clipsadd: {
        alignSelf: 'center',
        fontFamily:AppTheme.cuerpo,
        fontSize: 17,
        marginTop: 30,
    },
    listContainer: {
        paddingVertical: 3,
    },
    infoContainer: {
        marginHorizontal:20,
        marginVertical:30,
        paddingVertical:20,
        paddingHorizontal:20,
        backgroundColor: 'rgba(255, 255, 255, 0.4)'

    },
    imagenProfile: {
        width: 100,
        height: 100,
    },
    pfpContainer: {
        alignSelf: 'center',
        justifyContent: 'center',
    },
    logoutButton: {
        backgroundColor: 'rgba(255, 140, 0, 0.8)',
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginHorizontal: 10,
        marginTop: 20,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'black',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
    },

    logoutText: {
        color: 'white',
        fontSize: 22,
        fontFamily:AppTheme.cuerpo,
        textShadowColor: 'black',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 3,
    },
    editProfileButton: {
        position: 'absolute',
        right: -95,
        top: 2,
        backgroundColor: 'rgba(255, 140, 0, 0.8)',
        width: 40,
        height: 40,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
    },

    editProfileIcon: {
        width: 25,
        height: 25,
    },

});

export default styles;