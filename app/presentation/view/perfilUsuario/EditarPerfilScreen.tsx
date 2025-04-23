import React, {useEffect, useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import {PropStackNaviation} from "../../interfaces/StackNav";
import {useLocalStorage} from "../../hooks/UseLocalStorage";
import ViewModel from "./PerfilUsuarioViewModel";
import styles from "./EditarPerfilStyles";

export function EditarPerfilScreen({navigation, route}: PropStackNaviation) {

    const {user, getUserSession} = useLocalStorage();
    const { userName, description, onChangeProfile, updateProfile, errorMessage, success } = ViewModel.EditarPerfilViewModel();

    const handleSave = async () => {

        if (!user?.id) {
            return;
        }


        try {
            await updateProfile(user.id);
        } catch (error) {
            console.log("❌ Error al actualizar el perfil:", error);
        }
    }

    useEffect(() => {
        if (success) {
            navigation.goBack();
        }
    }, [success]);

    return (
        <ImageBackground
            source={require("../../../../assets/imagenesFondo/fondo_user_profile.jpg")}
            style={styles.container}
        >
            <View style={styles.innerContainer}>
                <Text style={styles.title}>EDITAR PERFIL</Text>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Nombre de Usuario</Text>
                    <TextInput
                        style={styles.input}
                        value={userName}
                        onChangeText={(value) => onChangeProfile("userName", value)}
                        placeholder="Nuevo nombre"
                        placeholderTextColor="gray"
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Descripción</Text>
                    <TextInput
                        style={styles.input}
                        value={description}
                        onChangeText={(value) => onChangeProfile("description", value)}
                        placeholder="Nueva descripción"
                        placeholderTextColor="gray"
                        multiline
                    />
                </View>

                <TouchableOpacity style={styles.saveButton} onPress={() => handleSave()}>
                    <Text style={styles.saveButtonText}>GUARDAR CAMBIOS</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.goBack()}>
                    <Text style={styles.cancelButtonText}>CANCELAR</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
}