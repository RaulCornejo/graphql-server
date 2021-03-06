import "reflect-metadata";
import { Field, Int, ObjectType } from "type-graphql";

@ObjectType()
export default class Merchant {
    @Field(type => Int)
    merchantid: number;

    @Field()
    name: string;

    @Field()
    url: string;

    @Field()
    imageurl300: string;
}
