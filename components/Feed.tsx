import tweets from "../data/tweets";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Tweet from "./tweet/Tweet";

interface Props {}

const Feed = (props: Props) => {
  return (
    <FlatList
      data={tweets}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => <Tweet tweet={itemData.item} />}
    />
  );
};

export default Feed;

const styles = StyleSheet.create({});
