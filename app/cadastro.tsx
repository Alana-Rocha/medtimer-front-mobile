import Input from "@/components/form/Input";
import { useRouter } from "expo-router";
import { FormProvider, useForm } from "react-hook-form";
import { Image, Text, View } from "react-native";
import { Button } from "react-native-paper";

const Cadastro = () => {
  const router = useRouter();
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <View
        style={{
          backgroundColor: "#31658B",
          height: "100%",
          // padding: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={{ gap: 10, alignItems: "center" }}>
          <Image
            source={require("../assets/images/logo.png")}
            style={{ width: 200, height: 200 }}
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
            <Input label="Idade" id="idade" />
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
            }}
            onPress={() => router.push("/apresentacao")}
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
