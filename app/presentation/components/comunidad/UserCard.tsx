import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';
import HexagonImageSmall from '../../view/comunidad/otherProfiles/HexagonImageSmall';
import {AppTheme} from "../../theme/AppThemes";

interface Props {
    userName: string;
    description?: string;
    pfp?: string;
    rango: string;
}

const rangoImages: Record<string, any> = {
    A1: require('../../../../assets/userProfile/rangos/A1.png'),
    A2: require('../../../../assets/userProfile/rangos/A2.png'),
    A3: require('../../../../assets/userProfile/rangos/A3.png'),
    A4: require('../../../../assets/userProfile/rangos/A4.png'),
    A5: require('../../../../assets/userProfile/rangos/A5.png'),
    B1: require('../../../../assets/userProfile/rangos/B1.png'),
    B2: require('../../../../assets/userProfile/rangos/B2.png'),
    B3: require('../../../../assets/userProfile/rangos/B3.png'),
    B4: require('../../../../assets/userProfile/rangos/B4.png'),
    B5: require('../../../../assets/userProfile/rangos/B5.png'),
    C1: require('../../../../assets/userProfile/rangos/C1.png'),
    C2: require('../../../../assets/userProfile/rangos/C2.png'),
    C3: require('../../../../assets/userProfile/rangos/C3.png'),
    C4: require('../../../../assets/userProfile/rangos/C4.png'),
    C5: require('../../../../assets/userProfile/rangos/C5.png'),
    D1: require('../../../../assets/userProfile/rangos/D1.png'),
    D2: require('../../../../assets/userProfile/rangos/D2.png'),
    D3: require('../../../../assets/userProfile/rangos/D3.png'),
    D4: require('../../../../assets/userProfile/rangos/D4.png'),
    D5: require('../../../../assets/userProfile/rangos/D5.png'),
    S1: require('../../../../assets/userProfile/rangos/S1.png'),
    S2: require('../../../../assets/userProfile/rangos/S2.png'),
    S3: require('../../../../assets/userProfile/rangos/S3.png'),
    S4: require('../../../../assets/userProfile/rangos/S4.png'),
    S5: require('../../../../assets/userProfile/rangos/S5.png'),
    Z:  require('../../../../assets/userProfile/rangos/Z1.png'),
};

export const UserCard = ({ userName, description, pfp, rango }: Props) => {
    return (
        <View style={styles.cardContainer}>
            <ImageBackground
                source={require('../../../../assets/comunidad/fondoCardFinal.jpg')}
                style={styles.backgroundImage}
                imageStyle={{ borderRadius: 6 }}
            >
                <View style={styles.cardContent}>
                    {/* IZQUIERDA */}
                    <View style={styles.leftSection}>
                        <View style={styles.hexWrapper}>
                            <HexagonImageSmall imageUrl={pfp} />
                            <Image
                                source={require('../../../../assets/userProfile/marco.png')}
                                style={styles.marcoHex}
                            />
                        </View>
                        <Text style={styles.userName}>{userName}</Text>
                    </View>

                    {/* DERECHA */}
                    <View style={styles.rightSection}>
                        {rango && rangoImages[rango] && (
                            <Image source={rangoImages[rango]} style={styles.rangoImage} />
                        )}
                        <Text style={styles.description}>
                            {description || 'Sin descripción'}
                        </Text>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        width: '100%',
        marginVertical: 10,
        borderRadius: 6,
        overflow: 'hidden',

        // Borde negro
        borderWidth: 1,
        borderColor: '#000',

        // Sombra iOS
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,

        // Sombra Android
        elevation: 5,
    },
    backgroundImage: {
        padding: 10,
    },
    cardContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    leftSection: {
        alignItems: 'center',
        marginRight: 15,
    },
    hexWrapper: {
        width: 60,
        height: 60,
        position: 'relative',
        marginBottom: 6,
    },
    marcoHex: {
        width: 60,
        height: 60,
        position: 'absolute',
        resizeMode: 'contain',
        zIndex: 1,
        transform: [{ translateX: -2 }],
    },
    userName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFFFFF',
        textShadowColor: 'rgba(0, 0, 0, 0.8)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
        textAlign: 'center',
        marginTop: 6,
        fontFamily: AppTheme.titulo,
    },
    rightSection: {
        flex: 1,
        justifyContent: 'center',
    },
    rangoImage: {
        width: 70,
        height: 50,
        alignSelf: 'flex-end',
    },
    description: {
        fontSize: 14,
        color: '#F0F0F0',
        textShadowColor: 'rgba(0, 0, 0, 0.6)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 1,
        marginTop: 10,
        textAlign: 'left',
        alignSelf: 'flex-start',
        maxWidth: '100%',
        fontFamily: AppTheme.titulo,
    },
});
