import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import {
    createMaterialTopTabNavigator,
    MaterialTopTabBar,
    MaterialTopTabBarProps
} from '@react-navigation/material-top-tabs';
import {ResizeMode, Video} from 'expo-av';
import {AppTheme} from "../../../theme/AppThemes";

const Tab = createMaterialTopTabNavigator();

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

interface OtherUserTabsProps {
    favoritos: Favorito[];
    clips: Clip[];
    trofeos: Trofeo[];
}

function Favourite({ favoritos }: { favoritos: Favorito[] }) {
    return (
        <View style={styles.sectionContainer}>
            <FlatList
                data={favoritos}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <Image source={{ uri: item.url }} style={styles.image} />
                )}
                numColumns={2}
                contentContainerStyle={{ paddingBottom: 10, alignItems: 'center' }}
            />
        </View>
    );
}

function Videos({ clips }: { clips: Clip[] }) {
    return (
        <View style={styles.sectionContainer}>
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
                    <View style={styles.videoWrapper}>
                        <Video
                            source={{ uri: item.url }}
                            style={styles.video}
                            useNativeControls
                            resizeMode={ResizeMode.CONTAIN}
                            isLooping
                        />
                        <Text style={styles.clipTitle}>{item.nombre}</Text>
                    </View>
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

export default function OtherUserTabs({ favoritos, clips, trofeos }: OtherUserTabsProps) {
    return (
        <Tab.Navigator
            tabBar={(props) => <CustomTabBar {...props} />}
            screenOptions={{
                tabBarLabelStyle: { fontSize: 9, fontFamily: AppTheme.titulo },
                tabBarIndicatorStyle: { backgroundColor: '#F97316' },
            }}
        >
            <Tab.Screen name="Favs">
                {() => <Favourite favoritos={favoritos} />}
            </Tab.Screen>
            <Tab.Screen name="Clips">
                {() => <Videos clips={clips} />}
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
        borderRadius: 10,
        overflow: 'hidden',
    },
    sceneContainer: {
        paddingHorizontal: 20,
        alignSelf: 'center',
        backgroundColor: 'transparent',
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
    },
    image: {
        width: 100,
        height: 100,
        margin: 5,
        borderRadius: 10,
    },
    videosContainer: {
        paddingBottom: 20,
        paddingHorizontal: 10,
        flexGrow: 1,
        justifyContent: 'center',
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
        shadowRadius: 4,
    },
    video: {
        width: '100%',
        height: '100%',
    },
    clipTitle: {
        color: 'white',
        textAlign: 'center',
        marginTop: 4,
        fontSize: 12,
        fontFamily: AppTheme.titulo
    },
    trophyItem: {
        width: 140,
        alignItems: 'center',
        margin: 10,
    },
    trophyImage: {
        width: 60,
        height: 60,
        marginBottom: 8,
    },
    trophyTitle: {
        fontSize: 9,
        textAlign: 'center',
        color: 'black',
        fontFamily: AppTheme.titulo
    },
});
