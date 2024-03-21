import Image from 'next/image'
import './login.css'

import ButtonContainer from '@/components/btn-ont'
export default function LogIn() {
  return (
    <main className='flex flex-col xl:flex-row bg-gradient-to-tr from-[#000] via-[#990607]/40 px-5 xl:px-[50px] to-[#444]  justify-center items-center h-screen'>
      <div className='flex flex-col h-[50%] xl:h-full items-center justify-end xl:justify-center w-full'>
        <div className=' max-w-[250px] xl:max-w-[400px] '>
        <Image className=' ' src={'/images/logo.png'} width={400} height={400} alt='' />
        </div>
        <h1 className='almarai-bold text-3xl xl:text-4xl mb-2 md:mb-10 text-center'>مرو ام الاختراع ترحب بكم</h1>
        <h2 className=' text-2xl xl:text-3xl mb-10 almarai-bold'>صفحة تسجيل الدخول</h2>
      </div>
      <div className="h-[50%]  xl:py-10 flex justify-center items-start xl:items-center w-full">
        <form className='flex flex-col py-10 justify-center items-center'>
          <ButtonContainer>
            <span></span>
            <input className='text-2xl ' type="text" placeholder="اسم المستخدم" />
          </ButtonContainer>
          {/* <div className="inputBx relative"> */}
          <ButtonContainer>

            <span></span>
            <input className='text-2xl  w-[90%]' type="password" placeholder="كلمة السر" />
          </ButtonContainer>
          {/* </div> */}
          {/* <div className="inputBx relative"> */}
          <ButtonContainer>

            <input className='text-2xl almarai-light rounded-xl ' type="submit" value="تسجيل الدخول" />
          </ButtonContainer>
          {/* </div> */}

        </form>
      </div>
    </main>
  )
}