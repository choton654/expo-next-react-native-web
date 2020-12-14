import { CommonActions } from "@react-navigation/native";
import { useRouting } from "expo-next-react-navigation";
import React from "react";
import { StyleSheet, Text, View, Platform } from "react-native";

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

function Profile({ navigation }) {
  const { goBack, getParam, navigate } = useRouting();

  // const id = getParam("id");
  // console.log(id);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profile! 🏋️‍♀️</Text>
      <Button
        text="👈 Go back"
        onPress={() => {
          // navigation.dispatch(CommonActions.goBack());
          navigation.navigate("Home");
          // goBack();
        }}
      />
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
