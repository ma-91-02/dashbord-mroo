"use client"
import Link from "next/link"
import { usePathname } from "next/navigation";
import { useState } from "react";
export default function Nav() {
  const [navMobile, setNavMoble] = useState(true)
  const path=usePathname();
  const navHandler = () => {
    if (navMobile) {
      setNavMoble(false)
    } else (
      setNavMoble(true)
    )
  }
  return (
    <main className={` flex flex-col  relative  min-h-screen justify-start items-start gap-y-4 h-full  xl:w-[230px] `}>
        <button onClick={navHandler} className={`flex xl:hidden  bg-red-950 p-5 w-full`} >nav</button>
        <nav className={` ${navMobile ? " hidden xl:flex" : "flex"} h-full min-h-screen  bg-slate-50 flex-col   gap-y-5 justify-start items-start text-white flex w-full xl:flex-col      backdrop-blur-sm text-3xl xl:text-3xl   overflow-hidden`}>
          {/* <div className="flex w-full   h-full border"> */}

          <Link onClick={navHandler} className={`${path === '/' ?"bg-red-950":"bg-myBlack"}  rounded-lg text-3xl text-center hover:bg-red-950 py-5  hover:text-white w-full `} href={'/'}>الرئيسية</Link>
          {/* </div> */}
          <Link onClick={navHandler} className={`${path === '/users' ?"bg-red-950":"bg-myBlack"}  rounded-lg text-3xl text-center hover:bg-red-950 p-5  hover:text-white w-full `} href={'/users'}>المستخدمين</Link>
          <Link onClick={navHandler} className={`${path === '/innovation' ?"bg-red-950":"bg-myBlack"}  rounded-lg text-3xl text-center hover:bg-red-950 p-5  hover:text-white w-full `} href={'/innovation'}>الابتكارات</Link>
          <Link  className="bg-myBlack rounded-lg text-3xl text-center hover:bg-red-950 p-5  hover:text-white w-full " href={'/login'} onClick={() => { localStorage.setItem('isLoggedIn', ''); }}>تسجيل الخروج</Link>

        </nav>
      </main>

  )
}