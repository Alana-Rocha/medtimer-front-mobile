import * as React from "react";
import { TextInput } from "react-native-paper";

type InputProps = {
  label: string;
  secureTextEntry?: boolean;
};

const Input = ({ label, secureTextEntry }: InputProps) => {
  const [text, setText] = React.useState("");

  return (
    <TextInput
      mode="outlined"
      label={label}
      value={text}
      secureTextEntry={secureTextEntry}
      outlineColor="#31658B"
      style={{ width: 300, backgroundColor: "#E8E1C5" }}
      activeOutlineColor="#000"
      onChangeText={(text) => setText(text)}
    />
  );
};

export default Input;
