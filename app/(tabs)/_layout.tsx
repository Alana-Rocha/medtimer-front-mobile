import TabBar from "@/components/tabs/TabBar";
import { Tabs } from "expo-router";

export default function TabRoutes() {
  return (
    <Tabs
      tabBar={(props) => <TabBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tabs.Screen
        name="medicamentos"
        options={{
          title: "Medicamentos",
          // tabBarIcon: () => (
          //   <Image
          //     source={require("../../assets/images/cartela.png")}
          //     style={{ width: 35, height: 35 }}
          //   />
          // ),
        }}
      />
      <Tabs.Screen
        name="perfil"
        options={{
          title: "Perfil",
          // tabBarIcon: () => (
          //   <Image
          //     source={require("../../assets/images/perfil.png")}
          //     style={{ width: 35, height: 35 }}
          //   />
          // ),
        }}
      />
    </Tabs>
  );
}
