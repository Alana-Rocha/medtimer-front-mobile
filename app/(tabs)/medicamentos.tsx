import { Sheet, SheetRef } from "@/components/BottomSheet";
import { useQueryConsultaMedicamento } from "@/hooks/querys/useQueryConsultaMedicamentos";
import { useRouter } from "expo-router";
import React, { useRef } from "react";
import { Image, ScrollView, StyleSheet, View } from "react-native";
import { FAB, IconButton, Text } from "react-native-paper";

export default function Medicamentos() {
  const router = useRouter();
  const { data: medicamentos, isLoading } = useQueryConsultaMedicamento();
  const bottomSheetRef = useRef<SheetRef>(null);

  return (
    <View style={styles.container}>
    {medicamentos?.length == 0 ? (
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
    ) : (
      <ScrollView
        style={{
          width: "100%",
          paddingHorizontal: 15,
          paddingVertical: 80,
          display: "flex",
        }}
      >
        <View style={{ gap: 20 }}>
          {medicamentos?.map((medicamento) => (
            <View
              style={{
                backgroundColor: "#fff",
                borderWidth: 1,
                borderColor: "black",
                padding: 7,
                borderRadius: 5,
              }}
              key={medicamento.nome}
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
                  <Text
                    variant="displayMedium"
                    style={{ fontSize: 25, color: "#645E5E" }}
                  >
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
                        style={{ width: 29, height: 30 }}
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
                    loading={isLoading}
                    disabled={isLoading}
                    size={20}
                    onPress={() => {
                      console.log("Abrindo BottomSheet...");
                      bottomSheetRef.current?.open();
                    }}
                  />
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    )}
  
    <FAB
      icon="plus"
      color="#FFF"
      size="medium"
      style={styles.fab}
      accessibilityLabel="Botão para adicionar um novo medicamento"
      onPress={() => router.push("/cadastrar-medicamento")}
    />
       {/* <Sheet ref={bottomSheetRef} /> */}
  </View>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center", 
  },
  fab: {
    position: "absolute",
    right: 40,
    bottom: 90,
    backgroundColor: "#66B4B0",
    borderRadius: 50,
    elevation: 4,
  },
  messageContainer: {
    alignItems: "center",
    justifyContent: "center",
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
});
