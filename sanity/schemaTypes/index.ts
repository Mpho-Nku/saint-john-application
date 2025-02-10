import { type SchemaTypeDefinition } from "sanity";

import { author } from "@/sanity/schemaTypes/author";
import { circuit } from "@/sanity/schemaTypes/circuit";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [author, circuit],
};