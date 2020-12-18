import { Query, Resolver } from "type-graphql";

@Resolver()
export class AppResolver {
  @Query(() => String)
  user() {
    return "hello from user";
  }
  @Query(() => String)
  post() {
    return "hello from post";
  }
  @Query(() => String)
  comments() {
    return "hello from comments";
  }
}
