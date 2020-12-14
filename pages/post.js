import { useRouting } from "expo-next-react-navigation";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import router from "next/router";
const post = ({ navigation }) => {
  const { goBack, navigate, push } = useRouting();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Post</Text>
      <Button
        title="Auth"
        onPress={() => {
          // goBack();
          router.push("/");
        }}
      />
    </View>
  );
};

export default post;

const styles = StyleSheet.create({});
