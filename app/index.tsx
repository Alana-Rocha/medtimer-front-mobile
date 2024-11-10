import React from "react";
import { View, Image } from "react-native";
import { Button } from "react-native-paper";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();

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
      <Image
        source={require("../assets/images/logo.png")}
        style={{ width: 200, height: 200 }}
      />
      <Button
        icon="google"
        mode="contained"
        buttonColor="#fff"
        textColor="#000"
        onPress={() => router.push("/apresentacao")}
        style={{ width: 290, borderRadius: 8, borderColor: "#000" }}
      >
        Entrar com o Google
      </Button>
    </View>
  );
}
