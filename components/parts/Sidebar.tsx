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
      name: "تحويل التاريخ",
      iconUrl: "/icons/calendar.svg",
      link: "/today-hijri-date"
    },
    {
      id: 2,
      name: " الدعاء والأذكار",
      iconUrl: "/icons/doa.svg",
      link: "/dua-and-azkar"
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
            <Image
              src="/icons/mosque.svg"
              fill
              sizes="20"
              alt="logo"
              className="svg-white"
            />
          </div>
          <Link href="/" className="text-2xl font-bold">
            مواقيت الصلاة
          </Link>
          <Link href="/" className="text-lg text-teal-100">
            مواعيد الأذان
          </Link>
        </div>
        <div className="w-full px-8">
          <ul className="sidebar-menu">
            {menuData.map((menu) => (
              <Link key={menu.id} href={menu.link}>
                <li className="flex flex-row-reverse gap-2 items-center w-full px-4 py-3 rounded-md hover:bg-white hover:text-primary-500 transition-colors duration-300 ease-in-out">
                  <div className="flex items-center gap-4 w-full text-right">
                    <Image
                      src={menu.iconUrl}
                      width={26}
                      height={26}
                      className="sidebar-icon"
                      alt="menu icon"
                    />
                    {menu.name}
                  </div>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  )
}
