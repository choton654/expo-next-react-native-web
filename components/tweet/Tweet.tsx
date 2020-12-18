import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TweetType } from "types";
import LeftContainer from "./LeftContainer";
import MainContainer from "./MainContainer";

interface Props {
  tweet: TweetType;
}

const Tweet = ({ tweet }: Props) => {
  return (
    <View style={styles.container}>
      <LeftContainer user={tweet.user} />
      <MainContainer tweet={tweet} />
    </View>
  );
};

export default Tweet;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    padding: 15,
    borderBottomWidth: 0.5,
    borderColor: "lightgrey",
  },
});
