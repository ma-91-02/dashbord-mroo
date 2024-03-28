

interface SectionInnovationProps{
  title:string;
  desc:string;
}



export default function SectionInnovation({title, desc}:SectionInnovationProps){
  return(
    <div className="flex flex-col items-center justify-center rounded-2xl bg-myBlack/10 m-4 overflow-hidden">
      <h2 className="text-4xl p-5 bg-[#28282B] w-full text-center">{title}</h2>
      <p className=" text-3xl text-center px-5 py-2 font-light text-myBlack">{desc}</p>
    </div>
  )
}