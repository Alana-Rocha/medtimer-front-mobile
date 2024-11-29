import { Input } from "@/components/form/Input";
import { useQueryConsultaUsuario } from "@/hooks/querys/useQueryConsultaUsuario";
import { useAuthStore } from "@/hooks/stores/AuthStore";
import { capitalizeText } from "@/utils/capitalize";
import { useRouter } from "expo-router";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { ActivityIndicator, View } from "react-native";
import { Avatar, Button, Text } from "react-native-paper";

export default function Perfil() {
  const router = useRouter();
  const { data: usuarios, isFetching } = useQueryConsultaUsuario();
  const methods = useForm();
  const userAuth = useAuthStore((s) => s.user);

  const user = usuarios?.find((usuario) => usuario?.email === userAuth?.sub);

  if (!user && isFetching) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator animating={true} size="large" color="#31658B" />
        <Text
          style={{
            marginTop: 10,
            fontSize: 16,
            color: "#31658B",
            fontFamily: "GilroyRegular",
          }}
        >
          Carregando...
        </Text>
      </View>
    );
  }

  return (
    user && (
      <FormProvider {...methods}>
        <View
          style={{
            backgroundColor: "#31658B",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            paddingHorizontal: 30,
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
            {capitalizeText(user.nome)}
          </Text>

          <View style={{ gap: 10 }}>
            <Input mode="outlined" label={user.email} id="email" width="100%" />
            <Input label={user.dataNascimento} id="idade" width="100%" />
            <Button
              textColor="#fff"
              buttonColor="#a32121"
              style={{ borderRadius: 4, padding: 4 }}
              onPress={() => router.push("/")}
            >
              Sair
            </Button>
          </View>
        </View>
      </FormProvider>
    )
  );
}
