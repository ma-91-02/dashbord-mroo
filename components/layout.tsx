import Nav from "./nav"

interface LayoutProps{
  children:React.ReactNode
}

export default function Layout({children}:LayoutProps){
  return(
    <div className="flex min-h-screen w-full flex-col items-center justify-center p-24 bg-gradient-to-tr from-[#222]  px-5 xl:px-[50px] to-[#ccc] overflow-hidden">
      <Nav/>
        {children}
    </div>
  )
}