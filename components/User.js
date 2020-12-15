import { useRouting } from "expo-next-react-navigation";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const User = ({ navigation }) => {
  const { goBack, navigate } = useRouting();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>User</Text>
      <Button
        title="post"
        onPress={() => {
          navigation.navigate("Post");

          // navigate({
          //   routeName: "post",
          // });
        }}
      />
    </View>
  );
};

export default User;

const styles = StyleSheet.create({});
