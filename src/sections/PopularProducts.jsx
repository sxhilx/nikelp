import PopularProductCard from "../components/PopularProductCard"
import { products } from "../constants"

const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt12">
      <div className="flex flex-col justify-start">
        <h2 className="text-4xl font-bold font-palanquin">Our <span className="text-coral-red">Popular</span> Products</h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">Experience top-notch qulity and style with our sought after selection. Discover a world of comfort, desing, and value.</p>
      </div>
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14">
      {products.map((product) => (
        <PopularProductCard key={product.name} {...product}/>
      ))}
      </div>
    </section>
  )
}

export default PopularProducts