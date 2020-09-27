import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import ColorBox from "./components/ColorBox";

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Text style={styles.title}>Here are some boxes of different colours</Text>
      <ColorBox colorName="Cyan" hexCode="#2aa198" />
      <ColorBox colorName="Blue" hexCode="#268bd2" />
      <ColorBox colorName="Magenta" hexCode="#d33682" />
      <ColorBox colorName="Orange" hexCode="#cb4b16" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 2
  },
  title: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
    paddingHorizontal: 10,
    paddingTop: 40,
    paddingBottom: 10
  },
  container: {
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 10,
    fontWeight: "bold",
    marginHorizontal: 10,
    marginBottom: 10
  },
  cyan: {
    backgroundColor: "#2aa198"
  },
  blue: {
    backgroundColor: "#268bd2"
  },
  magenta: {
    backgroundColor: "#d33682"
  },
  orange: {
    backgroundColor: "#cb4b16"
  },
  text: {
    fontWeight: "bold",
    fontSize: 15,
    color: "white"
  }
});
