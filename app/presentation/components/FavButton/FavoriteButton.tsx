import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useFavorites} from "../../hooks/useFavorites";



const FavoriteButton = ({ itemId }: { itemId: string}) => {
    const {favorites, toggleFavorite} = useFavorites();
    const isFavorite = favorites[itemId] || false;
    const scale = useSharedValue(1);

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ scale: scale.value }]
        };
    });

    const handlePress = () => {
        toggleFavorite(itemId)
        scale.value = withSpring(1.5, { damping: 3 }, () => {
            scale.value = withSpring(1);
        });
    };

    return (
        <TouchableOpacity
            onPress={handlePress}
        >
            <Animated.View style={[animatedStyle, { paddingRight: 10 }]}>
                <Icon name={isFavorite ? 'favorite' : 'favorite-border'} size={35} color={isFavorite ? 'red' : 'black'} />
            </Animated.View>
        </TouchableOpacity>
    );
};

export default FavoriteButton;