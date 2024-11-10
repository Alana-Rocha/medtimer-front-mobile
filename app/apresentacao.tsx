import React from "react";
import { View, Image } from "react-native";
import { Button } from "react-native-paper";

export default function Apresentacao() {
  return (
    <View
      style={{
        backgroundColor: "#31658B",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 25,
      }}
    >
      <Button
        icon="facebook"
        mode="contained"
        buttonColor="#fff"
        textColor="#000"
        onPress={() => console.log("Pressed")}
        style={{ width: 290, borderRadius: 8, borderColor: "#000" }}
      >
        Entrar com o Google
      </Button>
    </View>
  );
}
