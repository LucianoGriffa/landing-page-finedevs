import React, { useState } from 'react';
// Next Components
import Link from 'next/link';
// Smooth Scroll Function
import smoothScroll from '/public/smoothScroll'
const Navbar = () => {
  const [toogleNav, setToogleNav] = useState(false)
  const handleLinkClick = (event) => {
    setToogleNav(false)
    event.preventDefault();
    smoothScroll(event.target.hash);
  }
  return (
    <nav className={`w-full h-16 fixed bg-frosted flex flex-row z-50 items-center justify-between p-10 ${toogleNav ? 'w-full h-full flex flex-col' : ''}`}>
      <h1 className="font-extrabold text-3xl text-white">Fine<span className='text-finedevs-red'>devs</span></h1>
      <ul className={`min-xl:${toogleNav ? 'w-full flex flex-col justify-center items-center text-white text-center p-4 gap-6 bg-finedevs-red rounded-3xl top-24' : 'w-full h-full flex flex-row justify-center items-center gap-8 max-lg:gap-3 max-lg:hidden'}`}>
        <li className='font-extrabold text-center items-center justify-center text-white' onClick={handleLinkClick}><Link href='/Spanish/#home' >Inicio</Link></li>
        <li className='font-extrabold text-center items-center justify-center text-white' onClick={handleLinkClick}><Link href='/Spanish/#services' >Servicios</Link></li>
        <li className='font-extrabold text-center items-center justify-center text-white' onClick={handleLinkClick}><Link href='/Spanish/#whychooseus' >Por Qué Elegirnos</Link></li>
        {/* <li className='font-extrabold text-center items-center justify-center text-white' onClick={handleLinkClick}><Link href='/#work' >Work Done</Link></li>
        <li className='font-extrabold text-center items-center justify-center text-white' onClick={handleLinkClick}><Link href='/#' >Language</Link></li> */}
        <li className='hover:bg-finedevs-red hover:border-finedevs-red ease-in-out transition font-extrabold text-center items-center justify-center text-white uppercase p-2 pl-4 pr-4 border border-white rounded-3xl' onClick={handleLinkClick}><Link href='/Spanish/#contact' >Contacto</Link></li>
        <li className='hover:bg-finedevs-red hover:border-finedevs-red ease-in-out transition font-extrabold text-center items-center justify-center text-white uppercase p-2 pl-4 pr-4 border border-white rounded-3xl' onClick={handleLinkClick}><Link href='/' >English</Link></li>
      </ul>
      <button className="btn btn-square btn-ghost lg:hidden border-1 border-white rounded-full" onClick={() => setToogleNav(!toogleNav)}>
        {toogleNav ? (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current text-white">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current text-white">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        )}
      </button>
    </nav>
  )
};
export default Navbar;