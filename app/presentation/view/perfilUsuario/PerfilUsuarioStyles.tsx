import { StyleSheet } from "react-native";
import {AppTheme} from "../../theme/AppThemes";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 30,
    },
    editButton: {
        padding: 8,
    },
    editIcon: {
        width: 24,
        height: 24,
    },
    title: {
        marginTop: 25,
        fontSize: 22,
        textAlign: "center",
        color: "white",
        textShadowColor: "black",
        textShadowOffset: { width: 4, height: 0 },
        textShadowRadius: 5,
        fontFamily: AppTheme.titulo,
    },
    logoutButton: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 6,
        paddingVertical: 6,
        borderRadius: 20,
    },
    logoutText: {
        fontSize: 20,
    },
    profileSection: {
        flexDirection: 'row',
        height: 192,
        width: '100%',
        paddingHorizontal: 10,
        paddingTop: 10,
        alignItems: 'center',
    },
    profileLeft: {
        flex: 1,
        alignItems: 'center',
        marginRight: 10,
    },
    userName: {
        fontSize: 20,
        marginTop: 12,
        color: 'black',
        maxWidth: '100%',
        textAlign: 'center',
        fontFamily: AppTheme.titulo,
    },
    userEmail: {
        fontSize: 14,
        marginTop: 4,
        color: 'black',
        fontFamily: AppTheme.titulo,
    },
    profileRight: {
        flex: 1,
        maxWidth: '80%',
        alignSelf: 'flex-start',
    },
    profileImageSmallContainer: {
        alignItems: 'center',
        marginBottom: 10,
    },
    profileImageSmall: {
        width: 140,
        height: 100,
    },
    descriptionBox: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        justifyContent: 'center',
    },
    username: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
        marginTop: 20,
        fontFamily: AppTheme.titulo,
    },
    descriptionText: {
        fontSize: 16,
        color: 'black',
        lineHeight: 22,
        fontFamily: AppTheme.titulo,
    },
    tabsContainer: {
        width: '80%',
        height: 480,
        alignSelf: 'center',
        marginTop: 85,
    },
    tabsContainerAjeno: {
        width: '80%',
        height: 507,
        alignSelf: 'center',
        marginTop: 80,
    },
    hexContainer: {
        width: 140,
        height: 140,
        overflow: 'hidden',
    },
    profileImageHex: {
        width: '100%',
        height: '100%',
    },
    marcoHex: {
        width: 140,
        height: 140,
        position: 'absolute',
        resizeMode: 'contain',
        zIndex: 1,
        transform: [{ translateX: -2 }],
    },
    modalBackdrop: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.4)',
    },
    modalContainer: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        width: '80%',
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 16,
        marginBottom: 20,
        fontFamily: AppTheme.titulo,
    },
    modalOption: {
        marginVertical: 8,
    },
    modalUploadText: {
        fontSize: 16,
        color: 'blue',
        fontFamily: AppTheme.titulo,
    },
    modalDeleteText: {
        fontSize: 16,
        color: 'red',
        fontFamily: AppTheme.titulo,
    },
    modalCancelText: {
        fontSize: 14,
        marginTop: 20,
        fontFamily: AppTheme.titulo,
    },
    hexWrapper: {
        width: 140,
        height: 140,
        position: 'relative',
    },
    editIconWrapper: {
        marginTop: 6,
    },
    modalTextInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        marginVertical: 12,
        width: '100%',
        backgroundColor: '#fff',
        fontFamily: AppTheme.titulo,
    },
});

export default styles;
