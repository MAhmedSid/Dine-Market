import { Image } from 'sanity'

export interface ISanityProduct {
  productPrice: number
  mainImg: Image
  productSubCategory: string
  _id: string
  slug: { current: string }
  _rev: string
  productDetails: string[]
  productName: string
  productCare: string[]
  productCategory: { _ref: string }
  productImages: Array<Image>
}

export interface IProduct {
  _id: string
  name: string
  price: number
  image: Image
  subcat: string
  quantity: number
  totalPrice: number
}

export interface IDbRow {
  user_id: string
  product_qty: string
  product_id: string
}
