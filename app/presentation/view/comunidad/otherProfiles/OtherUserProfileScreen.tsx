import React, { useEffect } from 'react';
import {
    View,
    Text,
    ImageBackground,
    Image,
} from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { useLocalStorage } from '../../../hooks/UseLocalStorage';
import HexagonImage from '../../../components/userProfile/HexagonImage';
import { usePerfilAjenoViewModel } from './ViewModel';
import styles from '../../perfilUsuario/PerfilUsuarioStyles';
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../../../../App";
import OtherUserTabs from "./TabAjeno";

export type PropStackNaviation = StackScreenProps<RootStackParamList, 'PerfilUsuarioAjenoScreen'>;

const rangoImages: Record<string, any> = {
    A1: require('../../../../../assets/userProfile/rangos/A1.png'),
    A2: require('../../../../../assets/userProfile/rangos/A2.png'),
    A3: require('../../../../../assets/userProfile/rangos/A3.png'),
    A4: require('../../../../../assets/userProfile/rangos/A4.png'),
    A5: require('../../../../../assets/userProfile/rangos/A5.png'),
    B1: require('../../../../../assets/userProfile/rangos/B1.png'),
    B2: require('../../../../../assets/userProfile/rangos/B2.png'),
    B3: require('../../../../../assets/userProfile/rangos/B3.png'),
    B4: require('../../../../../assets/userProfile/rangos/B4.png'),
    B5: require('../../../../../assets/userProfile/rangos/B5.png'),
    C1: require('../../../../../assets/userProfile/rangos/C1.png'),
    C2: require('../../../../../assets/userProfile/rangos/C2.png'),
    C3: require('../../../../../assets/userProfile/rangos/C3.png'),
    C4: require('../../../../../assets/userProfile/rangos/C4.png'),
    C5: require('../../../../../assets/userProfile/rangos/C5.png'),
    D1: require('../../../../../assets/userProfile/rangos/D1.png'),
    D2: require('../../../../../assets/userProfile/rangos/D2.png'),
    D3: require('../../../../../assets/userProfile/rangos/D3.png'),
    D4: require('../../../../../assets/userProfile/rangos/D4.png'),
    D5: require('../../../../../assets/userProfile/rangos/D5.png'),
    S1: require('../../../../../assets/userProfile/rangos/S1.png'),
    S2: require('../../../../../assets/userProfile/rangos/S2.png'),
    S3: require('../../../../../assets/userProfile/rangos/S3.png'),
    S4: require('../../../../../assets/userProfile/rangos/S4.png'),
    S5: require('../../../../../assets/userProfile/rangos/S5.png'),
    Z: require('../../../../../assets/userProfile/rangos/Z1.png'),
};

export function PerfilUsuarioAjenoScreen({ navigation, route }: PropStackNaviation) {
    const { user } = useLocalStorage();
    const profileUserId = route.params.userId;
    const isFocused = useIsFocused();

    const {
        profile,
        favoritos,
        clips,
        obtainedTrophies,
        errorMessage,
        getForeignProfile
    } = usePerfilAjenoViewModel();

    useEffect(() => {
        if (isFocused && profileUserId) {
            getForeignProfile(profileUserId);
        }
    }, [isFocused, profileUserId]);

    if (!profile) {
        return (
            <View style={styles.container}>
                <Text style={styles.username}>{errorMessage || 'Cargando perfil...'}</Text>
            </View>
        );
    }

    return (
        <ImageBackground
            source={require('../../../../../assets/userProfile/fondoFinal.png')}
            style={styles.container}
        >
            <View style={styles.headerContainer}>
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <Text style={styles.title}>
                        PERFIL DE {profile.userName.toUpperCase()}
                    </Text>
                </View>
            </View>

            <View style={styles.profileSection}>
                <View style={styles.profileLeft}>
                    <View style={styles.hexWrapper}>
                        <HexagonImage imageUrl={profile.pfp} />
                        <Image
                            source={require('../../../../../assets/userProfile/marco.png')}
                            style={styles.marcoHex}
                        />
                    </View>
                    <Text numberOfLines={2} ellipsizeMode="tail" style={styles.userName}>
                        {profile.userName}
                    </Text>
                </View>

                <View style={styles.profileRight}>
                    <View style={styles.profileImageSmallContainer}>
                        {profile.rango && rangoImages[profile.rango] && (
                            <Image
                                source={rangoImages[profile.rango]}
                                style={styles.profileImageSmall}
                            />
                        )}
                    </View>

                    <View style={styles.descriptionBox}>
                        <Text style={styles.descriptionText}>{profile.description}</Text>
                    </View>
                </View>
            </View>

            <View style={styles.tabsContainerAjeno}>
                <OtherUserTabs
                    favoritos={favoritos}
                    clips={clips}
                    trofeos={obtainedTrophies.map(t => ({
                        ...t,
                        tipo: t.tipo as 'bronce' | 'plata' | 'oro' | 'platino',
                    }))}
                />
            </View>
        </ImageBackground>
    );
}
