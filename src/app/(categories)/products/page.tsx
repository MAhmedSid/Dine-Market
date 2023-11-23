import Wrapper from "@/components/Wrapper";
import React from "react";
import { groq } from 'next-sanity'
import client from "@/lib/sanityclient";
import ProductCard from "@/components/ProductCard";
const page = async () => {

    const data = await client.fetch(groq`*[_type == "product"]`);

  return <main className="h-full w-full flex justify-center pt-20" >
    <Wrapper>
        <div className="w-full h-full grid grid-cols-1 lp:grid-cols-4 gap-x-10 gap-y-20 items-center">
            {data.map((item:any)=>{
                return(
                    <ProductCard key={item.productName} title={item.productName} price={item.productPrice} subCat={item.productSubCategory} imgAlt="ssh" imgSrc={item.mainImg.asset._ref} slug={item.slug.current} />
                )
            })}
        </div>
    </Wrapper>
  </main>;
};

export default page;
