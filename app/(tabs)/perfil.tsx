import { Input } from "@/components/form/Input";
import { LoginForm, loginSchema } from "@/constants/schemas/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "expo-router";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { View } from "react-native";
import { Avatar, Button, Text } from "react-native-paper";

export default function Perfil() {
  const router = useRouter();
  const methods = useForm<LoginForm>({ resolver: zodResolver(loginSchema) });

  return (
    <FormProvider {...methods}>
      <View
        style={{
          backgroundColor: "#31658B",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
          gap: 25,
        }}
      >
        <Avatar.Image
          size={130}
          source={require("../../assets/images/avatar.png")}
        />

        <Text
          variant="displayLarge"
          style={{ fontFamily: "GilroyBold", fontSize: 30, color: "#60FFCB" }}
        >
          Alana Rocha
        </Text>

        <View style={{ gap: 10 }}>
          <Input label="alanarodrigues.rocha@gmail.com" id="email" />
          <Input label="07/12/2004" id="idade" />
        </View>

        <View>
          <Button
            textColor="#fff"
            buttonColor="#a32121"
            style={{ width: 300, borderRadius: 4, padding: 4 }}
            onPress={() => router.push("/")}
          >
            Sair
          </Button>
        </View>
      </View>
    </FormProvider>
  );
}
