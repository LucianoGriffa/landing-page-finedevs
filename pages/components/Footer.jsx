import Link from "next/link";
const Footer = () => {
  return (
    <footer className="bg-transparent w-full h-full flex flex-col justify-center items-center p-5 pt-10 gap-10 shadow z-50">
      <div className="w-full h-full grid grid-cols-3 max-lg:grid-cols-1 justify-center items-center gap-6 z-50">
        <div className="flex flex-col justify-center items-center lg:items-end z-50">
          <p className="font-extrabold text-lg text-finedevs-white z-50">Services</p>
          <p className="font-normal text-md text-finedevs-white z-50">Web Development</p>
          <p className="font-normal text-md text-finedevs-white z-50">Mobile Development</p>
          <p className="font-normal text-md text-finedevs-white z-50">Custom Applications</p>
          <p className="font-normal text-md text-finedevs-white z-50">SEO</p>
          <p className="font-normal text-md text-finedevs-white z-50">Web Hosting and Domain</p>
          <p className="font-normal text-md text-finedevs-white z-50">Maintenance</p>
        </div>
        <div className="flex flex-col justify-center items-center z-50">
          <p className="font-extrabold text-lg text-finedevs-white z-50">Follow us</p>
          <Link href='#'  className="font-normal text-md text-finedevs-white z-50">Instagram</Link>
          <Link href='#'  className="font-normal text-md text-finedevs-white z-50">Twitter</Link>
          <Link href='#'  className="font-normal text-md text-finedevs-white z-50">LinkedIn</Link>
        </div>
        <div className="flex flex-col justify-center items-center max-lg:text-center lg:items-start z-50">
          <p className="font-extrabold text-lg text-finedevs-white z-50">Fine<span className="text-finedevs-red">devs</span></p>
          <p className="w-full lg:w-3/4 font-extrabold text-md text-finedevs-white z-50">"Taking your business to the next level with leading technological solutions."</p>
        </div>
      </div>
      <p className='font-normal text-finedevs-white text-md'>2023 &copy; Created by Luciano Griffa</p>
    </footer>
  )
};
export default Footer;