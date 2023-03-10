import Layout from "@/components/Layout"
import Pagination from "@/components/utils/Pagination"
import Image from "next/image"
import Link from "next/link"
import React from "react"

const prayerTimesData: {
  id: number
  time: string
  iconUrl: string
  name: string
  isCurrentTime: boolean
}[] = [
  {
    id: 1,
    time: "4:26 AM",
    iconUrl: "/shalat-icons/fajr.svg",
    name: "الفجْر",
    isCurrentTime: true
  },
  {
    id: 2,
    time: "5:32 AM",
    iconUrl: "/shalat-icons/sunrise.svg",
    name: "الشروق",
    isCurrentTime: false
  },
  {
    id: 3,
    time: "11:43 AM",
    iconUrl: "/shalat-icons/dhuhr.svg",
    name: "الظُّهْر",
    isCurrentTime: false
  },
  {
    id: 4,
    time: "2:46 PM",
    iconUrl: "/shalat-icons/asr.svg",
    name: "العَصر",
    isCurrentTime: false
  },
  {
    id: 5,
    time: "5:48 PM",
    iconUrl: "/shalat-icons/maghrib.svg",
    name: "المَغرب",
    isCurrentTime: false
  },
  {
    id: 6,
    time: "6:58 PM",
    iconUrl: "/shalat-icons/isha.svg",
    name: "العِشاء",
    isCurrentTime: false
  }
]

type Props = {}

export default function PrayerTimesCities({}: Props) {
  return (
    <Layout>
      <div className="mt-16 p-10 rounded-3xl pattern mb-12">
        <h1 className="text-center text-4xl font-bold text-primary-600">
          مواقيت الصلاة في مدن السعودية
        </h1>
      </div>

      <div className="text-justify">
        <h2 className="mb-2">
          <Link href="/" className="text-2xl text-primary-600 font-bold ">
            مواقيت الصلاة والأذان في السعودية, مكه
          </Link>
        </h2>
      </div>
      <div className="mt-6 mb-10 flex justify-between items-end">
        <div className="pattern-2 rounded-3xl p-8">
          <div className="text-white text-4xl font-bold mb-3">04:56:31</div>
          <div className="text-cream text-lg">الوقت المتبقي لأذان المَغرب</div>
        </div>

        <div>
          <time className="text-2xl text-gray-600 font-bold mb-2">
            11:29:33 PM
          </time>
          <div className="summary">الوقت الأن في مكه</div>
        </div>
      </div>
      <ul className="grid grid-cols-6 gap-4 mb-10">
        {prayerTimesData.map((data) => (
          <li
            key={data.id}
            className={`flex flex-col justify-center items-center rounded-xl border-2 border-cream font-bold p-4 ${
              data.isCurrentTime && "text-white shadow-md green-gradient"
            }`}
          >
            <time>{data.time}</time>
            <Image
              src={data.iconUrl}
              width="45"
              height="45"
              alt="shalat icon"
            />
            <div>{data.name}</div>
          </li>
        ))}
      </ul>
      <div className="grid grid-cols-4 gap-4">
        <div>
          <b>طريقة الحساب:</b>
          <br />
          مكه - ام القرى
        </div>
        <div>
          <b>طريقة حساب العصر:</b>
          <br /> شافعي، حنبلي، مالكي
        </div>
        <div>
          <b>خط الطول/العرض:</b>
          <br /> 21.42/39.83
        </div>
        <div>
          <b>المنطقة الزمنية:</b>
          <br /> Asia/Riyadh (+3)
        </div>
      </div>
      <div className="mt-8 text-justify mb-16">
        <button className="flex gap-2 items-center justify-center border border-primary-400 py-1 px-2">
          <Image src="/icons/settings.svg" width="15" height="15" alt="icon" />{" "}
          تغيير الإعدادات
        </button>
      </div>

      <div>
        <Pagination itemsPerPage={4} />
      </div>
    </Layout>
  )
}
