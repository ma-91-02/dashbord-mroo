import Nav from "./nav"

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen w-full h-full xl:flex-col  items-center justify-center p-24 bg-gradient-to-tr  from-myBlack   px-5 xl:px-[50px] to-[#ccc] overflow-hidden">
      <div className=" h-full bg-black  flex w-[20%] xl:w-full">
        <Nav />

      </div>
      <div className="flex w-[80%] xl:w-full flex-col container">
        {children}
      </div>
    </div>
  )
}