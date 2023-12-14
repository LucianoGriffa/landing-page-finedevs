import Image from "next/image";
// Img
import why from '/public/illustrations/image.png'
import Link from "next/link";
const WhyChooseUs = () => {
  return (
    <section id='whychooseus' className="w-full h-full max-sm:p-10 max-sm:pb-20 max-sm:pt-20 md:p-20 lg:p-32 bg-finedevs-black flex xl:flex-row max-xl:flex-col max-xl:text-center  items-center max-xl:justify-center xl:justify-start">
      <Image src={why} alt="Illustrations" className="w-42  object-cover z-50"/>
      <div>
        <p className='font-extrabold text-white text-5xl z-50'>Why choose us</p>
        <p className='font-normal text-finedevs-white text-lg mt-6 mb-10 z-50'>We pride ourselves on delivering high-quality projects. Our dedication to excellence is reflected in every detail of our work, ensuring that you achieve exceptional and long-lasting results.</p>
        <Link href='/#contact' className='z-50 hover:bg-finedevs-red ease-in-out transition font-extrabold text-center items-center justify-center text-finedevs-white uppercase p-3 pl-4 pr-4 border border-finedevs-red rounded-3xl' >Let's connect</Link>
      </div>
    </section>
  )
};
export default WhyChooseUs;