import React from 'react';
import {
    View,
    Text,
    FlatList,
    Image,
    StyleSheet,
    TouchableOpacity,
    Alert
} from 'react-native';
import {
    createMaterialTopTabNavigator,
    MaterialTopTabBar,
    MaterialTopTabBarProps
} from '@react-navigation/material-top-tabs';
import { Video, ResizeMode } from 'expo-av';
import AntDesign from '@expo/vector-icons/AntDesign';
import {AppTheme} from "../../../theme/AppThemes";

// Tipos
interface Favorito {
    id: number;
    url: string;
}

interface Clip {
    id: number;
    url: string;
    nombre: string;
}

interface Trofeo {
    id: number;
    imagen: string;
    nombre: string;
    tipo: 'bronce' | 'plata' | 'oro' | 'platino';
}

interface MyTabsProps {
    favoritos: Favorito[];
    clips: Clip[];
    trofeos: Trofeo[];
    onAddClip: () => void;
    onDeleteClip: (id: number) => void;
}

const Tab = createMaterialTopTabNavigator();

function Favourite({ favoritos }: { favoritos: Favorito[] }) {
    return (
        <View style={styles.sectionContainer}>
            <FlatList
                data={favoritos}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <Image
                        source={{ uri: item.url }}
                        style={{ width: 100, height: 100, margin: 5, borderRadius: 10 }}
                    />
                )}
                numColumns={2}
                contentContainerStyle={{ paddingBottom: 10, alignItems: 'center' }}
            />
        </View>
    );
}

function Videos({
                    clips,
                    onAddClip,
                    onDeleteClip
                }: {
    clips: Clip[];
    onAddClip: () => void;
    onDeleteClip: (id: number) => void;
}) {
    return (
        <View style={styles.sectionContainer}>
            <View style={styles.buttonRow}>
                <TouchableOpacity style={styles.iconButton} onPress={onAddClip}>
                    <AntDesign name="upload" size={24} color="black" />
                </TouchableOpacity>
            </View>

            <FlatList
                data={clips}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2}
                contentContainerStyle={[
                    styles.videosContainer,
                    clips.length === 1 && { justifyContent: 'center', alignItems: 'center' }
                ]}
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.videoWrapper}
                        onLongPress={() => {
                            Alert.alert(
                                'Eliminar clip',
                                `¿Estás seguro de que deseas eliminar el clip "${item.nombre}"?`,
                                [
                                    { text: 'Cancelar', style: 'cancel' },
                                    {
                                        text: 'Eliminar',
                                        style: 'destructive',
                                        onPress: () => onDeleteClip(item.id)
                                    }
                                ]
                            );
                        }}
                    >
                        <Video
                            source={{ uri: item.url }}
                            style={styles.video}
                            useNativeControls
                            resizeMode={ResizeMode.CONTAIN}
                            isLooping
                        />
                        <Text style={styles.clipTitle}>{item.nombre}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

function Blogs({ trofeos }: { trofeos: Trofeo[] }) {
    return (
        <View style={styles.sectionContainer}>
            <FlatList
                data={trofeos}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2}
                contentContainerStyle={{ paddingBottom: 10, alignItems: 'center' }}
                renderItem={({ item }) => (
                    <View style={styles.trophyItem}>
                        <Image
                            source={{ uri: item.imagen }}
                            style={[
                                styles.trophyImage,
                                item.tipo === 'plata' && { width: 50, height: 50, marginTop: 10 }
                            ]}
                            resizeMode="contain"
                        />
                        <Text style={styles.trophyTitle} numberOfLines={1} ellipsizeMode="tail">
                            {item.nombre}
                        </Text>
                    </View>
                )}
            />
        </View>
    );
}

function CustomTabBar(props: MaterialTopTabBarProps) {
    return (
        <View style={styles.customTabBarContainer}>
            <MaterialTopTabBar {...props} />
        </View>
    );
}

export default function MyTabs({
                                   favoritos,
                                   clips,
                                   trofeos,
                                   onAddClip,
                                   onDeleteClip
                               }: MyTabsProps) {
    return (
        <Tab.Navigator
            tabBar={(props) => <CustomTabBar {...props} />}
            screenOptions={{
                tabBarLabelStyle: { fontSize: 9, fontFamily: AppTheme.titulo, },
                tabBarIndicatorStyle: { backgroundColor: '#F97316' }
            }}
        >
            <Tab.Screen name="Favs">
                {() => <Favourite favoritos={favoritos} />}
            </Tab.Screen>
            <Tab.Screen name="Clips">
                {() => (
                    <Videos clips={clips} onAddClip={onAddClip} onDeleteClip={onDeleteClip} />
                )}
            </Tab.Screen>
            <Tab.Screen name="Trofeos">
                {() => <Blogs trofeos={trofeos} />}
            </Tab.Screen>
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    customTabBarContainer: {
        width: 200,
        alignSelf: 'center',
        backgroundColor: 'white',
        overflow: 'hidden'
    },
    sceneContainer: {
        paddingHorizontal: 20,
        alignSelf: 'center',
        backgroundColor: 'transparent'
    },
    image: {
        width: 100,
        height: 100,
        margin: 5,
        borderRadius: 10
    },
    textItem: {
        fontSize: 16,
        marginBottom: 10,
        fontFamily: AppTheme.titulo,
    },
    trophyItem: {
        width: 140,
        alignItems: 'center',
        margin: 10
    },
    trophyImage: {
        width: 60,
        height: 60,
        marginBottom: 8
    },
    trophyTitle: {
        fontSize: 9,
        textAlign: 'center',
        color: 'black',
        fontFamily: AppTheme.titulo,
    },
    videosContainer: {
        paddingBottom: 20,
        paddingHorizontal: 10,
        flexGrow: 1,
        justifyContent: 'center'
    },
    videoWrapper: {
        width: '48%',
        aspectRatio: 9 / 16,
        backgroundColor: '#f6f6f6',
        borderRadius: 10,
        overflow: 'hidden',
        marginBottom: 15,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4
    },
    video: {
        width: '100%',
        height: '100%'
    },
    sectionContainer: {
        backgroundColor: 'white',
        padding: 10,
        marginHorizontal: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
        width: '100%',
        alignSelf: 'center',
        flex: 1,
        borderRadius: 10
    },
    uploadButton: {
        alignItems: 'center',
        marginBottom: 12,
        alignSelf: 'center'
    },
    uploadText: {
        marginTop: 4,
        fontSize: 14,
        color: '#020202',
        fontFamily: AppTheme.titulo,
    },
    deleteButton: {
        alignItems: 'center',
        marginTop: 8
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 15
    },
    iconButton: {
        alignItems: 'center'
    },
    clipTitle: {
        color: 'white',
        textAlign: 'center',
        marginTop: 4,
        fontSize: 12,
        fontFamily: AppTheme.titulo,
    }
});
