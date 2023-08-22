import { defineType, defineField } from "sanity";


export const category = defineType({
    name: "category",
    type: "document",
    title: "Category",
    fields: [
        defineField({
            name: "productSubCategory",
            type: "string",
            title: "Product Sub Category",
             initialValue: 'men',
          options: {
            list: [
              'men',
              'women',
              "kids"
            ],}
          })
    ],
})