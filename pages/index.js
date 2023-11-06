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
        <meta name="description" content="Finedevs ofrece servicios de software para empresas y/o negocios." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Finedevs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='font-finedevs-font bg-finedevs-black'>
        <NavBar/>
        <HomePage/>
        <Services/>
        <WhyChooseUs/>
        <Contact/>
        <Footer/>
      </main>
    </>
  )
}
