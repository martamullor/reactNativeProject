import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function ColorBox({ colorName, hexCode }) {
  const boxColor = {
    backgroundColor: hexCode
  };
  return (
    <View style={[styles.container, boxColor]}>
      <Text style={styles.text}>
        {colorName}: {hexCode}
      </Text>
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
    fontSize: 15,
    color: "white"
  }
});
