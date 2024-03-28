import TitleSection from "./title-section";


interface SectionProps {
  children: React.ReactNode;
  title:string
}



export default function MainSection({ children, title }: SectionProps) {
  return (
    <div className=" w-full bg-myBlack/10  justify-center relative items-center flex-col m-2 rounded-2xl overflow-hidden ">
      <TitleSection title={title}/>
      {children}
    </div>
  )
}