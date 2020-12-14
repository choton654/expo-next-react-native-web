import { Link, useRouting } from "expo-next-react-navigation";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
const AuthScreen = ({ navigation }) => {
  const { navigate } = useRouting();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Auth Screen</Text>
      <Link style={{ color: "green", fontSize: 20 }} routeName="Main">
        Click me to open main :)
      </Link>
      <Button
        title="Profile"
        onPress={() => {
          // navigation.navigate("Profile");
          navigate({
            routeName: "Profile",
            params: { id: "chris" },
          });
        }}
      />
    </View>
  );
};

export default AuthScreen;

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
