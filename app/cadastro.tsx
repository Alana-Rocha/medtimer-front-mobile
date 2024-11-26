import DataSelect from "@/components/form/DataSelect";
import { Input } from "@/components/form/Input";
import { CadastroForm, cadastroSchema } from "@/constants/schemas/schemas";
import { useMutationCadastraUsuario } from "@/hooks/mutations/useMutationCadastraUsuario";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "expo-router";
import React from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { Image, Text, View } from "react-native";
import { Button } from "react-native-paper";

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

    console.log(methods.formState.errors)

  const submit: SubmitHandler<CadastroForm> = async (data) => {
    await cadastraUsuario({
      email: data.email,
      nome: data.nome,
      senha: data.senha,
      dataNascimento: data.nascimento,
    });
    // Toast.show({
    //   type: "success",
    //   text1: "Sucesso",
    //   text2: "Cadastro realizado!",
    //   visibilityTime: 4000,
    //   autoHide: true,
    //   topOffset: 30,
    //   bottomOffset: 40,
    // });
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
        }}
      >
        <View style={{ gap: 10, alignItems: "center" }}>
          <Image
            source={require("../assets/images/logo.png")}
            style={{ width: 230, height: 180 }}
          />

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

          <View style={{ gap: 5 }}>
            <Input label="Nome" id="nome" />
            <DataSelect />
            <Input label="E-mail" id="email" />
            <Input label="Senha" id="senha" secureTextEntry={true} />
          </View>
          <Button
            mode="contained"
            buttonColor="#66B4B0"
            textColor="#fff"
            style={{
              width: 300,
              borderRadius: 4,
              elevation: 4,
              padding: 5,
            }}
            loading={isLoading}
            disabled={isLoading}
            onPress={methods.handleSubmit(submit)}
            labelStyle={{ fontFamily: "GilroyBold" }}
          >
            Continuar
          </Button>
        </View>
      </View>
    </FormProvider>
  );
};

export default Cadastro;
