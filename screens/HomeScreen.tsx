import Tweet from "../components/tweet/Tweet";
import tweets from "../data/tweets";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Feed from "../components/Feed";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.contsiner}>
      <Feed />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  contsiner: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
