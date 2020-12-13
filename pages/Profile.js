import { useRouting } from "expo-next-react-navigation";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

function Button({ text, onPress }) {
  return (
    <Text
      style={{
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: "black",
        color: "white",
        margin: 20,
      }}
      onPress={onPress}
    >
      {text}
    </Text>
  );
}

function Profile() {
  const { goBack } = useRouting();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profile! 🏋️‍♀️</Text>
      <Button text="👈 Go back" onPress={() => goBack()} />
    </View>
  );
}

export default Profile;

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
