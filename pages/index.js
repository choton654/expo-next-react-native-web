// @generated: @expo/next-adapter@2.1.52

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerActions, NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Button } from "react-native";
import AuthScreen from "../components/Auth";
import HomeScreen from "../components/Home";
import Profile from "../components/Profile";
import Main from "../components/Main";
import Post from "../components/Post";
import User from "../components/User";
import * as Linking from "expo-linking";
import DrawerContent from "../components/DrawerContent";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

// const prefix = Linking.makeUrl("/");
// const linking = {
//   prefixes: [prefix],
//   config: {
//     screens: {
//       Auth: "auth",
//       Profile: "profile",
//     },
//   },
// };

const AuthTab = () => {
  return (
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
  );
};

const HomeTab = () => {
  return (
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
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="User" component={User} />
      <Stack.Screen name="Post" component={Post} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

const HomeDrawer = () => {
  return (
    <Tab.Navigator lazy>
      <Tab.Screen name="Auth" component={AuthTab} />
      <Tab.Screen name="Home" component={HomeTab} />
    </Tab.Navigator>
  );
};

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        lazy
        drawerContent={(props) => <DrawerContent {...props} />}
      >
        <Drawer.Screen name="HomeDrawer" component={HomeDrawer} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
