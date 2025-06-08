import React, {useEffect, useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import {PropStackNaviation} from "../../interfaces/StackNav";
import {useLocalStorage} from "../../hooks/UseLocalStorage";
import ViewModel from "./PerfilUsuarioViewModel";
import styles from "./EditarPerfilStyles";
import {Picker} from "@react-native-picker/picker";
import {RangoType} from "../../../domain/entities/RangoType";
import {Dropdown} from "react-native-element-dropdown";

export function EditarPerfilScreen({navigation, route}: PropStackNaviation) {

    const {user, getUserSession} = useLocalStorage();
    const { userName, description,rango, onChangeProfile, updateProfile, errorMessage, success } = ViewModel.EditarPerfilViewModel();
    const rangos: RangoType[] = [
        "UNRATED", "Z",
        "S1", "S2", "S3", "S4", "S5",
        "A1", "A2", "A3", "A4", "A5",
        "B1", "B2", "B3", "B4", "B5",
        "C1", "C2", "C3", "C4", "C5",
        "D1", "D2", "D3", "D4", "D5"
    ];

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

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Rango</Text>
                    <Dropdown
                        style={styles.input}
                        containerStyle={styles.dropdownContainer}
                        placeholderStyle={styles.dropdownText}
                        selectedTextStyle={styles.dropdownText}
                        itemTextStyle={styles.dropdownItemText}
                        data={rangos.map(r => ({ label: r, value: r }))}
                        labelField="label"
                        valueField="value"
                        placeholder="Selecciona un rango"
                        value={rango}
                        onChange={(item) => onChangeProfile("rango", item.value)}
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