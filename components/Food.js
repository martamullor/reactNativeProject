import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Food(props) {
  return (
    <View style={styles.food}>
      <Text style={styles.text}>{props.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  food: {
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 10,
    fontWeight: "bold",
    marginHorizontal: 10,
    marginBottom: 10,
    backgroundColor: "lavender"
  },
  text: {
    fontWeight: "bold",
    fontSize: 15,
    color: "black"
  }
});
