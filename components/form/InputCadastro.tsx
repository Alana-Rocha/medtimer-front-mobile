import * as React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Text, View } from "react-native";
import { TextInput, TextInputProps } from "react-native-paper";

type InputProps = {
  id: string;
  label: string;
  secureTextEntry?: boolean;
};

export const InputCadastro = ({
  id,
  label,
  secureTextEntry,
}: InputProps & TextInputProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={id}
      render={({ field, fieldState: { error, invalid } }) => (
        <View style={{ position: "relative" }}>
          <TextInput
            error={invalid}
            onBlur={field.onBlur}
            label={label}
            value={field.value}
            secureTextEntry={secureTextEntry}
            outlineColor="#31658B"
            style={{ backgroundColor: "#E8E1C5" }}
            activeOutlineColor="#000"
            onChangeText={field.onChange}
          />
          {error && (
            <Text
              style={{
                color: "red",
                fontSize: 12,
                marginTop: 4,
                position: "absolute",
                bottom: -14
              }}
            >
              {error.message}
            </Text>
          )}
        </View>
      )}
    />
  );
};
