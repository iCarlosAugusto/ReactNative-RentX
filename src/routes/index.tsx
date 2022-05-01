import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { StackRoutes } from "./app.stack.routes";
import { AuthRoutes } from "./auth.routes";
import { AuthProvider, useAuth } from "../hooks/auth";
import { BottomRoutes } from "./app.bottom.routes";

export function Routes() {
    const { user } = useAuth();
    console.log("user vindo de routes:", user);
    return(
        <NavigationContainer >
            {user ? <BottomRoutes/> : <AuthRoutes/> }
        </NavigationContainer>
    );
}