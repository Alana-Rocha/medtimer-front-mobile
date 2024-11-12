import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PerfilPage from "../perfil";
const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator>
      {/* <Tab.Screen name="Medicamentos" component={MedicamentosPage} /> */}
      <Tab.Screen name="Perfil" component={PerfilPage} />
    </Tab.Navigator>
  );
}
