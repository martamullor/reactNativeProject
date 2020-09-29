import React from "react";
import { StyleSheet, Text, SafeAreaView, FlatList } from "react-native";
import ColorBox from "../components/ColorBox";

export default function ColorPalette({route}) {
    const { colors, paletteName } = route.params;
  return (
        <FlatList
          style={styles.safeArea}
          keyExtractor={item => item.colorName}
          data={colors}
          keyExtractor={item => item.hexCode}
          renderItem={({ item }) => (
            <ColorBox colorName={item.colorName} hexColor={item.hexCode} />
          )}
          ListHeaderComponent={<Text style={styles.title}>{paletteName}</Text>}
        />
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 2,
    backgroundColor: "white"
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
    marginBottom: 10,
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