import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { StackRoutes } from "./stack.routes";
import { AuthRoutes } from "./auth.routes";
import { AuthProvider, useAuth } from "../hooks/auth";
import { BottomRoutes } from "./bottom.routes";

export function Routes() {
    const { user } = useAuth();
    console.log(user)
    return(
        <NavigationContainer >
            {user !== undefined ? <BottomRoutes/> : <AuthRoutes/> }
        </NavigationContainer>
    );
}