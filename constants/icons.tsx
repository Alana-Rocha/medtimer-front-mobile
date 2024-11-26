import { Image } from "react-native";

export const icon = {
  medicamentos: ({ color, focused }: { color: string; focused: boolean }) => (
    <Image
      source={
        focused
          ? require("../assets/images/cartela.png") 
          : require("../assets/images/cartela.png") 
      }
      style={{
        width: 24,
        height: 24,
      }}
    />
  ),
  perfil: ({ color, focused }: { color: string; focused: boolean }) => (
    <Image
      source={
        focused
          ? require("../assets/images/perfil.png")
          : require("../assets/images/perfil.png")
      }
      style={{
        width: 24,
        height: 24,
      }}
    />
  ),
};
