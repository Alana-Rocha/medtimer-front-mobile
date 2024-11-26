import DataSelect from "@/components/form/DataSelect";
import { Input } from "@/components/form/Input";
import { CadastroForm, cadastroSchema } from "@/constants/schemas/schemas";
import { useMutationCadastraUsuario } from "@/hooks/mutations/useMutationCadastraUsuario";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "expo-router";
import React from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { Image, Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper";

const Cadastro = () => {
  const router = useRouter();
  const methods = useForm<CadastroForm>({
    resolver: zodResolver(cadastroSchema),
    defaultValues: {
      nome: "",
      nascimento: "",
      email: "",
      senha: "",
    },
  });
  const { mutateAsync: cadastraUsuario, isLoading } =
    useMutationCadastraUsuario();

  console.log(methods.formState.errors);

  const submit: SubmitHandler<CadastroForm> = async (data) => {
    await cadastraUsuario({
      email: data.email,
      nome: data.nome,
      senha: data.senha,
      dataNascimento: data.nascimento,
    });
    router.push("/apresentacao");
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
        <View style={{ alignItems: "center" }}>
          <Image
            source={require("../assets/images/logo.png")}
            style={{ width: 230, height: 180 }}
          />
        </View>

        <View>
          <Text
            style={{
              fontFamily: "GilroyBold",
              fontSize: 30,
              color: "#60FFCB",
            }}
          >
            Criar Cadastro
          </Text>
        </View>

        <View style={{ gap: 10 }}>
          <Input label="Nome" id="nome" />
          <DataSelect />
          <Input label="E-mail" id="email" />
          <Input
            label="Senha"
            id="senha"
            secureTextEntry={true}
            right={<TextInput.Icon icon="eye" />}
          />

          <Button
            mode="contained"
            buttonColor="#EC8568"
            textColor="#fff"
            style={{
              borderRadius: 4,
              elevation: 4,
              padding: 5,
            }}
            loading={isLoading}
            disabled={isLoading}
            onPress={methods.handleSubmit(submit)}
            labelStyle={{ fontFamily: "GilroyBold" }}
          >
            Cadastrar
          </Button>
          <Button
            mode="contained"
            buttonColor="#66B4B0"
            textColor="#fff"
            style={{
              borderRadius: 4,
              elevation: 4,
              padding: 5,
            }}
            loading={isLoading}
            disabled={isLoading}
            onPress={() => router.push("/")}
            labelStyle={{ fontFamily: "GilroyBold" }}
          >
            Voltar
          </Button>
        </View>
      </View>
    </FormProvider>
  );
};

export default Cadastro;
