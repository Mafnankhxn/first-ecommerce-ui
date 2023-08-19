
const footer = () => {
  return (
    <div className="mt-20 bg-slate-950 text-slate-200 rounded-2xl">
      <div className="flex justify-center gap-x-20 text-lg">
        <span className="grid mt-20 mb-20 gap-y-3">
        <h2 className="font-bold text-slate-200 text-2xl">Company</h2>
        <ul>
        <li className="mt-3">About</li>
        <li className="mt-3">Terms Of Use</li>
        <li className="mt-3">Privacy Policy</li>
        <li className="mt-3">How It Works</li>
        <li className="mt-3">Contact Us</li>
        </ul>
        </span>
        <span className="grid mt-20 mb-20">
        <h2 className="font-bold text-slate-200 text-2xl">Support</h2>
        <ul className="mb-12">
        <li className="mt-3">Support Career</li>
        <li className="mt-3">24h service</li>
        <li className="mt-3">Quick Chat</li>
        </ul>
        </span>
        <span className="grid mt-20 mb-20">
        <h2 className="font-bold text-slate-200 text-2xl">Contact</h2>
        <ul className="mb-20">
        <li className="mt-3">Whatsapp</li>
        <li className="mt-3">24h service</li>
        </ul>
        </span>
      </div>
      <span>
        <p className="text-center">Copyright &copy; 2023 Oxford<br/>store</p>
      </span>
    </div>
  )
}

export default footer
