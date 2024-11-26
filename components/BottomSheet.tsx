import { useQueryConsultaMedicamento } from "@/hooks/querys/useQueryConsultaMedicamentos";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import React, { useCallback, useImperativeHandle, forwardRef } from "react";
import { StyleSheet, Text } from "react-native";

export type SheetRef = {
  open: () => void;
  close: () => void;
};

export const Sheet = forwardRef<SheetRef>((props, ref) => {
  const bottomSheetRef = React.useRef<BottomSheet>(null);
  const { data: medicamentos, isLoading } = useQueryConsultaMedicamento();

  useImperativeHandle(ref, () => ({
    open: () => bottomSheetRef.current?.expand(),
    close: () => bottomSheetRef.current?.close(),
  }));

  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  return (
    <BottomSheet
      ref={bottomSheetRef}
      snapPoints={["25%", "50%"]}
      onChange={handleSheetChanges}
    >
      <BottomSheetView style={styles.contentContainer}>
        <Text>Detalhes do Medicamento 🎉</Text>
      </BottomSheetView>
    </BottomSheet>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey",
  },
  contentContainer: {
    flex: 1,
    padding: 36,
    alignItems: "center",
  },
});
