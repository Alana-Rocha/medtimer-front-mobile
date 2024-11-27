import { ConsultaMedicamentoResponse } from "@/hooks/querys/useQueryConsultaMedicamentos";
import { horariosMedicamento } from "@/utils/horariosMedicamento";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import React, { forwardRef, useCallback, useImperativeHandle } from "react";
import { StyleSheet, View } from "react-native";
import { Portal, Text } from "react-native-paper";

export type SheetRef = {
  open: () => void;
  close: () => void;
};

type SheetProps = {
  medicamento: ConsultaMedicamentoResponse | null;
};

export const Sheet = forwardRef<SheetRef, SheetProps>(
  ({ medicamento }, ref) => {
    const bottomSheetRef = React.useRef<BottomSheet>(null);

    useImperativeHandle(ref, () => ({
      open: () => bottomSheetRef.current?.expand(),
      close: () => bottomSheetRef.current?.close(),
    }));

    if (!medicamento) {
      return null;
    }

    const handleSheetChanges = useCallback((index: number) => {
      console.log("handleSheetChanges", index);

      if (index === -1 || index === 0) {
        bottomSheetRef.current?.close();
      }
    }, []);

    return (
      <Portal>
        <BottomSheet
          ref={bottomSheetRef}
          snapPoints={["60%", "60%"]}
          onChange={handleSheetChanges}
          enablePanDownToClose={true}
          style={{
            borderWidth: 1.2,
            borderColor: "black",
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
          }}
        >
          <BottomSheetView style={styles.contentContainer}>
            <View style={{ gap: 10, width: "100%" }}>
              <View
                style={{
                  gap: 10,
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontFamily: "GilroyBold",
                    fontSize: 35,
                    color: "#EC8568",
                  }}
                >
                  {medicamento?.nome}
                </Text>
                <View>
                  {/* <Image
                    source={require("../assets/images/remedio.png")}
                    style={{ width: 25, height: 25 }}
                  /> */}
                </View>
              </View>

              <Text variant="displayMedium" style={styles.text}>
                {medicamento?.descricao}
              </Text>

              <View style={styles.box}>
                <Text variant="displayMedium" style={styles.text}>
                  Dosagem
                </Text>
                <Text
                  variant="displayMedium"
                  style={{ ...styles.text, fontFamily: "GilroyBold" }}
                >
                  {medicamento?.dosagem} comprimidos
                </Text>
              </View>

              <View style={styles.box}>
                <Text variant="displayMedium" style={styles.text}>
                  Duração:
                </Text>
                <Text
                  variant="displayMedium"
                  style={{ ...styles.text, fontFamily: "GilroyBold" }}
                >
                  {medicamento?.duracao} dias
                </Text>
              </View>

              <View style={styles.box}>
                <Text variant="displayMedium" style={styles.text}>
                  Frequência:
                </Text>
                <Text
                  variant="displayMedium"
                  style={{ ...styles.text, fontFamily: "GilroyBold" }}
                >
                  {medicamento?.frequencia}x ao dia
                </Text>
              </View>

              <View style={styles.box}>
                <Text variant="displayMedium" style={styles.text}>
                  Hora Inícial:
                </Text>
                <Text
                  variant="displayMedium"
                  style={{
                    ...styles.text,
                    color: "#66B4B0",
                    fontFamily: "GilroyBold",
                  }}
                >
                  {medicamento?.horario}
                </Text>
              </View>

              <View style={styles.box}>
                <Text variant="displayMedium" style={styles.text}>
                  Horários:
                </Text>
                <Text
                  variant="displayMedium"
                  style={{ ...styles.text, fontFamily: "GilroyBold" }}
                >
                  {horariosMedicamento(
                    medicamento?.horario,
                    medicamento.frequencia
                  )}
                </Text>
              </View>

              {/* 
            <Button
              mode="contained"
              buttonColor="#66B4B0"
              textColor="#fff"
              style={{
                width: "100%",
                borderRadius: 4,
                elevation: 4,
                padding: 5,
              }}
              onPress={() => router.push("/(tabs)/medicamentos")}
              labelStyle={{ fontFamily: "GilroyBold" }}
            >
              Fechar
            </Button> */}
            </View>
          </BottomSheetView>
        </BottomSheet>
      </Portal>
    );
  }
);

const styles = StyleSheet.create({
  text: {
    fontSize: 21,
  },
  container: {
    flex: 1,
    backgroundColor: "grey",
  },
  box: {
    backgroundColor: "#E9ECEF",
    padding: 10,
    borderRadius: 4,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  contentContainer: {
    flex: 1,
    padding: 36,
    alignItems: "center",
  },
});
