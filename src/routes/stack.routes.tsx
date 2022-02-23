import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { CarDetails } from "../screens/CarDetails";
import { Confirmation } from "../screens/Confirmation";
import { Home } from '../screens/Home';
import { Scheduling } from "../screens/Scheduling";
import { SchedulingDetails } from "../screens/SchedulingDetails";

const { Navigator, Screen } = createNativeStackNavigator();

export function StackRoutes(){
    return(
        <Navigator screenOptions={{
            headerShown: false
        }}>
            <Screen name="Home" component={Home}/>
            <Screen name="CarDetails" component={CarDetails}/>
            <Screen name="Confirmation" component={Confirmation}/>
            <Screen name="Scheduling" component={Scheduling}/>
            <Screen name="SchedulingDetails" component={SchedulingDetails}/>
        </Navigator>
    );
}