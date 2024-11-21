import React, { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { View, StyleSheet, TouchableOpacity, Text, Pressable } from "react-native";
import { TimePickerModal } from "react-native-paper-dates";

type TimeSelectProps = {
  id: string;
};

export const TimeSelect = ({ id }: TimeSelectProps) => {
  const [visible, setVisible] = useState(false);
  const [time, setTime] = useState<string | null>("Selecione um horário");
  const { control } = useFormContext();
  const onDismiss = () => {
    setVisible(false);
  };

  const onConfirm = ({
    hours,
    minutes,
  }: {
    hours: number;
    minutes: number;
  }) => {
    setVisible(false);
    const formattedTime = `${hours}:${minutes < 10 ? `0${minutes}` : minutes}`;
    setTime(formattedTime);
  };

  return (
    <Controller
      control={control}
      name={id}
      render={({ field }) => (
        <View>
          <Pressable style={styles.timePicker} onPress={() => setVisible(true)}>
            <Text style={styles.timeText}>{time}</Text>
          </Pressable>
          <TimePickerModal
            visible={visible}
            onDismiss={onDismiss}
            onConfirm={(params) => {
              onConfirm(params);
              field.onChange(params);
            }}
            hours={12}
            minutes={0}
            label="Selecione um horário"
          />
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  timePicker: {
    width: 220,
    padding: 18.9,
    // height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E8E1C5",
    borderRadius: 2,
  },
  timeText: {
    fontFamily: "GilroyRegular",
    color: "#000",
    fontSize: 16,
    fontWeight: "500",
  },
});
