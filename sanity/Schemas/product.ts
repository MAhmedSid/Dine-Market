import {
  defineField,
  defineType,
} from "sanity";

export const product = defineType({
    name: "product",
    type: "document",
    title: "Product",
    fields: [
      defineField({
        name: "productName",
        type: "string",
        title: "Product Name",
      }),
      defineField({
        title: 'Slug',
        name: 'slug',
        type: 'slug',
        options: {
          source: 'productName',
          maxLength: 200, // will be ignored if slugify is set
          slugify: input => input
                               .toLowerCase()
                               .replace(/\s+/g, '-')
                               .slice(0, 200)
        }
      }),
      defineField({
        name: "productPrice",
        type: "number",
        title: "Product Price",
      }),
      defineField({
        name: 'productCategory',
        type: 'reference',
        title: 'Product Category',
        to: [{ type: 'category' as const }],
      }),
      defineField({
        name: "productSubCategory",
        type: "string",
        title: "Product Sub Category",
         initialValue: 'Dress',
      options: {
        list: [
          "Dress",
          "Sweater",
          "Pants",
          "T-Shirt",
          "Jackets"
        ],}
      }),
        defineField({
        name: "mainImg",
        type: "image",
        title: "Main Image",
      }),
        defineField({
      name: 'productImages',
      type: 'array',
      title: 'Product Images',
      of: [
        {
          name: 'image',
          type: 'image',
          title: 'Image',
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
            },
          ],
        },
      ],
      options: {
        layout: 'grid',
      },
      }),
      defineField( {
      name: 'productCare',
      type: 'array',
      title: 'Product Care',
      of: [
       {
          type: 'string',
        }
      ],
    }),
      defineField( {
      name: 'productDetails',
      type: 'array',
      title: 'Product Details',
      of: [
        {
          type: 'string',
        }
        
      ],
    }),
    ],
  })


