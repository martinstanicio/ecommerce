import { Tag } from "@/payload-types";

export type SimplifiedTag = Pick<Tag, "id" | "slug" | "name">;
