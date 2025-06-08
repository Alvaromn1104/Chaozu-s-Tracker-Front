import { StyleSheet } from "react-native";
import {AppTheme} from "../../theme/AppThemes";

export default StyleSheet.create({
    wrapper: {
        marginHorizontal: 5,
        marginBottom: 5,
    },
    button: {
        backgroundColor: "#f4b400",
        borderRadius: 8,
        elevation: 2,
        minWidth: 50,
        justifyContent: "space-between",
    },
    buttonLabel: {
        color: "#000",
        fontWeight: "bold",
        fontFamily: AppTheme.titulo,
        textTransform: "none",
    },
    buttonTitle: {
        color: "#000",
        fontFamily: AppTheme.titulo,
    },
    menuItemTitle: {
        fontFamily: AppTheme.titulo,
    },

    buttonContent: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 8,
    },
    buttonInner: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
    },
});
