import { Tabs } from "expo-router";
import { Image } from "react-native";

export default function TabRoutes() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="medicamentos"
        options={{
          title: "Medicamentos",
          tabBarIcon: () => (
            <Image
              source={require("../../assets/images/cartela.png")}
              style={{ width: 35, height: 35 }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="perfil"
        options={{
          title: "Perfil",
          tabBarIcon: () => (
            <Image
              source={require("../../assets/images/perfil.png")}
              style={{ width: 35, height: 35 }}
            />
          ),
        }}
      />
    </Tabs>
  );
}
