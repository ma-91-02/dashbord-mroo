import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav";
import { isLoggedIn } from "@/utils/auth";
// import { useRouter } from "next/router";
// import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "لوحة التحكم مرو",
  description: "مرو تمت البرمجة والتطوير بواسطة المهندس محمد الزرفي",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const router = useRouter();
  // useEffect(() => {
  //   // Check if user is not logged in, redirect to login page
  //   if (!isLoggedIn()) {
  //     router.push('/login')
  //   }
  // }, [router]);
  return (
    <html lang="en">
      <body className={inter.className + ` h-full max-h-fit  w-full relative flex flex-row`}>
        {children}
      </body>
    </html>
  );
}
