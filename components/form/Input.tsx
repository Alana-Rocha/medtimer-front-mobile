import * as React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { DimensionValue, Text, View } from "react-native";
import { TextInput, TextInputProps } from "react-native-paper";

type InputProps = {
  id: string;
  label: string;
  secureTextEntry?: boolean;
  width?: DimensionValue;
};

export const Input = ({
  id,
  label,
  secureTextEntry,
  width,
}: InputProps & TextInputProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={id}
      render={({ field, fieldState: { error, invalid } }) => (
        <View>
          <TextInput
            ref={field.ref}
            error={invalid}
            onBlur={field.onBlur}
            label={label}
            value={field.value}
            secureTextEntry={secureTextEntry}
            outlineColor="#31658B"
            style={{ width: width, backgroundColor: "#fff" }}
            activeOutlineColor="#000"
            onChangeText={field.onChange}
          />
          {error && (
            <Text style={{ color: "red", fontSize: 12, marginTop: 4 }}>
              {error.message}
            </Text>
          )}
        </View>
      )}
    />
  );
};
