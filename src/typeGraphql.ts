import { Injectable } from "@nestjs/common";
import { GqlOptionsFactory, GqlModuleOptions } from "@nestjs/graphql";
import { buildSchema } from "type-graphql";
import { AppResolver } from "./app.resolver";

@Injectable()
export class GraphqlConfigService implements GqlOptionsFactory {
  async createGqlOptions(): Promise<GqlModuleOptions> {
    const schema = await buildSchema({
      resolvers: [AppResolver],
    });

    return {
      path: "/api/graphql",
      debug: true,
      playground: true,
      schema,
      cors: {
        credentials: true,
        origin: "http://localhost:3000",
      },
    };
  }
}
