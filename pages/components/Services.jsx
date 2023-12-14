import Image from 'next/image';
const services = [
  {
    icon: '/icons/webIcon.png',
    name: 'Web Development',
    description: 'Boost your online presence with an attractive website and exceptional user experience. Our web development team creates custom designs that enhance your brand visibility on the web.',
    width: 48,
    height: 48,
  },
  {
    icon: '/icons/mobileIcon.png',
    name: 'Mobile Development',
    description: 'Optimize your business with cutting-edge mobile applications. We develop cross-platform solutions for Android and iOS, providing an optimal user experience and improving interaction with your customers.',
    width: 48,
    height: 48,
  },
  {
    icon: '/icons/desktopIcon.png',
    name: 'Custom Applications',
    description: 'We develop tailor-made applications for various industries, aiming to optimize and improve processes for small, medium, and large enterprises. Stay informed about our releases!',
    width: 48,
    height: 48,
  },
  {
    icon: '/icons/seoIcon.png',
    name: 'SEO',
    description: 'Maximize your online visibility and attract more customers with our SEO service. We optimize your site for search engines, improving your ranking and digital presence.',
    width: 48,
    height: 48,
  },
  {
    icon: '/icons/hostingIcon.png',
    name: 'Web Hosting and Domain',
    description: 'Ensure optimal performance for your website with our web hosting and domain services. We provide reliable and secure solutions to maintain your online presence without worries.',
    width: 48,
    height: 48,
  },
  {
    icon: '/icons/mantIcon.png',
    name: 'Maintenance',
    description: 'We ensure that your online presence continues to function optimally at all times. We keep your technology up-to-date with the latest updates and security patches.',
    width: 48,
    height: 48,
  },
];

const Services = () => {
  return (
    <section id='services' className='w-full h-full bg-finedevs-black justify-center items-center m-0 flex flex-col p-20 max-sm:p-10 lg:p-36 lg:pl-40 lg:pr-40 z-50'>
      <p className='font-extrabold text-white text-5xl max-lg:mt-14 z-50'>Services</p>
      <p className='w-5/6 max-sm:text-md max-lg:w-full font-normal text-finedevs-white text-lg text-center mt-10 z-50'>Discover a world of transformative services designed to elevate your digital presence. Explore our wide range of solutions to power your business and drive success.</p>
      <div className='w-full h-full grid max-md:grid-cols-1 max-lg:mt-10 lg:grid-cols-2 xl:grid-cols-3 gap-8 mt-20 z-50'>
        {services.map ((item) => {
          return (
            <div key={item.name} className='w-full h-full flex flex-col bg-frosted border border-finedevs-white rounded-2xl gap-3 p-4 items-start justify-start z-50'>
              <Image src={item.icon} alt="Icon Services" width={item.width} height={item.height} />
              <h2 className='text-finedevs-white font-extrabold text-2xl'>{item.name}</h2>
              <h3 className='text-finedevs-white font-normal text-sm'>{item.description}</h3>
            </div>
          )
        })}
      </div>
    </section>
  )
}
export default Services;