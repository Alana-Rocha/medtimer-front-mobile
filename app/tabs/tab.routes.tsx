import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";
import Medicamentos from "../medicamentos";
import Perfil from "../perfil";

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator >
      <Tab.Screen
        name="medicamentos"
        component={Medicamentos}
        options={{
          tabBarIcon: () => (
            <Image
              source={require("../../assets/images/cartela.png")}
              style={{ width: 30, height: 28 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="perfil"
        component={Perfil}
        options={{
          tabBarIcon: () => (
            <Image
              source={require("../../assets/images/perfil.png")}
              style={{ width: 35, height: 35 }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
