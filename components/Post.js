import { useRouting } from "expo-next-react-navigation";
import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import router from "next/router";
const Post = ({ navigation }) => {
  const { goBack, navigate, push } = useRouting();
  const [data, setdata] = useState();
  useEffect(() => {
    fetch("http://localhost:3000/api/hello")
      .then((res) => res.json())
      .then((data) => setdata(data));
  }, []);
  // console.log(data);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Post {data?.name}</Text>
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
