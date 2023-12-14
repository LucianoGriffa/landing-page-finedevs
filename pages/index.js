import Head from "next/head";
// Components
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs.jsx";
import Contact from "./components/Contact";
import Footer from "./components/Footer.jsx";
export default function Home() {
  return (
    <>
      <Head>
        <title>Finedevs</title>
        <meta name="description" content="Transform your business with custom software from Finedevs. We use leading technologies to ensure quality performance. High quality projects with exceptional results. Contact us to find the perfect solution!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Finedevs" />
        <link rel="icon" href="/finedevs-Logo.png" />
      </Head>
      <main className='font-finedevs-font bg-finedevs-black'>
        <NavBar/>
        <HomePage/>
        <Services/>
        <WhyChooseUs/>
        <Contact/>
        <Footer/>
        <div className="blurHome"></div>
        <div className="blurHome2"></div>
        <div className="blurService"></div>
        <div className="blurService2"></div>
        <div className="blurWhyChooseUs"></div>
        <div className="blurContact"></div>
      </main>
    </>
  )
}
