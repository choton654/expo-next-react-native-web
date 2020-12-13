// @generated: @expo/next-adapter@2.1.52
// import React from "react";
// import { StyleSheet, Text, View } from "react-native";

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Welcome to Expo + Next.js hello !!!</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   text: {
//     fontSize: 16,
//   },
// });

// In App.js in a new project

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Link } from "expo-next-react-navigation";
import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import Profile from "./Profile";

export function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen 🥳</Text>
      <Link style={{ color: "green", fontSize: 20 }} routeName="Profile">
        Click me to open profile :)
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    margin: 20,
  },
});

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
