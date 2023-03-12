import React from "react"
import Link from "next/link"
import { Spin as Hamburger } from "hamburger-react"
import Image from "next/image"

type Props = {
  setOpenSidebar: (value: boolean) => void
}

export default function Header({ setOpenSidebar }: Props) {
  return (
    <header className="bg-white text-gray-900 w-full flex justify-between items-center h-header-height px-6 lg:px-16 fixed z-20 shadow-sm">
      <button className="rounded-md hover:bg-primary-500 hover:text-white">
        <Hamburger
          size={26}
          onToggle={(toggled) =>
            toggled ? setOpenSidebar(true) : setOpenSidebar(false)
          }
        />
      </button>
      <Link
        href="/"
        className="rounded-md hover:bg-primary-500 hover:text-white py-2 px-4 text-[17px] font-semibold transition-colors ease-in-out duration-200"
      >
        الرئيسية
      </Link>
      <Link href="/">
        <div className="svg-primary relative h-12 w-20">
          <Image
            src="/icons/mosque.svg"
            alt="prayer website"
            fill
            className="left-0 top-0 h-20"
            priority
          />
        </div>
      </Link>
    </header>
  )
}
