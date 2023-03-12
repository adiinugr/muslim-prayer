import Layout from "@/components/Layout"
import Image from "next/image"
import Link from "next/link"
import React from "react"

const duaAndAzkarData: {
  id: number
  imageUrl: string
  name: string
  link: string
}[] = [
  {
    id: 1,
    imageUrl: "/dua-icons/1-washing-hands.svg",
    name: "النوم",
    link: "/"
  },
  {
    id: 2,
    imageUrl: "/dua-icons/2-sanitary.svg",
    name: "الخلاء",
    link: "/"
  },
  {
    id: 3,
    imageUrl: "/dua-icons/3-bed.svg",
    name: "الوضوء",
    link: "/"
  },
  {
    id: 4,
    imageUrl: "/dua-icons/4-home.svg",
    name: "مسجد",
    link: "/"
  },
  {
    id: 5,
    imageUrl: "/dua-icons/5-praying.svg",
    name: "صلاة",
    link: "/"
  },
  {
    id: 6,
    imageUrl: "/dua-icons/6-mosque.svg",
    name: "منزل",
    link: "/"
  },
  {
    id: 7,
    imageUrl: "/dua-icons/7-dish.svg",
    name: "ملابس",
    link: "/"
  },
  {
    id: 8,
    imageUrl: "/dua-icons/8-flight.svg",
    name: "السفر",
    link: "/"
  },
  {
    id: 9,
    imageUrl: "/dua-icons/9-fashion.svg",
    name: "طعام",
    link: "/"
  },
  {
    id: 10,
    imageUrl: "/dua-icons/10-pray.svg",
    name: "الذكر اليومي",
    link: "/"
  },
  {
    id: 11,
    imageUrl: "/dua-icons/11-timetable.svg",
    name: "إحياء الذكرى اليومي",
    link: "/"
  },
  {
    id: 12,
    imageUrl: "/dua-icons/12-calendar.svg",
    name: "بعد الصلوات",
    link: "/"
  },
  {
    id: 13,
    imageUrl: "/dua-icons/13-allah.svg",
    name: "رزق",
    link: "/"
  },
  {
    id: 14,
    imageUrl: "/dua-icons/14-knowledge.svg",
    name: "معرفة",
    link: "/"
  },
  {
    id: 15,
    imageUrl: "/dua-icons/15-envelope.svg",
    name: "الإيمان",
    link: "/"
  },
  {
    id: 16,
    imageUrl: "/dua-icons/16-allah.svg",
    name: "يوم الحساب",
    link: "/"
  },
  {
    id: 17,
    imageUrl: "/dua-icons/17-apology.svg",
    name: "مغفرة",
    link: "/"
  },
  {
    id: 18,
    imageUrl: "/dua-icons/18-fair.svg",
    name: "مشيداً بالله",
    link: "/"
  },
  {
    id: 19,
    imageUrl: "/dua-icons/19-heartbeat.svg",
    name: "الحماية",
    link: "/"
  },
  {
    id: 20,
    imageUrl: "/dua-icons/20-family.svg",
    name: "عائلة",
    link: "/"
  },
  {
    id: 21,
    imageUrl: "/dua-icons/21-protection.svg",
    name: "الصحة والمرض",
    link: "/"
  },
  {
    id: 22,
    imageUrl: "/dua-icons/22-patience.svg",
    name: "الخسارة والفشل",
    link: "/"
  },
  {
    id: 23,
    imageUrl: "/dua-icons/23-happiness.svg",
    name: "الحزن والسعادة",
    link: "/"
  },
  {
    id: 24,
    imageUrl: "/dua-icons/24-failure.svg",
    name: "الصبر",
    link: "/"
  },
  {
    id: 25,
    imageUrl: "/dua-icons/25-hajj.svg",
    name: "الدَين",
    link: "/"
  },
  {
    id: 26,
    imageUrl: "/dua-icons/26-morgue.svg",
    name: "المتوفى",
    link: "/"
  },
  {
    id: 27,
    imageUrl: "/dua-icons/27-debt.svg",
    name: "الحج والعمرة",
    link: "/"
  },
  {
    id: 28,
    imageUrl: "/dua-icons/28-attitude.svg",
    name: "رمضان",
    link: "/"
  },
  {
    id: 29,
    imageUrl: "/dua-icons/29-nature.svg",
    name: "طبيعة",
    link: "/"
  },
  {
    id: 30,
    imageUrl: "/dua-icons/30-iftar.svg",
    name: "السلوكيات الحميدة",
    link: "/"
  },
  {
    id: 31,
    imageUrl: "/dua-icons/31-decision.svg",
    name: "إتخاذ القرار والتوجيه",
    link: "/"
  }
]

type Props = {}

export default function DuaAndAzkar({}: Props) {
  return (
    <Layout headTitle="Dua and Azkar">
      <div className="mt-16 p-6 lg:p-16 rounded-3xl pattern">
        <h1 className="text-center font-semibold text-4xl mb-12 text-primary-600">
          الدعاء والأذكار
        </h1>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          {duaAndAzkarData.map((data) => (
            <Link key={data.id} href={data.link}>
              <div className="dua-card flex flex-col justify-center items-center h-full bg-white card-shadow p-6 rounded-xl">
                <Image
                  src={data.imageUrl}
                  alt="dua and azkar"
                  width={60}
                  height={60}
                  className="dua-image mb-2"
                />
                <h2 className="font-semibold text-xl text-primary-300">
                  {data.name}
                </h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  )
}
