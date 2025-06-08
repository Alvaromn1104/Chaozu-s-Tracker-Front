import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Defs, ClipPath, Polygon, Image as SvgImage } from 'react-native-svg';

const HexagonImage = ({ imageUrl }: { imageUrl?: string }) => {
    return (
        <View style={styles.container}>
        <Svg height="100%" width="100%" viewBox="0 0 100 100">
    <Defs>
        <ClipPath id="hexagonClip">
    <Polygon points="50 0, 95 25, 95 75, 50 100, 5 75, 5 25" />
        </ClipPath>
        </Defs>

        <SvgImage
    href={{ uri: imageUrl }}
    width="100%"
    height="100%"
    preserveAspectRatio="xMidYMid slice"
    clipPath="url(#hexagonClip)"
        />
        </Svg>
        </View>
);
};

const styles = StyleSheet.create({
    container: {
        width: 137,
        height: 140,
        overflow: 'hidden',
        // ❌ Elimina todo lo que añade color o sombra:
        backgroundColor: 'transparent', // corregido de 'trasparent'
        borderRadius: 0,
        borderWidth: 0,
        borderColor: 'transparent',
        shadowColor: 'transparent',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0,
        shadowRadius: 0,
        elevation: 0,
    },
});

export default HexagonImage;
