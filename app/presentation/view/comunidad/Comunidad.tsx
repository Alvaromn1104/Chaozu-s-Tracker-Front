import React from 'react';
import {
    ActivityIndicator,
    FlatList,
    ImageBackground,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from "react-native";
import { useNavigation } from '@react-navigation/native';
import { PropStackNaviation } from "../../interfaces/StackNav";
import { useComunidadViewModel } from "./ComunidadViewModel";
import { UserCard } from "../../components/comunidad/UserCard";
import {AppTheme} from "../../theme/AppThemes";

export function ComunidadScreen() {
    const { users, loading, error } = useComunidadViewModel();
    const navigation = useNavigation<PropStackNaviation['navigation']>();

    if (loading) {
        return (
            <View style={styles.center}>
                <ActivityIndicator size="large" color="#fff" />
            </View>
        );
    }

    if (error) {
        return (
            <View style={styles.center}>
                <Text style={styles.error}>{error}</Text>
            </View>
        );
    }

    return (
        <ImageBackground
            source={require('../../../../assets/comunidad/fondo.png')}
            style={styles.background}
        >
            <View style={styles.header}>
                <Text style={styles.title}>Comunidad</Text>
            </View>

            <FlatList
                style={styles.list}
                contentContainerStyle={styles.listContent}
                data={users}
                keyExtractor={item => item.id!.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => navigation.navigate('PerfilUsuarioAjenoScreen', { userId: item.id! })}
                    >
                        <UserCard
                            userName={item.userName}
                            description={item.description}
                            pfp={item.pfp}
                            rango={item.rango}
                        />
                    </TouchableOpacity>
                )}
            />
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
    },
    header: {
        alignItems: "center",
        marginTop: 30,
        marginBottom: 10,
    },
    title: {
        fontSize: 24,
        color: "#fff",
        textAlign: "center",
        textShadowColor: "black",
        textShadowOffset: { width: 4, height: 0 },
        textShadowRadius: 5,
        fontFamily: AppTheme.titulo,
    },
    list: {
        flex: 1,
        width: '100%',
    },
    listContent: {
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    error: {
        color: "red",
        fontSize: 16,
        fontFamily: AppTheme.titulo,
    },
});
