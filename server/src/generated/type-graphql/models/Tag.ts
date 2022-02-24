import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Event } from "../models/Event";
import { TagCount } from "../resolvers/outputs/TagCount";

@TypeGraphQL.ObjectType("Tag", {
  isAbstract: true
})
export class Tag {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  events?: Event[];

  @TypeGraphQL.Field(_type => TagCount, {
    nullable: true
  })
  _count?: TagCount | null;
}
