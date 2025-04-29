import { Product, Tag } from "@/payload-types";

// This file contains simplified payload types, used
// to reduce the amount of data sent over the network

export type SimplifiedProduct = Pick<
  Product,
  "id" | "slug" | "name" | "description" | "tags" | "price" | "images"
>;

export type SimplifiedTag = Pick<Tag, "id" | "slug" | "name">;
