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
    imageUrl: "/dua-icons/ablution.svg",
    name: "النوم",
    link: "/"
  },
  {
    id: 2,
    imageUrl: "/dua-icons/ablution.svg",
    name: "الخلاء",
    link: "/"
  },
  {
    id: 3,
    imageUrl: "/dua-icons/ablution.svg",
    name: "الوضوء",
    link: "/"
  },
  {
    id: 4,
    imageUrl: "/dua-icons/ablution.svg",
    name: "مسجد",
    link: "/"
  },
  {
    id: 5,
    imageUrl: "/dua-icons/ablution.svg",
    name: "صلاة",
    link: "/"
  },
  {
    id: 6,
    imageUrl: "/dua-icons/ablution.svg",
    name: "منزل",
    link: "/"
  },
  {
    id: 7,
    imageUrl: "/dua-icons/ablution.svg",
    name: "ملابس",
    link: "/"
  },
  {
    id: 8,
    imageUrl: "/dua-icons/ablution.svg",
    name: "السفر",
    link: "/"
  },
  {
    id: 9,
    imageUrl: "/dua-icons/ablution.svg",
    name: "طعام",
    link: "/"
  },
  {
    id: 10,
    imageUrl: "/dua-icons/ablution.svg",
    name: "الذكر اليومي",
    link: "/"
  },
  {
    id: 11,
    imageUrl: "/dua-icons/ablution.svg",
    name: "إحياء الذكرى اليومي",
    link: "/"
  },
  {
    id: 12,
    imageUrl: "/dua-icons/ablution.svg",
    name: "بعد الصلوات",
    link: "/"
  },
  {
    id: 13,
    imageUrl: "/dua-icons/ablution.svg",
    name: "رزق",
    link: "/"
  },
  {
    id: 14,
    imageUrl: "/dua-icons/ablution.svg",
    name: "معرفة",
    link: "/"
  },
  {
    id: 15,
    imageUrl: "/dua-icons/ablution.svg",
    name: "الإيمان",
    link: "/"
  },
  {
    id: 16,
    imageUrl: "/dua-icons/ablution.svg",
    name: "يوم الحساب",
    link: "/"
  },
  {
    id: 17,
    imageUrl: "/dua-icons/ablution.svg",
    name: "مغفرة",
    link: "/"
  },
  {
    id: 18,
    imageUrl: "/dua-icons/ablution.svg",
    name: "مشيداً بالله",
    link: "/"
  },
  {
    id: 19,
    imageUrl: "/dua-icons/ablution.svg",
    name: "الحماية",
    link: "/"
  },
  {
    id: 20,
    imageUrl: "/dua-icons/ablution.svg",
    name: "عائلة",
    link: "/"
  },
  {
    id: 21,
    imageUrl: "/dua-icons/ablution.svg",
    name: "الصحة والمرض",
    link: "/"
  },
  {
    id: 22,
    imageUrl: "/dua-icons/ablution.svg",
    name: "الخسارة والفشل",
    link: "/"
  },
  {
    id: 23,
    imageUrl: "/dua-icons/ablution.svg",
    name: "الحزن والسعادة",
    link: "/"
  },
  {
    id: 24,
    imageUrl: "/dua-icons/ablution.svg",
    name: "الصبر",
    link: "/"
  },
  {
    id: 25,
    imageUrl: "/dua-icons/ablution.svg",
    name: "الدَين",
    link: "/"
  },
  {
    id: 26,
    imageUrl: "/dua-icons/ablution.svg",
    name: "المتوفى",
    link: "/"
  },
  {
    id: 27,
    imageUrl: "/dua-icons/ablution.svg",
    name: "الحج والعمرة",
    link: "/"
  },
  {
    id: 28,
    imageUrl: "/dua-icons/ablution.svg",
    name: "رمضان",
    link: "/"
  },
  {
    id: 29,
    imageUrl: "/dua-icons/ablution.svg",
    name: "طبيعة",
    link: "/"
  },
  {
    id: 30,
    imageUrl: "/dua-icons/ablution.svg",
    name: "السلوكيات الحميدة",
    link: "/"
  },
  {
    id: 31,
    imageUrl: "/dua-icons/ablution.svg",
    name: "إتخاذ القرار والتوجيه",
    link: "/"
  }
]

type Props = {}

export default function DuaAndAzkar({}: Props) {
  return (
    <Layout>
      <div className="mt-16 p-16 rounded-3xl pattern">
        <h1 className="text-center font-semibold text-4xl mb-12 text-primary-600">
          الدعاء والأذكار
        </h1>
        <div className="grid grid-cols-4 gap-10">
          {duaAndAzkarData.map((data) => (
            <Link key={data.id} href={data.link}>
              <div className="dua-card flex flex-col justify-center items-center bg-white card-shadow p-6 rounded-xl">
                <Image
                  src={data.imageUrl}
                  alt="dua and azkar"
                  width={60}
                  height={60}
                  className="dua-image mb-2"
                />
                <h2 className="font-semibold text-xl">{data.name}</h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  )
}
