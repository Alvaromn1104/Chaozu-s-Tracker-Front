import React, { useState } from "react";
import { Menu, Button } from "react-native-paper";
import { View, Animated, Easing, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import styles from "./CustomPickerStyles";


interface OptionObject {
    label: string;
    value: string;
}

type Option = string | OptionObject;

interface Props {
    label: string;
    options: Option[];
    selectedValue: string | null;
    onValueChange: (value: string | null) => void;
    iconName?: string;
}

export function CustomPicker({
                                 label,
                                 options,
                                 selectedValue,
                                 onValueChange,
                                 iconName,
                             }: Props) {
    const [visible, setVisible] = useState(false);
    const rotateAnim = useState(new Animated.Value(0))[0];

    const openMenu = () => {
        setVisible(true);
        Animated.timing(rotateAnim, {
            toValue: 1,
            duration: 150,
            easing: Easing.out(Easing.circle),
            useNativeDriver: true,
        }).start();
    };

    const closeMenu = () => {
        Animated.timing(rotateAnim, {
            toValue: 0,
            duration: 150,
            easing: Easing.out(Easing.circle),
            useNativeDriver: true,
        }).start(() => setVisible(false));
    };

    const getLabel = (option: Option): string =>
        typeof option === "string" ? option : option.label;

    const getValue = (option: Option): string =>
        typeof option === "string" ? option : option.value;

    const rotate = rotateAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ["0deg", "180deg"],
    });

    const selectedLabel =
        options.find((o) => getValue(o) === selectedValue) ?? selectedValue;

    return (
        <View style={styles.wrapper}>
            <Menu
                visible={visible}
                onDismiss={closeMenu}
                anchor={
                    <Button
                        mode="contained"
                        onPress={openMenu}
                        style={styles.button}
                        contentStyle={styles.buttonContent}
                    >
                        <View style={styles.buttonInner}>
                            <Text style={styles.buttonTitle}>
                                {selectedValue && selectedLabel ? getLabel(selectedLabel) : label}
                            </Text>
                        </View>
                    </Button>
                }
            >
                <Menu.Item
                    onPress={() => {
                        onValueChange(null);
                        closeMenu();
                    }}
                    title={label}
                    titleStyle={styles.menuItemTitle}
                />

                {options.map((option, index) => (
                    <Menu.Item
                        key={index}
                        onPress={() => {
                            onValueChange(getValue(option));
                            closeMenu();
                        }}
                        title={getLabel(option)}
                        titleStyle={styles.menuItemTitle}
                    />
                ))}
            </Menu>
        </View>
    );
}
