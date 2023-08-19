
const about = () => {
  return (
    <div className="mt-20">
      <h1 className="text-center text-5xl font-bold ">
        Why To Shop With Us?
      </h1>
      <p className="text-center text-lg font-semibold mt-10 text-slate-800">Our Company Provides Following Services Just For The Convenience Of The Customers.</p>
      <div className="grid justify-center mt-20">
        <span>
        <img className="mx-auto mt-10" src="delivery.png" alt="delivery icon" height={300} width={300}/>
        <h2 className="text-5xl mt-5 font-bold text-center">
           Fast Delivery
          </h2>
        </span>
        <span>
        <img className="mx-auto mt-10" src="return.png" alt="return icon" height={300} width={300}/>
        <h2 className="text-5xl mt-5 font-bold text-center">
           Easy Return Policy
          </h2>
        </span>
        <span>
        <img className="mx-auto mt-10" src="onlinepay.png" alt="online payment icon" height={300} width={300}/>
        <h2 className="text-5xl mt-5 font-bold text-center">
           Online Payment<br/>Avilable
          </h2>
        </span>
        <span>
        <img className="mx-auto mt-10" src="codicon.png" alt="Cash on delivery icon" height={300} width={300}/>
        <h2 className="text-5xl mt-5 font-bold text-center">
           Cash On Delivery<br/>Avilable
          </h2>
        </span>
      </div>
    </div>
  )
}

export default about
