// @generated: @expo/next-adapter@2.1.52

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerActions, NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Button } from "react-native";
import AuthScreen from "../components/Auth";
import HomeScreen from "../components/Home";
import Profile from "./Profile";
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer independent>
      <Drawer.Navigator>
        <Drawer.Screen
          name="Auth"
          component={() => (
            <Stack.Navigator>
              <Stack.Screen
                name="Auth"
                component={AuthScreen}
                options={({ navigation }) => ({
                  headerLeft: () => (
                    <Button
                      title="toggle"
                      onPress={() => {
                        navigation.dispatch(DrawerActions.toggleDrawer);
                      }}
                    />
                  ),
                })}
              />
            </Stack.Navigator>
          )}
        />
        <Drawer.Screen
          name="Home"
          component={() => (
            <Stack.Navigator>
              <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={({ navigation }) => ({
                  headerLeft: () => (
                    <Button
                      title="toggle"
                      onPress={() => {
                        navigation.dispatch(DrawerActions.toggleDrawer);
                      }}
                    />
                  ),
                })}
              />
              <Stack.Screen name="Profile" component={Profile} />
            </Stack.Navigator>
          )}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
