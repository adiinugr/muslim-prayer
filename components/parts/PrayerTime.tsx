import Image from "next/image"
import React from "react"

type Props = {
  data: {
    id: number
    time: string
    iconUrl: string
    name: string
    isCurrentTime: boolean
  }[]
}

export default function PrayerTime({ data }: Props) {
  return (
    <ul className="grid grid-cols-2 lg:grid-cols-6 gap-4 mb-10">
      {data.map((data) => (
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
            className={`${data.isCurrentTime ? "svg-white" : ""}`}
          />
          <div>{data.name}</div>
        </li>
      ))}
    </ul>
  )
}
