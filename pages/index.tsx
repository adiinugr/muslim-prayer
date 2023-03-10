import React from "react"
import Image from "next/image"
import Link from "next/link"
import { MdLocationOn } from "react-icons/md"
import { HiOutlineArrowLeft } from "react-icons/hi"

import Layout from "@/components/Layout"

type Props = {}

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

const nearbyCitiesData: {
  id: number
  link: string
  name: string
  distance: string
}[] = [
  {
    id: 1,
    link: "/",
    name: "جنوب تانجيرانج",
    distance: "10.98km"
  },
  {
    id: 2,
    link: "/",
    name: "بيكاسي",
    distance: "12.8km"
  },
  {
    id: 3,
    link: "/",
    name: "تانجيرانج",
    distance: "13.42km"
  },
  {
    id: 4,
    link: "/",
    name: "ديبوك",
    distance: "14.93km"
  },
  {
    id: 5,
    link: "/",
    name: "بوجور",
    distance: "29.58km"
  },
  {
    id: 6,
    link: "/",
    name: "هجوم",
    distance: "46.65km"
  },
  {
    id: 7,
    link: "/",
    name: "سوكابومي",
    distance: "52.07km"
  },
  {
    id: 8,
    link: "/",
    name: "سيليجون",
    distance: "55.92km"
  }
]

const worldPrayerData: {
  id: number
  link: string
  bgPosition: string
  name: string
}[] = [
  {
    id: 1,
    link: "/",
    bgPosition: "0 76.033058%",
    name: "مواقيت الصلاة السعودية"
  },
  {
    id: 2,
    link: "/",
    bgPosition: "0 25.619835%",
    name: "مواقيت الصلاة الإمارات"
  },
  {
    id: 3,
    link: "/",
    bgPosition: "0 98.347107%",
    name: "مواقيت الصلاة اليمن"
  },
  {
    id: 4,
    link: "/",
    bgPosition: "0",
    name: "مواقيت الصلاة فلسطين"
  },
  {
    id: 5,
    link: "/",
    bgPosition: "0 53.305785%",
    name: "مواقيت الصلاة ليبيا"
  },
  {
    id: 6,
    link: "/",
    bgPosition: "0 53.719008%",
    name: "مواقيت الصلاة المغرب"
  },
  {
    id: 7,
    link: "/",
    bgPosition: "0 88.016529%",
    name: "مواقيت الصلاة تونس"
  },
  {
    id: 8,
    link: "/",
    bgPosition: "0 24.380165%",
    name: "مواقيت الصلاة الجزائر"
  }
]

const worldCitiesData: {
  id: number
  link: string
  name: string
}[] = [
  {
    id: 1,
    link: "/",
    name: "الرياض"
  },
  {
    id: 2,
    link: "/",
    name: "جدة"
  },

  {
    id: 3,
    link: "/",
    name: "القاهرة"
  },
  {
    id: 4,
    link: "/",
    name: "الأسكندرية"
  },
  {
    id: 5,
    link: "/",
    name: "صنعاء"
  },
  {
    id: 6,
    link: "/",
    name: "الدار البيضاء"
  },
  {
    id: 7,
    link: "/",
    name: "الجزائر"
  },
  {
    id: 8,
    link: "/",
    name: "بغداد"
  },
  {
    id: 9,
    link: "/",
    name: "الخرطوم"
  },
  {
    id: 10,
    link: "/",
    name: "عمان"
  },
  {
    id: 11,
    link: "/",
    name: "أنقرة"
  },
  {
    id: 12,
    link: "/",
    name: "إسطنبول"
  },
  {
    id: 13,
    link: "/",
    name: "سورابايا"
  },
  {
    id: 14,
    link: "/",
    name: "باندونغ"
  },
  {
    id: 15,
    link: "/",
    name: "ميدان"
  },
  {
    id: 16,
    link: "/",
    name: "سيمارانج"
  }
]

