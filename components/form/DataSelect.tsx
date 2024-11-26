import React from "react";
import { useFormContext } from "react-hook-form";
import { View } from "react-native";
import { DatePickerInput } from "react-native-paper-dates";

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
    <View style={{ height: 50 }}>
      <DatePickerInput
        id="nascimento"
        locale="pt"
        withModal={false}
        label="Data de Nascimento"
        value={inputDate}
        style={{ width: "100%", backgroundColor: "#fff" }}
        onChange={handleDateChange}
        inputMode="start"
      />
    </View>
  );
}
