import Image from 'next/image';
// Mock
const services = [
  {
    icon: '/icons/webDev.png',
    name: 'Desarrollo Web',
    description: 'Cree sitios web impresionantes que atraigan e impresionen con nuestra experiencia en desarrollo web.',
    width: 48,
    height: 48, 
  },
  {
    icon: '/icons/appDev.png',
    name: 'Mobile App',
    description: 'Mejora tu negocio con nuestro desarrollo de aplicaciones móviles. Multiplataforma, Android e iOS.',
    width: 48,
    height: 48, 
  },
  {
    icon: '/icons/desDev.png',
    name: 'Desktop Development',
    description: 'Potencie su negocio con aplicaciones de escritorio personalizadas a través de nuestros servicios de desarrollo de escritorio.',
    width: 48,
    height: 48, 
  },
];
const images = [
  {
    logo: '/logos/react-logo.png',
    name: "react",
    width: 100,
    height: 100, 
  },
  {
    logo: '/logos/hostinger-logo.png',
    name: "hostinger",
    width: 80,
    height: 80, 
  },
  {
    logo: '/logos/aws-logo.png',
    name: "aws",
    width: 100,
    height: 100, 
  },
  {
    logo: '/logos/firebase-logo.png',
    name: "firebase",
    width: 100,
    height: 100, 
  },
];
const Services = () => {
  return (
    <section id='services' className='w-full h-full bg-finedevs-black justify-center items-center m-0 flex flex-col p-20 max-sm:p-10 lg:p-36 lg:pl-40 lg:pr-40'>
      <p className='font-extrabold text-white text-5xl max-lg:mt-14'>Servicios</p>
      <p className='w-5/6 max-sm:text-md max-lg:w-full font-normal text-finedevs-grey text-lg text-center mt-10'>Descubra un mundo de servicios transformadores diseñados para elevar su presencia digital. Explore nuestra amplia gama de soluciones para potenciar su negocio e impulsar el éxito.</p>
      <div className='w-full h-full grid grid-cols-3 max-lg:grid-cols-1 max-lg:mt-10 gap-8 mt-20'>
        {services.map ((item) => {
          return (
            <div key={item.name} className='w-full h-full flex flex-col border border-finedevs-white rounded-2xl gap-3 p-4 items-start justify-start'>
              <Image src={item.icon} alt="Icon Services" width={item.width} height={item.height} />
              <h2 className='text-white font-extrabold text-2xl'>{item.name}</h2>
              <h3 className='text-finedevs-gray font-normal text-sm'>{item.description}</h3>
            </div>
          )
        })}
      </div>
      <div className='w-full grid grid-cols-4 max-lg:grid-cols-2 max-lg:mt-10 mt-20 max-lg:gap-4 items-center justify-center'>
        {images.map ((item) => {
          return (
            <div key={item.name} className='flex justify-center items-center'>
              <Image src={item.logo} alt="Logo Services" width={item.width} height={item.height} />
            </div>
          )
        })}
      </div>
    </section>
  )
}
export default Services;