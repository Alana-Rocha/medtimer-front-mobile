import React from "react";
import { View, Image, Text } from "react-native";
import { Button, Divider } from "react-native-paper";
import { useRouter } from "expo-router";
import Input from "@/components/form/Input";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View
      style={{
        backgroundColor: "#31658B",
        // flex: 1,
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        gap: 5,
      }}
    >
      <View
        style={{
          backgroundColor: "#31658B",
          justifyContent: "center",
          alignItems: "center",
          gap: 10,
        }}
      >
        <Image
          source={require("../assets/images/logo.png")}
          style={{ width: 200, height: 200 }}
        />

        <Text
          style={{ fontFamily: "GilroyBold", fontSize: 30, color: "#60FFCB" }}
        >
          Faça seu Login
        </Text>
      </View>

      <Input label="E-mail" />
      <Input label="Senha" secureTextEntry={true} />
      <Button textColor="#E8E1C5" onPress={() => router.push("/cadastro")}>
        Não possui cadastro? Criar cadastro {">>"}
      </Button>
    </View>
  );
}
