'use client'
import { isLoggedIn } from "@/utils/auth";
import { useState, useEffect } from "react";
import Image from "next/image";
// import { useRouter } from 'next/router';
import withAuth from "@/components/withAut";
import Nav from "@/components/nav";
import { useRouter } from "next/navigation";
import Layout from "@/components/layout";


export default function Home() {
  const router = useRouter();
  useEffect(() => {
    // Check if user is not logged in, redirect to login page
    if (!isLoggedIn()) {
      router.push('/login')
    }
  }, [router]);
  return (
    <Layout>
      {/* <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-tr from-[#222]  px-5 xl:px-[50px] to-[#ccc]">
        <Nav /> */}
        <div className=" flex justify-center items-center ">
          <div>
            logo
          </div>
          <button >تسجيل الخروج</button>
        </div>
      {/* </main> */}
    </Layout>
  );
}
