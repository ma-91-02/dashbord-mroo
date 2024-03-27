

interface TitleSectionProps{
  title:string
}


export default function TitleSection({title}:TitleSectionProps){
  return(
    <h2 className=" text-center w-full bg-red-950 text-3xl p-5 font-extrabold">{title}</h2>
  )
}