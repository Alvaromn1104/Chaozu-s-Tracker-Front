import {StyleSheet} from "react-native";
import {AppTheme} from "../../theme/AppThemes";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },
    innerContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 24,
        fontFamily:AppTheme.titulo,
        color: "white",
        textShadowColor: "black",
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 5,
        marginBottom: 20,
    },
    inputContainer: {
        width: '100%',
        marginBottom: 15,
    },
    label: {
        fontSize: 20,
        fontFamily:AppTheme.cuerpo,
        color: "white",
        textShadowColor: "black",
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 3,
        marginBottom: 5,
    },
    input: {
        height: 45,
        fontFamily:AppTheme.cuerpo,
        fontSize: 17,
        borderColor: 'black',
        borderWidth: 1,
        backgroundColor: 'white',
        borderRadius: 8,
        paddingHorizontal: 10,
    },

    saveButton: {
        backgroundColor: 'rgba(255, 140, 0, 0.9)', // Naranja
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'black',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        width: '100%',
        marginTop: 10,
    },
    saveButtonText: {
        color: 'white',
        fontSize: 20,
        fontFamily:AppTheme.cuerpo,
        textShadowColor: 'black',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
    },
    dropdownText: {
        fontFamily: AppTheme.cuerpo,
        fontSize: 17,
        color: 'black',
    },

    dropdownItemText: {
        fontFamily: AppTheme.cuerpo,
        fontSize: 16,
        color: 'black',
    },

    dropdownContainer: {
        borderRadius: 8,
        borderColor: 'black',
        borderWidth: 1,
        width: 370
    },
    cancelButton: {
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'black',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        width: '100%',
        marginTop: 10,
    },
    cancelButtonText: {
        color: 'white',
        fontSize: 20,
        fontFamily:AppTheme.cuerpo,
        textShadowColor: 'black',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
    },
});

export default styles;