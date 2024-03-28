'use client'
import { isLoggedIn } from "@/utils/auth";
import { useState, useEffect } from "react";
import Image from "next/image";
// import { useRouter } from 'next/router';
import withAuth from "@/components/withAut";
import Nav from "@/components/nav";
import { useRouter } from "next/navigation";
import Layout from "@/components/layout";
import MainSection from "@/components/home-page/main-section";
import TitleSection from "@/components/home-page/title-section";
import SectionInnovation from "@/components/home-page/section-innovation";


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
        <div className=" container w-full h-full flex flex-col xl:flex-row justify-center items-center xl:items-start ">
          <MainSection title="اخر المستخدمين">
            <div className="flex justify-around flex-col h-full w-full items-center p-5">
              <div className="flex w-full bg-myBlack/10 items-center justify-center m-1 rounded-xl">
                <h4 className="text-3xl p-5 ">احمد محمد</h4>
                <h4 className="text-3xl p-5">العراق</h4>
              </div>
              <div className="flex w-full bg-myBlack/10 items-center justify-center m-1 rounded-xl">
                <h4 className="text-3xl p-5">عثمان محمد</h4>
                <h4 className="text-3xl p-5">السعودية</h4>
              </div>
              <div className="flex w-full bg-myBlack/10 items-center justify-center m-1 rounded-xl">
                <h4 className="text-3xl p-5">عمر سعيد</h4>
                <h4 className="text-3xl p-5">مصر</h4>
              </div>
            </div>
          </MainSection>
          <MainSection title="اخر الابتكارات">
            <SectionInnovation title="عنوان الابتكار الاول" desc=" وصف الابتكار هو عبارة عن وصف يتكون من اول ١٦٠ حرف توضح الفكرة باختصار" />
            <SectionInnovation title="عنوان الابتكار الثاني" desc="وصف الابتكار هو عبارة عن وصف يتكون من اول ١٦٠ حرف توضح الفكرة باختصار" />
            <SectionInnovation title="عنوان الابتكار الثالث" desc="وصف الابتكار هو عبارة عن وصف يتكون من اول ١٦٠ حرف توضح الفكرة باختصار" />
          </MainSection>
        </div>
        <div className=" container w-full h-full flex flex-col xl:flex-row justify-center items-center  ">
          <MainSection title="عدد المستخدمين">
            <span className="text-5xl w-full flex justify-center items-center h-full p-10 text-myBlack text-center ">400</span>
          </MainSection>
          <MainSection title="عدد الابتكارات">
            {/* <div className="flex bg-black border items-center flex-col w-full m-auto justify-center"> */}

            <span className="text-5xl w-full flex justify-center items-center h-full p-10 text-myBlack ">400</span>
            {/* </div> */}
          </MainSection>
        </div>
    </Layout>
  );
}
