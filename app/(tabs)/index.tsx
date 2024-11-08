import { useTheme } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  const { colors } = useTheme();

  return (
    <View style={{ backgroundColor: "#1D3D47" }}>
      <Text>oigf</Text>
      <Text>oigf</Text>
      <Text>oigf</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerBackground: {
    alignItems: "center",
    justifyContent: "center",
    height: 300,
    backgroundColor: "#1D3D47",
  },
  logo: {
    width: 120,
    height: 120,
  },
  title: {
    fontSize: 32,
    color: "#FFFFFF",
    marginTop: 20,
    fontWeight: "bold",
  },
  contentContainer: {
    padding: 20,
  },
});
