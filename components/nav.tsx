"use client"
import Image from "next/image";
import Link from "next/link"
import { usePathname } from "next/navigation";
import { FaHome, FaMinus, FaUsers, FaInnosoft } from "react-icons/fa";
import { FiMenu, FiLogOut } from "react-icons/fi";


import { useState } from "react";
export default function Nav() {
  const [navMobile, setNavMoble] = useState(true)
  const path = usePathname();
  const navHandler = () => {
    if (navMobile) {
      setNavMoble(false)
    } else (
      setNavMoble(true)
    )
  }
  return (
    <main className={` flex flex-col right-0 top-0 z-50 min-h-screen max-h-screen fixed justify-start items-start gap-y-4 h-full  xl:w-[230px]  bg-[#ccc]  `}>
      <div className={`flex items-center justify-center ${navMobile ? " w-[75px]" : "w-full"}   xl:w-full  mt-20`}>
        <Image src={'/images/logo.png'} width={150} height={150} alt="logo mroo" />
      </div>
      <button onClick={navHandler} className={`flex xl:hidden  bg-red-950 p-5 w-full justify-center text-3xl`} >{<FiMenu />}</button>
      <nav className={` ${navMobile ? "flex" : "flex"} h-full min-h-screen sticky top-20 flex-col   gap-y-5 justify-start items-start text-white flex w-full xl:flex-col      backdrop-blur-sm text-3xl xl:text-2xl   overflow-hidden`}>
        {/* <div className="flex w-full   h-full border"> */}

        <Link onClick={navHandler} className={`${path === '/' ? "bg-red-950" : "bg-myBlack"}  rounded-lg text-2xl text-center hover:bg-red-950 p-5  hover:text-white w-full `} href={'/'}>
          <div className="w-full flex justify-center xl:justify-end  flex-row-reverse ">

            <span className={` ${navMobile ? " hidden xl:flex" : "flex"} text-ellipsis pr-2 `}>
              الرئيسية
            </span>
            <FaHome />
          </div>

        </Link>
        {/* </div> */}
        <Link onClick={navHandler} className={`${path === '/users' ? "bg-red-950" : "bg-myBlack"}  rounded-lg text-2xl text-center hover:bg-red-950 p-5  hover:text-white w-full b`} href={'/users'}>
          <div className="w-full flex justify-center xl:justify-end pr-1 flex-row-reverse ">

            <span className={` ${navMobile ? " hidden xl:flex" : "flex"} text-ellipsis pr-2 `}>
              المستخدمين
            </span>
            <FaUsers />
          </div>
        </Link>
        <Link onClick={navHandler} className={`${path === '/innovation' ? "bg-red-950" : "bg-myBlack"}  rounded-lg text-3xl text-center hover:bg-red-950 p-5  hover:text-white w-full `} href={'/innovation'}>

          <div className="w-full flex justify-center xl:justify-end  flex-row-reverse ">

            <span className={` ${navMobile ? " hidden xl:flex" : "flex"} text-ellipsis pr-2 `}>
              الابتكارات
            </span>
            <FaInnosoft />
          </div>
        </Link>
        <Link className="bg-myBlack rounded-lg text-2xl text-center hover:bg-red-950 p-5  hover:text-white w-full " href={'/login'} onClick={() => { localStorage.setItem('isLoggedIn', ''); }}>

          <div className="w-full flex justify-center xl:justify-end flex-row-reverse ">

            <span className={` ${navMobile ? " hidden xl:flex" : "flex"} text-ellipsis pr-2 `}>
              تسجيل الخروج
            </span>
            <FiLogOut />
          </div>
        </Link>

      </nav>
    </main>

  )
}