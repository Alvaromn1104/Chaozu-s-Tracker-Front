import {PropStackNaviation} from "../../interfaces/StackNav";
import {Image, Text, View, ImageBackground, TouchableOpacity, FlatList} from 'react-native';
import ViewModel from "./PerfilUsuarioViewModel";
import {useLocalStorage} from "../../hooks/UseLocalStorage";
import {useEffect, useState} from "react";
import CharacterImage from "../../components/userProfile/userProfile";
import styles from "./PerfilUsuarioStyles";
import {AppTheme} from "../../theme/AppThemes";
import {useIsFocused} from "@react-navigation/native";

export function PerfilUsuarioScreen({navigation, route}: PropStackNaviation) {

    const {user, getUserSession} = useLocalStorage();
    const {deleteSession} = ViewModel.PerfilUsuarioViewModel();
    const {inforUserProfile,errorMessage,getInforUserProfile} = ViewModel.GetInforUserProfileModel();
    const {favoriteItems} = ViewModel.GetFavoritosViewModel();
    const isFocused = useIsFocused();

    useEffect(() => {
        if (isFocused && user?.id) {
            getInforUserProfile(user.id);
        }
    }, [isFocused, user?.id]);

    useEffect(() => {
        getUserSession()
    }, [user]);

    useEffect(() => {
    }, [favoriteItems]);

    if (!inforUserProfile) {
        return (
            <View style={styles.container}>
                <Text style={styles.username}>Cargando perfil...</Text>
            </View>
        );
    }

    return (
        <ImageBackground
            source={require("../../../../assets/imagenesFondo/fondo_user_profile.jpg")}
            style={styles.container}
        >
            <View style={styles.innerContainer}>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Image style={styles.imagenChaoz} source={require("../../../../assets/logo.png")} />
                    <Text style={styles.titulo}>PERFIL DE USUARIO</Text>

                </View>



            <View style={styles.infoContainer}>
                <View style={styles.pfpContainer}>
                    <Text style={styles.username}>{inforUserProfile ? inforUserProfile.userName : "Cargando..."}</Text>
                    <TouchableOpacity style={styles.editProfileButton} onPress={() => {
                        navigation.navigate('EditarPerfilScreen')
                    }}>
                            <Image source={require('../../../../assets/pencil.png')} style={styles.editProfileIcon} />
                    </TouchableOpacity>
                    <Image
                    style={styles.imagenProfile}
                    source={require('../../../../assets/logo.png')}
                    />
                </View>

                <Text style={styles.persfav}>PERSONAJES FAVORITOS</Text>

                <FlatList
                    horizontal={true}
                    data={favoriteItems}
                    keyExtractor={(item) => item}
                    renderItem={({ item }) => <CharacterImage characterKey={item} />}
                    style={styles.listContainer}
                    contentContainerStyle={{ paddingHorizontal: 10 }}
                />

                <Text style={styles.persfav}>ACERCA DE MI</Text>
                <View style={styles.info}>
                    <Text style={{fontFamily:AppTheme.cuerpo, fontSize:20}}>
                        {inforUserProfile ? inforUserProfile.description : "Cargando descripción..."}
                    </Text>
                </View>

                <Text style={styles.persfav}>CLIPS</Text>
                <View style={styles.clips}>
                    <Text style={styles.clipsadd}>ADD FILE...</Text>
                </View>

                <TouchableOpacity style={styles.logoutButton} onPress={() => {
                    deleteSession();
                    navigation.navigate('CategoriasScreen');
                }}>
                    <Text style={styles.logoutText}>CERRAR SESIÓN</Text>
                </TouchableOpacity>


            </View>

            </View>
        </ImageBackground>
    )
}
