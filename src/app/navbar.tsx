
const navbar = () => {
  return (
    <header>
        <nav className="bg-white mx-10 flex h-20 border-b-2">
            <span className="text-4xl font-bold align-bottom mt-5 font-mono">OXFORD</span>
            <ul className="flex gap-x-10 text-xl pl-20 mt-6 font-mono">
            <li className="hover:text-slate-700"><a href="/">Home</a></li>
            <li className="hover:text-slate-700"><a href="/myproducts">Products</a></li>
            <li className="hover:text-slate-700"><a href="/contactme">Contact Us</a></li>
            </ul>
            <span className="flex justify-end">
            {/* <img className="h-10 w-10 my-auto" src="homeicon.png" alt="home icon" /> */}
            </span>
        </nav>
    </header>
  )
}

export default navbar
