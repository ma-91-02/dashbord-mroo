import Layout from "@/components/layout";
import * as UserData from '@/demo/data/user.json'


export default function Users() {
  return (
    <Layout>
      <h1 className="text-4xl text-black">

        المستخدمين
      </h1>
      <div className=" bg-[#ccc] w-full flex-col rounded-md ">
        {UserData.map((item, index) =>
          <div className=" w-full text-[24px] text-[#222] flex border-b-2  p-5 justify-between" key={index}>
            <div className=" w-[25%] text-start">
              <h2>{item.farstName + " " + item.lastName}</h2>
            </div>
            <div className="w-[25%]">

              <span>{item.titleInnov}</span>
            </div>
            <div className="w-[25%] text-end">
              <span>{item.status}</span>
            </div>
            <div className="w-[25%] text-end">
              <button>اكثر</button>
            </div>
          </div>
        )}
      </div>
    </Layout>
  )
}