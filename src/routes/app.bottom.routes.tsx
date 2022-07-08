import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../screens/Home";
import { MyCars } from "../screens/MyCars";
import { StackRoutes } from "./app.stack.routes";

const { Navigator, Screen } = createBottomTabNavigator();

export function BottomRoutes() {
  return (
    <Navigator initialRouteName="Home" screenOptions={{ headerShown: false}}>
      <Screen name="Home" component={StackRoutes} />
      <Screen name="MyCars" component={MyCars} />
    </Navigator>
  );
}
