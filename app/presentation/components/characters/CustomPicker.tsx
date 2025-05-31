import React, { useState } from "react";
import { Menu, Button } from "react-native-paper";
import { View } from "react-native";
import styles from "./CustomPickerStyles";

interface Props {
    label: string;
    options: string[];
    selectedValue: string | null;
    onValueChange: (value: string | null) => void;
    iconName?: string;
}

export function CustomPicker({ label, options, selectedValue, onValueChange }: Props) {
    const [visible, setVisible] = useState(false);

    return (
        <View style={styles.wrapper}>
            <Menu
                visible={visible}
                onDismiss={() => setVisible(false)}
                anchor={
                    <Button
                        mode="contained"
                        onPress={() => setVisible(true)}
                        style={styles.button}
                        labelStyle={styles.buttonLabel}
                    >
                        {selectedValue || label}
                    </Button>
                }
            >
                <Menu.Item onPress={() => onValueChange(null)} title={label} />
                {options.map((option, index) => (
                    <Menu.Item
                        key={index}
                        onPress={() => {
                            onValueChange(option);
                            setVisible(false);
                        }}
                        title={option}
                    />
                ))}
            </Menu>
        </View>
    );
}
