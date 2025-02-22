import React from 'react'
import { navLinks } from '../../../../constant/constant'
import Link from 'next/link'
import { CgClose } from 'react-icons/cg'

type Props = {
    showNav: boolean;
    closeNav: ()=>void;
}
const MobileNav = ({closeNav, showNav}: Props) => {
    const navOpen = showNav ? 'translate-x-0' : 'translate-x-[-100%]'
  return (
    <div>
        {/* Overlay */}
        <div className={`fixed ${navOpen} inset-0 transition-all duration-500 z-[1000] bg-black opacity-70 w-full h-screen`}></div>
        {/* navlinks */}
        <div className={`text-white ${navOpen} fixed justify-center flex flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-rose-500 space-y-6 z-[10006]`}>
            {navLinks.map((link)=>{
                return (
                    <Link key={link.id} href={link.url}>
                    <p className='text-white w-fit text-[20px] ml-12 border-white sm:text-[30px]'>{link.label}</p>
                </Link>
                )
            })}
        {/* close button  */}
        <CgClose onClick={closeNav} className='absolute top-[0.7] right-[1.4rem] sm:h-8 w-6 h-6'/>
        </div>
    </div>
  )
}

export default MobileNav