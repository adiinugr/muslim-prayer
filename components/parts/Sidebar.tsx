import Image from "next/image"
import Link from "next/link"
import React from "react"

type Props = {
  openSidebar: boolean
}

const menuData: { id: number; name: string; iconUrl: string; link: string }[] =
  [
    {
      id: 1,
      name: "مواقيت الصلاة",
      iconUrl: "/icons/clock.png",
      link: "/prayer-times"
    },
    {
      id: 2,
      name: "إتجاه القبلة",
      iconUrl: "/icons/kaaba.png",
      link: "/qibla"
    },
    {
      id: 3,
      name: "القمر اليوم",
      iconUrl: "/icons/islam.png",
      link: "/moon"
    },
    {
      id: 4,
      name: "حاسبة الزكاة",
      iconUrl: "/icons/calculator.png",
      link: "/zakat-calculator"
    },
    {
      id: 5,
      name: "التاريخ الهجري",
      iconUrl: "/icons/calendar.png",
      link: "/today-hijri-date"
    }
  ]

export default function Sidebar({ openSidebar }: Props) {
  return (
    <aside
      className={`bg-primary-500 rounded-tl-3xl text-white fixed top-header-height ${
        openSidebar ? "right-0" : "-right-sidebar-width"
      }  w-sidebar-width h-full z-10 transition-all duration-500 ease-in-out`}
    >
      <div className="flex flex-col items-center gap-6 py-10">
        <div className="flex flex-col items-center">
          <div className="w-24 h-28 relative mb-2">
            <Image src="/images/logo.png" fill sizes="20" alt="logo" />
          </div>
          <Link href="/" className="text-2xl font-bold">
            مواقيت الصلاة
          </Link>
          <Link href="/" className="text-lg text-teal-100">
            مواعيد الأذان
          </Link>
        </div>
        <div className="w-full px-8">
          <ul className="">
            {menuData.map((menu) => (
              <li
                key={menu.id}
                className="flex flex-row-reverse gap-2 items-center w-full px-2 py-3 rounded-md hover:bg-white hover:text-primary-500 transition-colors duration-300 ease-in-out"
              >
                <Link
                  href={menu.link}
                  className="inline-block w-full text-right"
                >
                  {menu.name}
                </Link>
                <Image
                  src={menu.iconUrl}
                  width={26}
                  height={26}
                  alt="menu icon"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  )
}
