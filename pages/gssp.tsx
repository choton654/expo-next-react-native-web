import axios from "axios";
import { InferGetServerSidePropsType } from "next";
import { AppController } from "../src/app.controller";
import { Backend } from "../src/main";

export async function getServerSideProps() {
  const app = await Backend.getApp();

  const controller = app.get(AppController);
  const { data } = await axios.get(
    "http://localhost:3000/api/randomNumber/post"
  );

  console.log(data);
  fetch("http://localhost:3000/api/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ query: "{ comments }" }),
  })
    .then((response) => response.json())
    .then((text) => console.log(text));

  return {
    props: {
      data,
      randomNumber: controller.randomNumber(),
    },
  };
}

export default function GsspExample(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  return (
    <p>
      Random Number: {props.randomNumber}, {props.data}
    </p>
  );
}
