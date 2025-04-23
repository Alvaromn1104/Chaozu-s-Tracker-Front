import {AppColors} from "../../theme/AppThemes";
import {StyleSheet} from "react-native";


const styles = StyleSheet.create({

    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: 'black',
        textAlign: 'center',
        marginTop: "6%",
        marginBottom: "6%",
        fontSize: 34,
        textDecorationLine: 'underline',
    },
    logo: {
        width: 150,
        height: 150,
    },

    formContainer: {
        width: '95%',
        backgroundColor: AppColors.secondary,
        paddingVertical: 15,
        paddingHorizontal: 15,
        marginHorizontal: "auto",
        borderRadius: 20,

    },
    loginTittle: {
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: "center",
        marginBottom: 15,
        borderBottomWidth: 1,
        paddingBottom: 9,
        color: AppColors.secondary,
        borderBottomColor: AppColors.secondary,
    },

    formInput: {
        borderColor: '#d8d8d8',
        borderWidth: 1,
        paddingVertical: 8,
        paddingHorizontal: 10,
        borderRadius: 5
    },

    formInputContainer: {
        marginBottom: 20
    },

    formButton: {
        backgroundColor: AppColors.primary,
        paddingVertical: 7,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    formButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '500',
    },
    registroText: {
        fontSize: 13,
        textDecorationLine: 'underline',
    }

});

export default styles;