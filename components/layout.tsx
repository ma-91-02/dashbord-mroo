import Nav from "./nav"

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex   w-full h-full gap-y-5 items-center justify-center relative  overflow-auto   ">
      <Nav />
      <div className="flex flex-col items-center justify-center w-[85%] pr-[15%] py-[5%] md:w-[92%] md:pr-[8%]  xl:w-[85%] xl:pr-[15%]">

        {children}
      </div>
    </div>
  )
}