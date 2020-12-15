import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
const DrawerContent = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <DrawerItem
          label="Post"
          onPress={() => props.navigation.navigate("Home", { screen: "Post" })}
        />
        <DrawerItem
          label="User"
          onPress={() => props.navigation.navigate("Home", { screen: "User" })}
        />
      </DrawerContentScrollView>
    </View>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({});
