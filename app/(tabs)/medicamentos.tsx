import React from "react";
import { useRouter } from "expo-router";
import { FormProvider, useForm } from "react-hook-form";
import { FAB, Text } from "react-native-paper";
import { Image, StyleSheet, View } from "react-native";
import { LoginForm, loginSchema } from "@/constants/schemas/schemas";
import { zodResolver } from "@hookform/resolvers/zod";

export default function Medicamentos() {
  const router = useRouter();
  const methods = useForm<LoginForm>({ resolver: zodResolver(loginSchema) });

  return (
    <FormProvider {...methods}>
      <View style={styles.container}>
        <View style={styles.messageContainer}>
          <Text style={styles.text}>
            Parece que você não possui nenhum {"\n"} medicamento cadastrado...
          </Text>
          <Text style={styles.text}>
            Clique no botão{" "}
            <Image
              source={require("../../assets/images/plus.png")}
              style={styles.image}
            />{" "}
            para começar!
          </Text>
        </View>
        {/* <FAB
          label="Adicionar Medicamento"
          icon="plus"
          color="#FFF"
          size="small"
          style={styles.fab}
          accessibilityLabel="Botão para adicionar um novo medicamento"
          onPress={() => router.push("/cadastro-medicamento")}
        /> */}
      </View>
    </FormProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  messageContainer: {
    gap: 15,
  },
  text: {
    fontFamily: "GilroyRegular",
    textAlign: "center",
    color: "#31658B",
    fontSize: 21,
  },
  image: {
    width: 23,
    height: 22,
  },
  fab: {
    position: "absolute",
    right: 40,
    bottom: 20,
    backgroundColor: "#66B4B0",
    borderRadius: 50,
    elevation: 4,
  },
});
