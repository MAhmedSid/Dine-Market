import { type SchemaTypeDefinition } from 'sanity'
import {product} from "./Schemas/product"
import {category} from "./Schemas/category"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product,category],
}
