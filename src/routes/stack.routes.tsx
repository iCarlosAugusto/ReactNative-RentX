import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationProp } from "@react-navigation/native";
import { CarDetails } from "../screens/CarDetails";
import { Confirmation } from "../screens/Confirmation";
import { Home } from "../screens/Home";
import { Scheduling } from "../screens/Scheduling";
import { SchedulingDetails } from "../screens/SchedulingDetails";
import { MyCars } from "../screens/MyCars";
import { Splash } from "../screens/Splash";
import { SignIn } from "../screens/SignIn";
import { SignUpFirstStep } from "../screens/SignUpFirstStep";
import { SignUpSecondStep } from "../screens/SingUpSecondStep";

const { Navigator, Screen } = createNativeStackNavigator();

export type StackRoutesParams = {
  "SignIn";
  "SignUpFirstStep";
  "SignUpSecondStep";
  "Home";
  "CarDetails";
  "Confirmation";
  "Scheduling";
  "SchedulingDetails";
  "MyCars";
};

export function StackRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
       <Screen name="Home" component={Home} />
      <Screen name="SignIn" component={SignIn} />
      <Screen name="SignUpFirstStep" component={SignUpFirstStep} />
      <Screen name="SignUpSecondStep" component={SignUpSecondStep} />
      <Screen name="CarDetails" component={CarDetails} />
      <Screen name="Confirmation" component={Confirmation} />
      <Screen name="Scheduling" component={Scheduling} />
      <Screen name="SchedulingDetails" component={SchedulingDetails} />
      <Screen name="MyCars" component={MyCars} />
    </Navigator>
  );
}
