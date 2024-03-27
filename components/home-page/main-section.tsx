import TitleSection from "./title-section";


interface SectionProps {
  children: React.ReactNode;
  title:string
}



export default function MainSection({ children, title }: SectionProps) {
  return (
    <div className="w-full  bg-white/10 h-full justify-center items-center flex-col m-2 rounded-2xl  overflow-auto">
      <TitleSection title={title}/>
      {children}
    </div>
  )
}