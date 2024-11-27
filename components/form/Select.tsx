import { Controller, useFormContext } from "react-hook-form";
import { View } from "react-native";
import { Text } from "react-native-paper";
import SelectDropdown from "react-native-select-dropdown";

export type Item = { value: string | number; label: string };

type SelectProps = {
  id: string;
  options: Item[];
};

export const Select = ({ id, options }: SelectProps) => {
  const { control } = useFormContext();

  const renderButton = (selectedItem: Item | undefined) => {
    const label =
      typeof selectedItem === "object" ? selectedItem?.label : "Frequência";

    return (
      <View
        style={{
          // minWidth: 200,
          width: 182,
          height: 57,
          paddingVertical: 10,
          paddingHorizontal: 15,
          backgroundColor: "#fff",
          borderRadius: 2,
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            fontFamily: "GilroyRegular",
            fontSize: 16,
            color: "#58545A",
            marginLeft: 3,
          }}
        >
          {label || "Frequência"}
        </Text>
      </View>
    );
  };

  const renderItem = (selectedItem: Item | undefined) => {
    const label =
      typeof selectedItem === "object" ? selectedItem?.label : undefined;

    return (
      <View
        style={{
          paddingVertical: 5,
          alignItems: "center",
          flexDirection: "row",
          gap: 5,
          marginLeft: 6,
          opacity: 1,
        }}
      >
        <Text style={{ color: "#151E26", fontFamily: "GilroyRegular" }}>
          {label}
        </Text>
      </View>
    );
  };

  return (
    <Controller
      control={control}
      name={id}
      render={({ field, fieldState }) => (
        <View>
          <SelectDropdown
            data={options}
            onSelect={(selectedItem: Item | undefined) =>
              field.onChange(
                typeof selectedItem === "object" && selectedItem?.value
                  ? Number(selectedItem.value)
                  : 0
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

          {fieldState.error?.message && (
            <Text style={{ color: "red", fontSize: 12, marginTop: 4 }}>
              {fieldState.error?.message}
            </Text>
          )}
        </View>
      )}
    />
  );
};
