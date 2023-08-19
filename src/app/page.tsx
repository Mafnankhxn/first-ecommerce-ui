import Image from 'next/image'
// import Hero from './hero'
import Banner from './banners'
import Products from './products'
import About from './about'
import Newsletter from './newsletter'
import Footer from './footer'
import contactme from './contactme'
export default function Home() {
  return (
    <div>
      {/* <Hero/> */}
      <Banner/><Products/><About/><Newsletter/><Footer/>
    </div>
  )
}
