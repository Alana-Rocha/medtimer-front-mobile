import Ionicons from "@expo/vector-icons/Ionicons";

export const icon = {
  medicamentos: ({ color, focused }: { color: string; focused: boolean }) =>
    focused ? (
      <Ionicons name="medkit" size={24} color={color} />
    ) : (
      <Ionicons name="medkit-outline" size={24} color={color} />
    ),
  perfil: ({ color, focused }: { color: string; focused: boolean }) =>
    focused ? (
      <Ionicons name="person-circle" size={24} color={color} />
    ) : (
      <Ionicons name="person-circle-outline" size={24} color={color} />
    ),
};
