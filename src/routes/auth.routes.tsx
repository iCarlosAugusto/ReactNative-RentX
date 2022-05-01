import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SignIn } from "../screens/SignIn";
import { SignUpFirstStep } from "../screens/SignUpFirstStep";
import { SignUpSecondStep } from "../screens/SingUpSecondStep";
import { Confirmation } from "../screens/Confirmation";

const { Navigator, Screen } = createNativeStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator initialRouteName="SignIn" screenOptions={{headerShown: false}}>
      <Screen name="SignIn" component={SignIn} />
      <Screen name="SignUpFirstStep" component={SignUpFirstStep} />
      <Screen name="SignUpSecondStep" component={SignUpSecondStep} />
      <Screen name="Confirmation" component={Confirmation} />
    </Navigator>
  );
}
