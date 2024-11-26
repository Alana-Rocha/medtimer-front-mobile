import React from "react";
import { View } from "react-native";
import { DatePickerInput } from "react-native-paper-dates";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useFormContext } from "react-hook-form";

export default function DataSelect() {
  const { setValue, register } = useFormContext();
  const [inputDate, setInputDate] = React.useState<Date | undefined>(undefined);

  React.useEffect(() => {
    register("nascimento");
  }, [register]);

  const handleDateChange = (date: Date | undefined) => {
    setInputDate(date);
    if (date) {
      const formattedDate = date.toISOString().split("T")[0];
      setValue("nascimento", formattedDate);
    } else {
      setValue("nascimento", "");
    }
  };

  return (
    <SafeAreaProvider>
      <View style={{ justifyContent: "center", flex: 1, alignItems: "center" }}>
        <DatePickerInput
          id="nascimento"
          locale="pt"
          withModal={false}
          label="Data de Nascimento"
          value={inputDate}
          style={{backgroundColor: "#E8E1C5"}}
          onChange={handleDateChange}
          inputMode="start"
        />
      </View>
    </SafeAreaProvider>
  );
}
