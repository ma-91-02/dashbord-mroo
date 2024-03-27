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
    <main className={` flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto  xl:right-[2%] z-50 top-0 w-full  xl:w-[230px] xl:max-w-md xl:h-screen`}>
        <button onClick={navHandler} className={`flex xl:hidden fixed  top-[5%] right-0 bg-red-950 p-5`} >nav</button>
        <nav className={` ${navMobile ? "hidden xl:flex" : "flex"}  bg-gradient-to-tr from-myBlack/10 p-2 to-myBlack/10 flex-col items-center h-full gap-y-5 justify-center text-white flex w-full xl:flex-col  xl:justify-center  xl:h-max   backdrop-blur-sm text-3xl xl:text-3xl xl:rounded-full  overflow-hidden py-24`}>
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