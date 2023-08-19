import { Button } from "@/components/ui/button"
const newsletter = () => {
  return (
    <div className="grid justify-center mt-20">
      <h1 className="font-bold text-4xl">
        Subscribe To Our Newsletter
      </h1>
      <span className="mt-20 text-center">
        <input className="py-3 px-12 outline text-lg" type="text" placeholder="Enter Your Email"/><br/>
        <p className="text-center mt-10"><Button className="bg-black hover:bg-black mt-2 text-white py-5 rounded-xl text-lg">Subscribe</Button></p>
      </span>
    </div>
  )
}

export default newsletter
