import { Button } from "@/components/ui/button"
const products = () => {
  return (
    <div className="mt-20">
      <span>
        <h1 className="text-center text-3xl font-bold">Our Products</h1>
      </span>
      <div className="flex justify-center mt-20 gap-x-5">
        <span className="border-2 p-5">
            <img src="product1.jpg" alt="Product 1" height={200} width={200}/>
            <h2 className="font-bold text-lg mt-10">CeraVe Moisturizing Cream | Body and Face Moisturizer for Dry Skin</h2>
            <p className="font-bold text-xl mt-3">$17.51</p>
            <p className="text-center"><Button className="bg-indigo-900 hover:bg-indigo-900 mt-10 text-white py-5 rounded-xl text-lg">Buy Now</Button></p>
        </span>
        <span className="border-2 p-5">
            <img src="product4.jpg" alt="Product 4" height={300} width={300} />
            <h2 className="font-bold text-lg mt-8">Durex Pleasure Pack Assorted Condoms, Natural Rubber Latex Condoms for Men</h2>
            <p className="font-bold text-xl mt-3">$13.41</p>
            <p className="text-center"><Button className="bg-indigo-900 hover:bg-indigo-900 mt-10 text-white py-5 rounded-xl text-lg">Buy Now</Button></p>
        </span>
        <span className="border-2 p-5">
            <img src="product3.jpg" alt="Product 3" height={160} width={160} />
            <h2 className="font-bold text-lg mt-5">Oral-B CrossAction Max Clean Manual Toothbrush, Soft, 4 Count</h2>
            <p className="font-bold text-xl mt-3">$12.98</p>
            <p className="text-center"><Button className="bg-indigo-900 hover:bg-indigo-900 mt-10 text-white py-5 rounded-xl text-lg">Buy Now</Button></p>
        </span>
      </div>
      <span>
      <p className="text-center mt-10"><Button className="bg-indigo-900 hover:bg-indigo-900 mt-10 text-white py-5 rounded-xl text-lg">See More Products</Button></p>
      </span>
    </div>
  )
}

export default products
