import { useRouting } from "expo-next-react-navigation";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import router from "next/router";
const Post = ({ navigation }) => {
  const { goBack, navigate, push } = useRouting();
  // console.log(data);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Post Screen</Text>
      <Button
        title="Auth"
        onPress={() => {
          // goBack();
          navigation.navigate("Auth");
        }}
      />
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({});

// export async function getServerSideProps(context) {
//   const res = await fetch("http://localhost:3000/api/hello");
//   const data = await res.json();
//   return {
//     props: { data },
//   };
// }
