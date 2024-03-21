import { ElementType } from "react"

interface ButtonContainerProps{
  children:React.ReactNode
}

export default function ButtonContainer({children}:ButtonContainerProps){
  return(
    <div className="inputBx relative mb-[40px]">{children}</div>
  )
}