import { INestApplication } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { ExpressAdapter } from "@nestjs/platform-express";
import express from "express";
import { graphqlHTTP } from "express-graphql";
import * as http from "http";
import { NextApiHandler } from "next";
import "reflect-metadata";
import { buildSchemaSync } from "type-graphql";
import { AppModule } from "./app.module";
import { AppResolver } from "./app.resolver";
import * as path from "path";
export module Backend {
  let app: INestApplication;
  const expressApp = express();

  export async function getApp() {
    const schema = buildSchemaSync({
      resolvers: [AppResolver],
      emitSchemaFile: true,
      validate: false,
    });
    expressApp.use(
      "/api/graphql",
      graphqlHTTP({
        schema,
        graphiql: true,
      })
    );
    if (!app) {
      app = await NestFactory.create(
        AppModule,
        new ExpressAdapter(expressApp),
        { bodyParser: false }
      );
      app.setGlobalPrefix("api");

      await app.init();
    }
    return app;
  }

  export async function getListener() {
    const app = await getApp();
    const server: http.Server = app.getHttpServer();
    const [listener] = server.listeners("request") as NextApiHandler[];
    return { listener };
  }
}
