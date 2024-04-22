"use client"
import Layout from "@/components/layout";
import data from '@/demo/data/innovative.json';
import { useEffect, useState } from "react";
export default function Innovation() {
  // const { itemId } = router.query;
  const [selectedStatus, setSelectedStatus] = useState("all"); // Default to show all results
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleFilterChange = (status: string) => {
    setSelectedStatus(status);
  };


  // Filter results based on the selected status
  const filteredResults = selectedStatus === "all"
    ? data
    : data.filter(result => result.status === selectedStatus);

  console.log(filteredResults);
  return (
    <Layout>
      <div className=" w-full text-myBlack flex gap-x-5 flex-col  lg:text-[24px] ">

        <h1 className="mb-4">جميع الابتكارات</h1>
        <div className="mb-2 flex gap-x-5  text-white overflow-auto">
          {/* Filter buttons */}
          <button
            className={` bg-myBlack py-2 px-6 rounded-sm  hover:bg-red-950 ${selectedStatus === "all" && " bg-red-950"
              }`}
            onClick={() => handleFilterChange("all")}
          >
            الكل
          </button>
          <button
            className={`bg-myBlack py-2 px-6 rounded-sm  hover:bg-red-950 ${selectedStatus === "قيد المراجعة" && "bg-red-950"
              }`}
            onClick={() => handleFilterChange("قيد المراجعة")}
          >
            قيد المراجعة
          </button>
          <button
            className={`bg-myBlack py-2 px-6 rounded-sm  hover:bg-red-950 ${selectedStatus === "تم القبول" && "bg-red-950"
              }`}
            onClick={() => handleFilterChange("تم القبول")}
          >
            تم القبول
          </button>
          <button
            className={`bg-myBlack py-2 px-6 rounded-sm  hover:bg-red-950 ${selectedStatus === "مرفوض" && "bg-red-950"
              }`}
            onClick={() => handleFilterChange("مرفوض")}
          >
            مرفوض
          </button>
          <button
            className={`bg-myBlack py-2 px-6 rounded-sm  hover:bg-red-950 ${selectedStatus === "في انتظار المراجعة" && "bg-red-950"
              }`}
            onClick={() => handleFilterChange("في انتظار المراجعة")}
          >
            في انتظار المراجعة
          </button>
        </div>
      </div>
      <div className="w-full bg-[#ccc] rounded-md text-[24px]">
        <div className="w-full bg-[#ccc] rounded-md text-[24px] gap-y-[30px] flex flex-col justify-center">
          {filteredResults.map((item, index) =>
            <div className="border-b-2 p-2 lg:p-5 flex flex-col lg:flex-row  justify-center lg:justify-between hover:bg-red-950 transition-all duration-300 cursor-pointer items-center" key={index}>
              <div className=" w-full font-bold lg:w-[30%]">
                <h2>{item.title}</h2>
              </div>
              <div className=" w-full font-normal  text-[#777] text-[20px] lg:w-[40%]">
                <h2>{item.desc}</h2>
              </div>
              <div className=" w-full lg:w-[20%] text-[#777] text-[16px] lg:text-[20px]">
                <h2>{item.status}</h2>
              </div>
              <div className=" hidden lg:w-[10%] lg:flex justify-between">
                <button className="bg-red-600 p-2 rounded-sm ">رفض</button>
                <button className="bg-green-600 p-2 rounded-sm ">قبول</button>
              </div>
            </div>
          )}
        </div>

      </div>
    </Layout>
  )
}