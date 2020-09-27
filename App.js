import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import ColorBox from "./components/ColorBox";

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Text style={styles.title}>Here are some boxes of different colours</Text>
      <View style={[styles.container, styles.cyan]}>
        <Text style={styles.text}>Cyan: #2aa198</Text>
      </View>
      <View style={[styles.container, styles.blue]}>
        <Text style={styles.text}>Blue: #268bd2</Text>
      </View>
      <View style={[styles.container, styles.magenta]}>
        <Text style={styles.text}>Magenta: #d33682</Text>
      </View>
      <View style={[styles.container, styles.orange]}>
        <Text style={styles.text}>Orange: #cb4b16</Text>
      </View>
      <ColorBox />
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