export default function Home({}: Props) {
  return (
    <Layout>
      <div className="hero-height py-12">
        <div className="h-full py-16 px-24 pattern rounded-[2rem] flex justify-between items-center">
          <div className="w-1/2">
            <Image
              src="/images/hero-image.svg"
              alt="muslim prayer"
              width={280}
              height={380}
            />
          </div>
          <div className="w-1/2">
            <h1 className="text-3xl text-primary-600 font-bold mb-4">
              مواقيت الصلاة
            </h1>
            <form action="">
              <input
                className="px-5 py-2 w-full border-2 border-gray-200 text-lg rounded-3xl mb-4 focus:outline-2 focus:outline-primary-500"
                placeholder="أسم المدينة ..."
                type="text"
              />
              <div className="flex gap-4 text-justify">
                <button className="btn-primary" type="submit">
                  بحث !
                </button>
                <button className="btn-secondary" type="button">
                  جد مكاني !
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="text-justify">
          <h2 className="mb-2">
            <Link href="/" className="text-2xl text-primary-600 font-bold ">
              مواقيت الصلاة والأذان في إندونيسيا, سورابايا
            </Link>
          </h2>
          <div className="text-green-500 text-sm mb-2">
            <span>إندونيسيا</span> › <span>سورابايا</span>
          </div>
          <p>الاثنين 14 شعبان 1444 هجرية الموافق 2023/03/06</p>
        </div>
        <div className="mt-6 mb-10">
          <div className="pattern-2 rounded-3xl p-12 mb-4">
            <div className="text-cream text-3xl mb-3">الفجْر</div>
            <div className="text-white text-6xl font-bold mb-3">04:56:31</div>
            <div className="text-cream text-lg">الوقت المتبقي لأذان الفجْر</div>
          </div>
          <div>
            <time className="text-2xl text-gray-600 font-bold mb-2">
              11:29:33 PM
            </time>
            <div className="summary">الوقت الأن في سورابايا</div>
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
            كراتشي - جامعة العلوم الإسلامية{" "}
          </div>
          <div>
            <b>طريقة حساب العصر:</b>
            <br /> شافعي، حنبلي، مالكي{" "}
          </div>
          <div>
            <b>خط الطول/العرض:</b>
            <br /> -7.26424, 112.745579{" "}
          </div>
          <div>
            <b>المنطقة الزمنية:</b>
            <br /> Asia/Jakarta (UTC+7)
          </div>
        </div>
        <div className="mt-8 text-justify">
          <button className="btn-secondary flex justify-center items-center gap-2">
            <Image
              src="/icons/settings.svg"
              width="15"
              height="15"
              alt="icon"
            />{" "}
            تغيير الإعدادات
          </button>
        </div>
      </div>

      <div className="card border border-gray-200 rounded-3xl bg-white">
        <h3 className="title text-primary-600">مدن قريبة في إندونيسيا</h3>
        <ul className="grid grid-cols-4 gap-6 mb-8">
          {nearbyCitiesData.map((data) => (
            <li className="text-justify" key={data.id}>
              <Link className="link-list" href={data.link}>
                <MdLocationOn />
                <p className="mx-2">{data.name}</p>
                <p className="text-gray-100 text-sm">{data.distance}</p>
              </Link>
            </li>
          ))}
        </ul>
        <div className="btn-link justify-end">
          <Link href="/">المزيد من مدن إندونيسيا.</Link>
          <HiOutlineArrowLeft size={14} />
        </div>
      </div>

      <div className="card mb-0 todayHadith">
        <h3 className="title mb-2 text-primary-600">حديث اليوم</h3>
        <p className="text-justify text-sm text-gray-600 mb-2">
          <b>المصدر:</b> صحيح البخاري,2-كتاب الإيمان , رقم الحديث 10
        </p>
        <blockquote className="text-justify text-lg bg-primary-200 py-6 pl-8 pr-16 border-r-8 border-primary-500 rounded-lg">
          <span className="arabic_sanad arabic">
            حَدَّثَنَا آدَمُ بْنُ أَبِي إِيَاسٍ، قَالَ حَدَّثَنَا شُعْبَةُ، عَنْ
            عَبْدِ اللَّهِ بْنِ أَبِي السَّفَرِ، وَإِسْمَاعِيلَ، عَنِ
            الشَّعْبِيِّ، عَنْ عَبْدِ اللَّهِ بْنِ عَمْرٍو ـ رضى الله عنهما ـ
            عَنِ النَّبِيِّ صلى الله عليه وسلم قَالَ
          </span>{" "}
          <span className="arabic_text_details arabic">
            الْمُسْلِمُ مَنْ سَلِمَ الْمُسْلِمُونَ مِنْ لِسَانِهِ وَيَدِهِ،
            وَالْمُهَاجِرُ مَنْ هَجَرَ مَا نَهَى اللَّهُ عَنْهُ
          </span>
          <span className="arabic_sanad arabic">
            . قَالَ أَبُو عَبْدِ اللَّهِ وَقَالَ أَبُو مُعَاوِيَةَ حَدَّثَنَا
            دَاوُدُ عَنْ عَامِرٍ قَالَ سَمِعْتُ عَبْدَ اللَّهِ عَنِ النَّبِيِّ
            صلى الله عليه وسلم. وَقَالَ عَبْدُ الأَعْلَى عَنْ دَاوُدَ عَنْ
            عَامِرٍ عَنْ عَبْدِ اللَّهِ عَنِ النَّبِيِّ صلى الله عليه وسلم.
          </span>{" "}
          <p className="mt-4 font-bold">رسول الله محمد (ﷺ)</p>
        </blockquote>
      </div>

      <div className="card">
        <h3 className="title mb-2 text-primary-600">
          دعاء اليوم (أذكار الصباح)
        </h3>
        <div className="text-justify text-sm text-green-700 mb-2">
          <span>الدعاء والأذكار</span> › <span>إحياء الذكرى اليومي</span>
        </div>
        <div className="text-justify text-lg bg-primary-200 py-6 pl-8 pr-10 border-r-8 border-primary-500 mb-2 rounded-lg">
          اللَّهُمَّ عَافِنِي فِي بَدَنِي اللَّهُمَّ عَافِنِي فِي سَمْعِي
          اللَّهُمَّ عَافِنِي فِي بَصَرِي لاَ إِلَهَ إِلاَّ أَنْتَ. اللَّهُمَّ
          إِنِّي أَعُوذُ بِكَ مِنَ الْكُفْرِ وَالْفَقْرِ اللَّهُمَّ إِنِّي
          أَعُوذُ بِكَ مِنْ عَذَابِ الْقَبْرِ لاَ إِلَهَ إِلاَّ أَنْتَ
        </div>
        <div className="text-justify">
          <b>فضل هذا الدُعاء:</b>
          <ul className="list-disc list-inside">
            <li>قُل هذا الدُعاء ثلاث مرات</li>
          </ul>
        </div>
      </div>

      <div className="card border border-gray-200 rounded-3xl bg-white">
        <h3 className="title text-primary-600">مواقيت الصلاة لدول العالم</h3>
        <ul className="grid grid-cols-4 gap-6 text-justify">
          {worldPrayerData.map((data) => (
            <li className="text-justify" key={data.id}>
              <Link className="link-list" href={data.link}>
                <span
                  className="flag ml-2"
                  style={{ backgroundPosition: data.bgPosition }}
                ></span>{" "}
                {data.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="card border border-gray-200 rounded-3xl bg-white">
        <ul className="nearby-cities grid grid-cols-4 gap-4 mb-4">
          {worldCitiesData.map((data) => (
            <li className="text-justify" key={data.id}>
              <Link className="link-list" href={data.link}>
                {data.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  )
}
