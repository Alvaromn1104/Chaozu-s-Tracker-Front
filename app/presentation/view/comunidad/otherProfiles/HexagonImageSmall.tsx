import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Defs, ClipPath, Polygon, Image as SvgImage } from 'react-native-svg';

const HexagonImageSmall = ({ imageUrl }: { imageUrl?: string }) => {
    return (
        <View style={styles.container}>
        <Svg height="100%" width="100%" viewBox="0 0 100 100">
    <Defs>
        <ClipPath id="hexagonClipSmall">
    <Polygon points="50 0, 95 25, 95 75, 50 100, 5 75, 5 25" />
        </ClipPath>
        </Defs>
        <SvgImage
    href={{ uri: imageUrl }}
    width="100%"
    height="100%"
    preserveAspectRatio="xMidYMid slice"
    clipPath="url(#hexagonClipSmall)"
    transform="translate(-1, 0)"
        />
        </Svg>
        </View>
);
};

const styles = StyleSheet.create({
    container: {
        width: 57,
        height: 60,
        overflow: 'hidden',
        backgroundColor: 'transparent',


    },
});

export default HexagonImageSmall;
