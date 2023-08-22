import Image from "next/image";
import React from "react";
import imageUrlBuilder from '@sanity/image-url'
import client from "@/lib/sanityclient";
import Link from "next/link";

const builder = imageUrlBuilder(client)


export function urlFor(source:string) {
    return builder.image(source)
  }

const ProductCard: React.FC<{title:string,subCat:string,price:number,imgSrc:string,imgAlt:string,slug:string}> = ({title,subCat,price,imgSrc,imgAlt,slug}) => {
  return  <Link href={`/products/${slug}`}>
    <div className="flex flex-col gap-y-4 items-center">
    <Image src={urlFor(imgSrc).width(500).height(500).url()} alt={imgAlt} width={500} height={500} className="w-full h-fit max-h-[500px] max-w-[500px]" />
    <h5 className="text-lg font-semibold">{title}</h5>
    <h6 className="font-bold  tracking-wider text-gray-400">{subCat}</h6>
    <p className="text-xl font-bold text-pri_black">${price}</p>
     </div>
     </Link>;
};

export default ProductCard;
