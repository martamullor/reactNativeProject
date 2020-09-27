import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { black } from "color-name";

export default function ColorBox({ colorName, hexColor }) {
  const boxColor = {
    backgroundColor: hexColor
  };
  const textColor = {
    color:
      parseInt(hexColor.replace("#", ""), 16) > 0xffffff / 1.1
        ? "black"
        : "white"
  };
  return (
    <View style={[styles.container, boxColor]}>
      <Text style={[styles.text, textColor]}>
        {colorName}: {hexColor}
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
    fontSize: 15
  }
});
