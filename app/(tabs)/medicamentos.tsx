import { Sheet, SheetRef } from "@/components/BottomSheet";
import {
  ConsultaMedicamentoResponse,
  useQueryConsultaMedicamento,
} from "@/hooks/querys/useQueryConsultaMedicamentos";
import { useEditarMedicamentoStore } from "@/hooks/stores/EditarMedicamento";
import { useRouter } from "expo-router";
import React, { useRef, useState } from "react";
import { Image, ScrollView, StyleSheet, View } from "react-native";
import { FAB, IconButton, Text } from "react-native-paper";

export default function Medicamentos() {
  const [selectedMedicamento, setSelectedMedicamento] =
    useState<ConsultaMedicamentoResponse | null>(null);
  const setMedicamento = useEditarMedicamentoStore((s) => s.setMedicamento);
  const router = useRouter();
  const { data: medicamentos, isLoading } = useQueryConsultaMedicamento();
  const bottomSheetRef = useRef<SheetRef>(null);
  console.log(medicamentos);

  const handleOpenSheet = (medicamento: ConsultaMedicamentoResponse) => {
    setSelectedMedicamento(medicamento);
    bottomSheetRef.current?.open();
  };

  return (
    <View style={styles.container}>
      {medicamentos?.length == 0 ? (
        <View style={styles.messageContainer}>
          <Text style={styles.text}>
            Parece que você não possui nenhum {"\n"} medicamento cadastrado...
          </Text>
          <View style={{ flexDirection: "row", gap: 3 }}>
            <Text style={styles.text}>Clique no botão</Text>
            <Image
              source={require("../../assets/images/plus.png")}
              style={styles.image}
            />
            <Text style={styles.text}>para começar!</Text>
          </View>
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
            <Text
              style={{
                fontFamily: "GilroyBold",
                fontSize: 25,
                color: "#EC8568",
              }}
            >
              Meus Medicamentos...
            </Text>
            {medicamentos?.map((medicamento) => (
              <View
                style={{
                  backgroundColor: "#fff",
                  borderWidth: 1,
                  borderColor: "black",
                  padding: 7,
                  borderRadius: 5,
                }}
                key={medicamento.id}
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
                      style={{ fontSize: 25, color: "#000" }}
                    >
                      {medicamento.nome}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      gap: 5,
                      alignItems: "center",
                    }}
                  >
                    <IconButton
                      icon={() => (
                        <Image
                          source={require("../../assets/images/edit.png")}
                          style={{ width: 29, height: 30 }}
                        />
                      )}
                      size={20}
                      onPress={() => {
                        setMedicamento(medicamento);
                        router.push("/editar-medicamento");
                      }}
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
                      onPress={() => handleOpenSheet(medicamento)}
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
      {selectedMedicamento && (
        <Sheet ref={bottomSheetRef} medicamento={selectedMedicamento} />
      )}
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
    right: 35,
    bottom: 100,
    backgroundColor: "#66B4B0",
    borderRadius: 50,
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
    fontSize: 18,
  },
  image: {
    marginTop: 4,
    width: 23,
    height: 22,
  },
});
