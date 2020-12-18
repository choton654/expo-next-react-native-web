import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, StyleSheet, Text, View, Dimensions } from "react-native";
import { TweetType } from "types";
import Footer from "./Footer";
import moment from "moment";

interface Props {
  tweet: TweetType;
}

const MainContainer = ({ tweet }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.tweeterHeader}>
        <Text style={styles.name}>{tweet.user.name}</Text>
        <Text style={styles.username}>{tweet.user.username}</Text>
        <Text style={styles.createdAt}>
          {moment(tweet.createdAt).fromNow()}
        </Text>
        <Ionicons name="chevron-down" size={20} />
      </View>
      <View>
        <Text style={styles.content}>{tweet.content}</Text>
        {!!tweet.image && (
          <Image style={styles.image} source={{ uri: tweet.image }} />
        )}
      </View>
      <Footer tweet={tweet} />
    </View>
  );
};

export default MainContainer;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
    padding: 10,
  },
  tweeterHeader: {
    flexDirection: "row",
  },
  name: {
    fontWeight: "bold",
  },
  username: {
    marginHorizontal: 5,
    color: "grey",
  },
  createdAt: {
    marginHorizontal: 5,
  },
  content: {
    lineHeight: 18,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 15,
    marginVertical: 10,
    overflow: "hidden",
    resizeMode: "cover",
  },
});
