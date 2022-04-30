import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../screens/Home";
import { MyCars } from "../screens/MyCars";

const { Navigator, Screen } = createBottomTabNavigator();

export function BottomRoutes() {
  return (
    <Navigator initialRouteName="Home">
      <Screen name="Home" component={Home} />
      <Screen name="MyCars" component={MyCars} />
    </Navigator>
  );
}
