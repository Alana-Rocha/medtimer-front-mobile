import { Text } from "react-native-paper";
import { Controller, useFormContext } from "react-hook-form";
import { View } from "react-native";
import SelectDropdown from "react-native-select-dropdown";

export type Item = { value: string; label: string } | string;

type SelectProps = {
  id: string;
  options: Item[];
};

export const Select = ({ id, options }: SelectProps) => {
  const { control } = useFormContext();

  const renderButton = (selectedItem: Item | undefined) => {
    const label =
      typeof selectedItem === "string" ? selectedItem : selectedItem?.label;

    return (
      <View
        style={{
          paddingVertical: 10,
          paddingHorizontal: 15,
          backgroundColor: "#E8E1C5",
          borderRadius: 5,
          justifyContent: "center",
          width: 220,
        }}
      >
        <Text style={{ fontFamily: "GilroyRegular", fontSize: 16 }}>
          {label || "Frequência"}
        </Text>
      </View>
    );
  };

  const renderItem = (selectedItem: Item | undefined, idx: number) => {
    const label =
      typeof selectedItem === "string" ? selectedItem : selectedItem?.label;

    return (
      <View
        style={{
          paddingVertical: 5,
          alignItems: "center",
          flexDirection: "row",
          gap: 5,
          opacity: 1,
        }}
      >
        <Text style={{ color: "#151E26" }}>{label}</Text>
      </View>
    );
  };

  return (
    <Controller
      control={control}
      name={id}
      render={({ field }) => (
        <SelectDropdown
          data={options}
          onSelect={(selectedItem: Item | undefined) =>
            field.onChange(
              typeof selectedItem === "string"
                ? selectedItem
                : selectedItem?.value
            )
          }
          renderButton={renderButton}
          renderItem={renderItem}
          dropdownStyle={{
            padding: 2,
            backgroundColor: "#E9ECEF",
            borderRadius: 8,
          }}
        />
      )}
    />
  );
  
};
