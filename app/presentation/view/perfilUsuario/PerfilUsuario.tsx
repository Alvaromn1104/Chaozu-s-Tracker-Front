import { PropStackNaviation } from "../../interfaces/StackNav";
import {Image, Text, View, ImageBackground, TouchableOpacity, Modal, Pressable, TextInput} from 'react-native';
import ViewModel from "./PerfilUsuarioViewModel";
import { useLocalStorage } from "../../hooks/UseLocalStorage";
import {useEffect, useState} from "react";
import styles from "./PerfilUsuarioStyles";
import allCharacters from "../../../data/personajes/personajes.json";
import { useIsFocused } from "@react-navigation/native";
import { Feather } from '@expo/vector-icons';
import MyTabs from "./tabNavigation/Tab";
import HexagonImage from "../../components/userProfile/HexagonImage";

export function PerfilUsuarioScreen({ navigation, route }: PropStackNaviation) {
    const { user, getUserSession } = useLocalStorage();
    const { deleteSession } = ViewModel.PerfilUsuarioViewModel();
    const { inforUserProfile, errorMessage, getInforUserProfile, obtainedTrophies } = ViewModel.GetInforUserProfileModel();
    const { uploadProfileImage, deleteProfileImage } = ViewModel.useProfileImageActions();
    const { uploadClip, deleteClip } = ViewModel.useClipActions();
    const isFocused = useIsFocused();
    const [modalVisible, setModalVisible] = useState(false);
    const [pageIndex, setPageIndex] = useState(0);
    const [modalClipVisible, setModalClipVisible] = useState(false);
    const [clipTitle, setClipTitle] = useState("");

    useEffect(() => {
        if (isFocused && user && user.id) {
            getInforUserProfile(user.id);
        }
    }, [isFocused, user]);

    useEffect(() => {
        getUserSession();
    }, []);

    const personajesFavoritos = allCharacters.filter(p =>
        inforUserProfile?.favoritosIds?.includes(p.id)
    );

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
        Z: require('../../../../assets/userProfile/rangos/Z1.png'),
    };

    const clipsGuardados = inforUserProfile?.clips || [];


    if (!inforUserProfile) {
        return (
            <View style={styles.container}>
                <Text style={styles.username}>Cargando perfil...</Text>
            </View>
        );
    }

    return (
        <>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalBackdrop}>
                    <View style={styles.modalContainer}>
                        <Text style={styles.modalTitle}>¿Qué deseas hacer?</Text>

                        <Pressable
                            onPress={async () => {
                                setModalVisible(false);
                                if (user?.id) {
                                    try {
                                        await uploadProfileImage(user.id);
                                        await getInforUserProfile(user.id);
                                    } catch {}
                                }
                            }}
                            style={styles.modalOption}
                        >
                            <Text style={styles.modalUploadText}>📤 Subir nueva imagen</Text>
                        </Pressable>

                        <Pressable
                            onPress={async () => {
                                setModalVisible(false);
                                if (user?.id) {
                                    await deleteProfileImage(user.id);
                                    await getInforUserProfile(user.id);
                                }
                            }}
                            style={styles.modalOption}
                        >
                            <Text style={styles.modalDeleteText}>🗑️ Eliminar imagen</Text>
                        </Pressable>

                        <Pressable onPress={() => setModalVisible(false)}>
                            <Text style={styles.modalCancelText}>Cancelar</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalClipVisible}
                onRequestClose={() => setModalClipVisible(false)}
            >
                <View style={styles.modalBackdrop}>
                    <View style={styles.modalContainer}>
                        <Text style={styles.modalTitle}>Subir nuevo clip</Text>

                        <TextInput
                            placeholder="Título del clip"
                            style={styles.modalTextInput}
                            value={clipTitle}
                            onChangeText={setClipTitle}
                        />

                        <Pressable
                            style={styles.modalOption}
                            onPress={async () => {
                                if (user?.id && clipTitle.trim()) {
                                    await uploadClip(user.id, clipTitle.trim());
                                    await getInforUserProfile(user.id);
                                    setModalClipVisible(false);
                                    setClipTitle("");
                                }
                            }}
                        >
                            <Text style={styles.modalUploadText}>🎥 Seleccionar video</Text>
                        </Pressable>

                        <Pressable onPress={() => setModalClipVisible(false)}>
                            <Text style={styles.modalCancelText}>Cancelar</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>

            <ImageBackground
                source={require("../../../../assets/userProfile/fondoFinal.png")}
                style={styles.container}
            >
                <View style={styles.headerContainer}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('EditarPerfilScreen')}
                        style={styles.editButton}
                    >
                        <Image
                            source={require('../../../../assets/pencil.png')}
                            style={styles.editIcon}
                        />
                    </TouchableOpacity>

                    <Text style={styles.title}>PERFIL DE USUARIO</Text>

                    <TouchableOpacity
                        onPress={() => {
                            deleteSession();
                            navigation.navigate('CategoriasScreen');
                        }}
                        style={styles.logoutButton}
                    >
                        <Text style={styles.logoutText}>🚪</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.profileSection}>
                    <View style={styles.profileLeft}>
                        <View style={styles.hexWrapper}>
                            <HexagonImage imageUrl={inforUserProfile.pfp} />
                            <Image
                                source={require('../../../../assets/userProfile/marco.png')}
                                style={styles.marcoHex}
                            />
                        </View>

                        <TouchableOpacity
                            onPress={() => setModalVisible(true)}
                            style={styles.editIconWrapper}
                        >
                            <Feather name="edit" size={24} color="black" />
                        </TouchableOpacity>
                        <Text
                            numberOfLines={2}
                            ellipsizeMode="tail"
                            style={styles.userName}
                        >
                            {inforUserProfile.userName}
                        </Text>
                        <Text style={styles.userEmail}>{user?.email}</Text>
                    </View>

                    <View style={styles.profileRight}>
                        <View style={styles.profileImageSmallContainer}>
                            {inforUserProfile.rango && rangoImages[inforUserProfile.rango] && (
                                <Image
                                    source={rangoImages[inforUserProfile.rango]}
                                    style={styles.profileImageSmall}
                                />
                            )}
                        </View>

                        <View style={styles.descriptionBox}>
                            <Text style={styles.descriptionText}>
                                {inforUserProfile.description}
                            </Text>
                        </View>
                    </View>
                </View>

                <View style={styles.tabsContainer}>
                    <MyTabs
                        favoritos={personajesFavoritos}
                        clips={clipsGuardados}
                        trofeos={obtainedTrophies.map((t) => ({
                            ...t,
                            tipo: t.tipo as 'bronce' | 'plata' | 'oro' | 'platino',
                        }))}
                        onAddClip={() => setModalClipVisible(true)}
                        onDeleteClip={async (clipId) => {
                            if (user?.id) {
                                await deleteClip(user.id, clipId);
                                await getInforUserProfile(user.id);
                            }
                        }}
                    />
                </View>
            </ImageBackground>
        </>
    );
}
