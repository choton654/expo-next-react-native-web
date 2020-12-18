import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import color from "../constants/Color";
import React from "react";
import { StyleSheet, View } from "react-native";
import TabTwoScreen from "../screens/TabTwoScreen";
import {
  BottomTabParamList,
  HomeNavigatorParamList,
  TabTwoParamList,
} from "types";
import { createStackNavigator } from "@react-navigation/stack";
import HomeTabScreen from "screens/HomeScreen";
import HomeScreen from "../screens/HomeScreen";
import ProfilePicture from "../components/ProfilePicture";
const ButtomTab = createBottomTabNavigator<BottomTabParamList>();

const TabNavigator = () => {
  return (
    <ButtomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: color.light.tint,
        showLabel: false,
      }}
    >
      <ButtomTab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="md-home" size={30} color={color} />
          ),
        }}
      />
      <ButtomTab.Screen
        name="Search"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="md-search" size={30} color={color} />
          ),
        }}
      />
      <ButtomTab.Screen
        name="Notifications"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="md-notifications" size={30} color={color} />
          ),
        }}
      />
      <ButtomTab.Screen
        name="Messages"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="md-mail" size={30} color={color} />
          ),
        }}
      />
    </ButtomTab.Navigator>
  );
};

const TabOneStack = createStackNavigator<HomeNavigatorParamList>();

const HomeNavigator = () => {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerRightContainerStyle: { marginRight: 15 },
          headerLeftContainerStyle: { marginLeft: 15 },
          headerTitle: () => (
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Ionicons
                name="logo-twitter"
                size={30}
                color={color.light.tint}
              />
            </View>
          ),
          headerRight: () => (
            <MaterialCommunityIcons
              size={30}
              name="star-four-points-outline"
              color={color.light.tint}
            />
          ),
          headerLeft: () => (
            <ProfilePicture
              size={40}
              image="https://images.unsplash.com/photo-1517724100952-ac1dad0bf53d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
            />
          ),
        }}
      />
    </TabOneStack.Navigator>
  );
};

const TabTwoStack = createStackNavigator<TabTwoParamList>();

const TabTwoNavigator = () => {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen name="TabTwoScreen" component={TabTwoScreen} />
    </TabTwoStack.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({});
