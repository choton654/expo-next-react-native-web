import { useRouting } from "expo-next-react-navigation";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const user = () => {
  const { goBack, navigate } = useRouting();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>User</Text>
      <Button
        title="post"
        onPress={() => {
          navigate({
            routeName: "post",
          });
        }}
      />
    </View>
  );
};

export default user;

const styles = StyleSheet.create({});
