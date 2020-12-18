import ProfilePicture from "../../components/ProfilePicture";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { UserType } from "types";

interface Props {
  user: UserType;
}

const LeftContainer = ({ user }: Props) => {
  return <ProfilePicture image={user.image} />;
};

export default LeftContainer;

const styles = StyleSheet.create({});
