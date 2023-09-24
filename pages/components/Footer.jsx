import Link from "next/link";
const Footer = () => {
  return (
    <footer className="bg-transparent w-full h-full flex flex-col justify-center items-center p-5 pt-10 gap-10 shadow">
      <div className="w-full h-full grid grid-cols-3 max-lg:grid-cols-1 justify-center items-center gap-6">
        <div className="flex flex-col justify-center items-center lg:items-end">
          <p className="font-extrabold text-lg text-finedevs-white">Services</p>
          <p className="font-normal text-md text-finedevs-grey">Web Development</p>
          <p className="font-normal text-md text-finedevs-grey">Mobile App</p>
          <p className="font-normal text-md text-finedevs-grey">Desktop Development</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="font-extrabold text-lg text-finedevs-white">Follow us</p>
          <Link href='https://www.instagram.com/finedevs/'>Instagram</Link>
          <Link href='https://twitter.com/finedevs'>Twitter</Link>
          {/* <Link href='#'>LinkedIn</Link> */}
        </div>
        <div className="flex flex-col justify-center items-center max-lg:text-center lg:items-start">
          <p className="font-extrabold text-lg text-finedevs-white">Fine<span className="text-finedevs-red">devs</span></p>
          <p className="w-full lg:w-3/4 font-extrabold text-md text-finedevs-white">"Taking your business to the next level with leading technological solutions."</p>
        </div>
      </div>
      <p className='font-normal text-finedevs-grey text-md'>Created by finedevs</p>
    </footer>
  )
};
export default Footer;