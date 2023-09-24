import Image from "next/image";
// Img
import why from '/public/illustrations/image.png'
import Link from "next/link";
const WhyChooseUs = () => {
  return (
    <section id='whychooseus' className="w-full h-full max-sm:p-10 max-sm:pb-20 max-sm:pt-20 md:p-20 lg:p-32 bg-finedevs-black flex xl:flex-row max-xl:flex-col max-xl:text-center  items-center max-xl:justify-center xl:justify-start">
      <Image src={why} alt="Illustrations" className="w-42  object-cover"/>
      <div>
        <p className='font-extrabold text-white text-5xl'>¿Por qué elegirnos?</p>
        <p className='font-normal text-finedevs-grey text-lg mt-6 mb-10'>Nos enorgullecemos de entregar proyectos de alta calidad. Nuestra dedicación a la excelencia se refleja en cada detalle de nuestro trabajo, asegurando que logre resultados excepcionales y duraderos.</p>
        <Link href='/Spanish/#contact' className='hover:bg-finedevs-red ease-in-out transition font-extrabold text-center items-center justify-center text-finedevs-white uppercase p-3 pl-4 pr-4 border border-finedevs-red rounded-3xl' >Contactanos</Link>
      </div>
    </section>
  )
};
export default WhyChooseUs;