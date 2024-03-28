import Nav from "./nav"

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen w-full h-full max-h-screen px-5  gap-y-5 items-center justify-center relative  overflow-auto   ">
        {children}
    </div>
  )
}