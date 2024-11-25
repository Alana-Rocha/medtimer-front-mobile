import { LoginForm, loginSchema } from "@/constants/schemas/schemas";
import { useQueryConsultaMedicamento } from "@/hooks/querys/useQueryConsultaMedicamentos";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "expo-router";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Image, StyleSheet, View } from "react-native";
import { FAB, IconButton, Text } from "react-native-paper";

export default function Medicamentos() {
  const router = useRouter();
  const methods = useForm<LoginForm>({ resolver: zodResolver(loginSchema) });
  const { data: medicamentos, isLoading } = useQueryConsultaMedicamento();
  console.log(medicamentos);

  if (isLoading) return <Text>Carregando medicamentos...</Text>;

  return (
    <FormProvider {...methods}>
      <View style={styles.container}>
        {!medicamentos && (
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
        )}

        <View style={{ width: "100%", gap: 20, paddingHorizontal: 15 }}>
          {medicamentos?.map((medicamento) => (
            <View
              key={medicamento.id}
              style={{
                backgroundColor: "#fff",
                borderWidth: 1,
                borderColor: "black",
                padding: 7,
                borderRadius: 5,
              }}
            >
              <View
                style={{
                  backgroundColor: "#E8E1C5",
                  borderWidth: 1,
                  borderColor: "black",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: 15,
                  borderRadius: 5,
                }}
              >
                <View>
                  <Text variant="displayMedium" style={{ fontSize: 25 }}>
                    {medicamento.nome}
                  </Text>
                </View>
                <View
                  style={{ flexDirection: "row", gap: 5, alignItems: "center" }}
                >
                  <IconButton
                    icon={() => (
                      <Image
                        source={require("../../assets/images/edit.png")}
                        style={{ width: 33, height: 33 }}
                      />
                    )}
                    size={20}
                    onPress={() => router.push("/editar-medicamento")}
                  />

                  <IconButton
                    icon={() => (
                      <Image
                        source={require("../../assets/images/detalhes.png")}
                        style={{ width: 33, height: 33 }}
                      />
                    )}
                    size={20}
                    onPress={() => console.log("Pressed")}
                  />
                </View>
              </View>
            </View>
          ))}
        </View>

        <FAB
          label="Adicionar Medicamento"
          icon="plus"
          color="#FFF"
          size="small"
          style={styles.fab}
          accessibilityLabel="Botão para adicionar um novo medicamento"
          onPress={() => router.push("/cadastrar-medicamento")}
        />
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
  card: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "black",
    padding: 16,
    borderRadius: 5,
    marginBottom: 8,
  },
  nomeMedicamento: {
    fontSize: 18,
    fontWeight: "bold",
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
  divider: {},
});
