"use client"
import Image from 'next/image'
import { useEffect, useState } from 'react';
import { setLoggedIn, isLoggedIn } from '@/utils/auth';
import './login.css'


import ButtonContainer from '@/components/btn-ont'
export default function LogIn() {
  const [pass, setPass] = useState('');
  const [user, setUser] = useState('');
  const [error, setError] = useState('');
  useEffect(() => {
    // Check if user is logged in, redirect to home page
    if (isLoggedIn()) {
      window.location.href = '/';
    }
  }, []);

  const handleLogin = () => {
    // Perform login logic here
    // Once login is successful, set the logged in flag in localStorage
    if (pass === 'admin' && user === "admin") {
      setLoggedIn();
      window.location.href = '/';
    } else {
      setError('تحقق من اسم المستخدم وكلمة المرور');
    }
  };
  return (
    <main className='flex flex-col xl:flex-row bg-gradient-to-tr from-[#222]  px-5 xl:px-[50px] to-[#ccc]  justify-center items-center h-screen'>
      <div className='flex flex-col xl:h-full items-center justify-end xl:justify-center w-full'>
        <div className=' max-w-[200px] xl:max-w-[300px] '>
          <Image className=' ' src={'/images/logo.png'} width={400} height={400} alt='' />
        </div>
        {/* <h2 className=' text-2xl xl:text-3xl mb-10 almarai-bold'>صفحة تسجيل الدخول</h2> */}
      </div>
      <div className="h-[50%]  xl:py-10 flex justify-center items-start xl:items-center w-full">
        <form className='flex flex-col py-10 justify-center items-center'>
          <ButtonContainer>
            <span></span>
            <input className='text-2xl ' onChange={(e) => setUser(e.target.value)} type="text" placeholder="اسم المستخدم" />
          </ButtonContainer>
          {/* <div className="inputBx relative"> */}
          <ButtonContainer>
            <span></span>
            <input className='text-2xl  w-[90%]' onChange={(e) => setPass(e.target.value)} type="password" placeholder="كلمة السر" />
          </ButtonContainer>
          <ButtonContainer>
            <input onClick={handleLogin} className='text-2xl almarai-light rounded-xl ' type="button" value="تسجيل الدخول" />
          </ButtonContainer>
          {error && <p>{error}</p>}
        </form>
      </div>
    </main>
  );
}