import AboutProduct from '@/views/Home/AboutProduct'
import HeroComp from '@/views/Home/HeroComp'
import NewsLetterComp from '@/views/Home/NewsLetterComp'
import Products from '@/views/Home/Products'
import PromotionComp from '@/views/Home/PromotionComp'

export default function Home() {
  return (
    <main className="">
      <HeroComp/>
      <PromotionComp/>
      <Products/>
      <AboutProduct/>
      <NewsLetterComp/>
    </main>
  )
}
