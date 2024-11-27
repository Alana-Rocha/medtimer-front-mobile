import { Input } from "@/components/form/Input";
import { LoginForm, loginSchema } from "@/constants/schemas/schemas";
import { useMutationLogin } from "@/hooks/mutations/useMutationLogin";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "expo-router";
import React from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { Image, Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import Toast from "react-native-toast-message";

export default function HomeScreen() {
  const router = useRouter();
  const methods = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", senha: "" },
  });

  const { mutateAsync, isLoading } = useMutationLogin();

  const submit: SubmitHandler<LoginForm> = async (data) => {
    await mutateAsync({
      email: data.email,
      senha: data.senha,
    });
    Toast.show({
      type: "success",
      text1: "Sucesso",
      text2: "Login realizado!",
      visibilityTime: 4000,
      autoHide: true,
      topOffset: 30,
      bottomOffset: 40,
    });
    router.push("/(tabs)/medicamentos");
  };

  return (
    <FormProvider {...methods}>
      <View
        style={{
          backgroundColor: "#31658B",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
          gap: 20,
          paddingHorizontal: 35,
        }}
      >
        <View
          style={{
            backgroundColor: "#31658B",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../assets/images/logo.png")}
            style={{ width: 230, height: 180 }}
          />
        </View>

        <View
          style={{
            gap: 15,
            // alignItems: "center",
          }}
        >
          <Text
            style={{
              fontFamily: "GilroyBold",
              fontSize: 30,
              color: "#60FFCB",
              textAlign: "center",
            }}
          >
            Faça seu Login
          </Text>
          <Input label="E-mail" id="email" width="100%" />
          <Input
            label="Senha"
            id="senha"
            secureTextEntry={true}
            width="100%"
            right={<TextInput.Icon icon="eye" color="#000" />}
          />
          <Button
            mode="contained"
            buttonColor="#66B4B0"
            textColor="#fff"
            style={{
              width: 340,
              borderRadius: 4,
              elevation: 4,
              padding: 5,
            }}
            loading={isLoading}
            onPress={methods.handleSubmit(submit)}
            labelStyle={{ fontFamily: "GilroyBold" }}
          >
            Continuar
          </Button>
          <Button
            textColor="#E8E1C5"
            onPress={() => router.push("/cadastrar-usuario")}
          >
            Não possui cadastro? Criar cadastro {">>"}
          </Button>
        </View>
      </View>
    </FormProvider>
  );
}
