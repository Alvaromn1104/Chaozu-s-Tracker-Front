import React from 'react';
import { TouchableOpacity } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useFavorites } from "../../hooks/useFavorites";

interface Props {
    itemId: number;
}

const FavoriteButton = ({ itemId }: Props) => {
    const { isFavorite, toggleFavorite } = useFavorites();
    const scale = useSharedValue(1);

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ scale: scale.value }],
    }));

    const handlePress = () => {
        toggleFavorite(itemId);
        scale.value = withSpring(1.5, { damping: 3 }, () => {
            scale.value = withSpring(1);
        });
    };

    return (
        <TouchableOpacity onPress={handlePress}>
            <Animated.View style={[animatedStyle, { paddingRight: 10 }]}>
                <Icon
                    name={isFavorite(itemId) ? 'favorite' : 'favorite-border'}
                    size={35}
                    color={isFavorite(itemId) ? 'red' : 'black'}
                />
            </Animated.View>
        </TouchableOpacity>
    );
};

export default FavoriteButton;
