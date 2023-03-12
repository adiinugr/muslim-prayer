import Link from "next/link"
import React from "react"

type Props = {}

export default function Footer({}: Props) {
  return (
    <div className="bg-primary-500 text-white p-8 text-center rounded-t-3xl mt-20">
      <div>
        <Link href="https://symbolcopyright.com/" target="_blank" title="©">
          ©
        </Link>{" "}
        2023 جميع الحقوق محفوظة لموقع{" "}
        <Link className="text-white font-semibold" href="/">
          Prayer Web
        </Link>
      </div>
      Developed by Adi Nugroho
    </div>
  )
}
