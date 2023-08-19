import { BadgeDemo } from "./sale"
import { ButtonDemo } from "./butten"
const hero = () => {
  return (
    <><section>
          <div className="grid justify-center gap-y-5 mt-20 pt-20">
              <h1 className="font-bold text-4xl mx-20 px-10 text-center"> Welcome to a World of Shopping Delights! Discover, Shop, and Elevate your Lifestyle with Us.</h1>
              <p className="font-medium text-xl text-center mt-10 text-slate-800">Discover Unbeatable Deals and Best Offers Await, Shop Now and Save Big!</p>
              <p className="text-center mt-10"><BadgeDemo /></p>
          </div>
      </section>
      <section className="flex justify-center mt-20 pt-20">
      <div className="text-4xl font-bold flex-1 my-auto leading-relaxed ml-5 text-left">
    Our Store Is Known For Selling Best Quality and Authorised Beauty and Personalcare Products.<br/> 
        <span><ButtonDemo/></span>
    </div>
          <div>
          <img className="flex-1" src="heroimg.png" alt="jacket" height={500} width={500} />
          </div>
          </section></>
    
  )
}

export default hero
