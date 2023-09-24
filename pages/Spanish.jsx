import Navbar from "./components/Spanish/NavBar";
import HomePage from "./components/Spanish/HomePage";
import Services from "./components/Spanish/Services";
import WhyChooseUs from "./components/Spanish/WhyChooseUs";
import Contact from "./components/Spanish/Contact";
import Footer from "./components/Spanish/Footer";
const Spanish = () => {
  return (
    <div className='font-finedevs-font bg-finedevs-black'>
      <Navbar/>
      <HomePage/>
      <Services/>
      <WhyChooseUs/>
      <Contact/>
      <Footer/>
    </div>
  )
}
export default Spanish;