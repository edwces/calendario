import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagCreateOrConnectWithoutEventsInput } from "../inputs/TagCreateOrConnectWithoutEventsInput";
import { TagCreateWithoutEventsInput } from "../inputs/TagCreateWithoutEventsInput";
import { TagWhereUniqueInput } from "../inputs/TagWhereUniqueInput";

@TypeGraphQL.InputType("TagCreateNestedOneWithoutEventsInput", {
  isAbstract: true
})
export class TagCreateNestedOneWithoutEventsInput {
  @TypeGraphQL.Field(_type => TagCreateWithoutEventsInput, {
    nullable: true
  })
  create?: TagCreateWithoutEventsInput | undefined;

  @TypeGraphQL.Field(_type => TagCreateOrConnectWithoutEventsInput, {
    nullable: true
  })
  connectOrCreate?: TagCreateOrConnectWithoutEventsInput | undefined;

  @TypeGraphQL.Field(_type => TagWhereUniqueInput, {
    nullable: true
  })
  connect?: TagWhereUniqueInput | undefined;
}
