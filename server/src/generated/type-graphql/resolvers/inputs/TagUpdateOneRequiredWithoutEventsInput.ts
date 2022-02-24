import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagCreateOrConnectWithoutEventsInput } from "../inputs/TagCreateOrConnectWithoutEventsInput";
import { TagCreateWithoutEventsInput } from "../inputs/TagCreateWithoutEventsInput";
import { TagUpdateWithoutEventsInput } from "../inputs/TagUpdateWithoutEventsInput";
import { TagUpsertWithoutEventsInput } from "../inputs/TagUpsertWithoutEventsInput";
import { TagWhereUniqueInput } from "../inputs/TagWhereUniqueInput";

@TypeGraphQL.InputType("TagUpdateOneRequiredWithoutEventsInput", {
  isAbstract: true
})
export class TagUpdateOneRequiredWithoutEventsInput {
  @TypeGraphQL.Field(_type => TagCreateWithoutEventsInput, {
    nullable: true
  })
  create?: TagCreateWithoutEventsInput | undefined;

  @TypeGraphQL.Field(_type => TagCreateOrConnectWithoutEventsInput, {
    nullable: true
  })
  connectOrCreate?: TagCreateOrConnectWithoutEventsInput | undefined;

  @TypeGraphQL.Field(_type => TagUpsertWithoutEventsInput, {
    nullable: true
  })
  upsert?: TagUpsertWithoutEventsInput | undefined;

  @TypeGraphQL.Field(_type => TagWhereUniqueInput, {
    nullable: true
  })
  connect?: TagWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TagUpdateWithoutEventsInput, {
    nullable: true
  })
  update?: TagUpdateWithoutEventsInput | undefined;
}
