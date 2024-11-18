import { Image } from "react-native";
import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/build/FontAwesome";

export default function TabRoutes() {
  return (
    <Tabs>
      <Tabs.Screen
        name="medicamentos"
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="perfil"
        options={{
          title: "Perfil",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
