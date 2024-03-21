"use client"
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className=" relative w-[400px] h-[400px] flex justify-center items-center ">

        <div>
          logo
        </div>
        <div className="bg-red-900 w-[30%] h-[500px] flex flex-col">
          <div className="flex flex-col p-10 w-full h-full items-center justify-center ">
            <input className="flex my-5 p-2 text-3xl text-center rounded-lg" type="email" placeholder="اسم المستخدم" name="" value={email} id="" />
            <input className="flex my-5 p-2 text-3xl text-center rounded-lg" placeholder="كلمة السر" type="password" name="" value={pass} id="" />
          </div>
          <button>تسجيل الدخول</button>
        </div>
      </div>
    </main>
  );
}
