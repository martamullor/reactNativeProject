import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => {
                navigation.navigate('ColorPalette')
            } }>
                <Text style={styles.text}>Solarized</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        paddingHorizontal: 10,
        paddingVertical: 10,
        fontWeight: "bold",
        marginHorizontal: 10,
        marginBottom: 10
    },
    text: {
        fontWeight: "bold",
        fontSize: 15
    }
});