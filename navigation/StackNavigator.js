import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigation from "./TabNavigation";
import PostScreen from "../screens/PostScreen";

const Stack = createStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name='tela Inicial' component={TabNavigation} />
            <Stack.Screen  name='Tela de Posts' component={PostScreen}/>
        </Stack.Navigator>
    )
}

export default StackNavigator;