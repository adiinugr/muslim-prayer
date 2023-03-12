import Image from "next/image"
import Link from "next/link"
import React from "react"

import Layout from "@/components/Layout"
import Pagination from "@/components/utils/Pagination"

const currentCitiesOfCountryData: {
  id: number
  link: string
  name: string
}[] = [
  {
    id: 1,
    link: "/",
    name: "جنوب تانجيرانج"
  },
  {
    id: 2,
    link: "/",
    name: "بيكاسي"
  },
  {
    id: 3,
    link: "/",
    name: "تانجيرانج"
  },
  {
    id: 4,
    link: "/",
    name: "ديبوك"
  },
  {
    id: 5,
    link: "/",
    name: "بوجور"
  },
  {
    id: 6,
    link: "/",
    name: "هجوم"
  },
  {
    id: 7,
    link: "/",
    name: "سوكابومي"
  },
  {
    id: 8,
    link: "/",
    name: "سيليجون"
  }
]

type Props = {}

export default function PrayerTimesCities({}: Props) {
  return (
    <Layout headTitle="Prayer Times Cities">
      <div className="mt-16 p-10 rounded-3xl pattern mb-12">
        <h1 className="text-center text-4xl font-bold text-primary-600">
          مواقيت الصلاة في ابها
        </h1>
      </div>

      <div>
        <div className="mt-6 mb-10">
          <div className="pattern-2 rounded-3xl p-12 mb-4 text-center">
            <div className="text-cream text-3xl mb-3">الفجْر</div>
            <div className="text-white text-5xl lg:text-6xl font-bold mb-3">
              04:56:31
            </div>
            <div className="text-cream text-lg">الوقت المتبقي لأذان الفجْر</div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="title text-primary-600">مدن قريبة في إندونيسيا</h3>
        <p>
          مواقيت الصلاة اليوم في مدينة <span className="font-bold">ابها</span>
          تبداء الساعة <span className="font-bold">٥:٠٧ ص</span> بوقت صلاة الفجر
          وتنتهي الساعة <span className="font-bold">٧:٤٩ م</span> لصلاة العشاء.
          وبنسبة إلى عدد ساعات الصيام لهذا اليوم فأنها 13 ساعة و12 دقيقة.
        </p>
        <p>
          في الوقت الحالي الصلاة القادمة هي صلاة
          <span className="font-bold">العِشاء</span> حسب التوقيت المحلي في مدينة
          <span className="font-bold">ابها</span>، وسيتم تشغيل صوت الأذان
          تلقائيً لصلاة العِشاء عبر الموقع الإلكتروني الساعة
          <span className="font-bold">٧:٤٩ م</span>.
        </p>

        <div className="flex flex-col lg:flex-row gap-10 mt-12 text-justify">
          <div className="w-full lg:w-1/3">
            <table className="prayer-adzan-table table-auto w-full">
              <thead>
                <tr>
                  <th>الصلاة</th>
                  <th>وقت الأذان</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>صلاة الفجْر</td>
                  <td>٥:٠٧ ص</td>
                </tr>
                <tr>
                  <td>الشروقn</td>
                  <td>٦:٢٢ ص</td>
                </tr>
                <tr>
                  <td>صلاة الظُّهْر</td>
                  <td>١٢:٢٠ م</td>
                </tr>
                <tr>
                  <td>صلاة العَصر</td>
                  <td>٣:٤٣ م</td>
                </tr>
                <tr>
                  <td>صلاة المَغرب</td>
                  <td>٦:١٩ م</td>
                </tr>
                <tr>
                  <td>صلاة العِشاء</td>
                  <td>٧:٤٩ م</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="w-full lg:w-auto">
            <table className="prayer-details-table table-auto">
              <tbody>
                <tr>
                  <td>
                    <span>المكان : </span>السعودية, ابها
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>الصلاة القادمة :</span> صلاة العِشاء
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>ساعات الصيام :</span> 13 ساعة و 12 دقيقة
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>التاريخ :</span> 11 مارس 2023 ميلادي
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>هجري :</span> 19 شعبان 1444
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>الوقت الان : 7:47:09 PM</span> حسب التوقيت المحلي في
                    ابها
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>اليوم :</span> السبت
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>المنطقة الزمنية :</span> Asia/Riyadh
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="card mt-10 px-0 overflow-auto">
          <table className="w-full prayer-time-table table-auto">
            <thead>
              <tr>
                <th>2023 مارس</th>
                <th>الفجْر</th>
                <th>الشروق</th>
                <th>الظُّهْر</th>
                <th>العَصر</th>
                <th>المَغرب</th>
                <th>العِشاء</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>11 السبت</td>
                <td>5:07 AM</td>
                <td>6:22 AM</td>
                <td>12:20 PM</td>
                <td>3:43 PM</td>
                <td>6:19 PM</td>
                <td>7:49 PM</td>
              </tr>
              <tr>
                <td>12 الأحد</td>
                <td>5:07 AM</td>
                <td>6:21 AM</td>
                <td>12:20 PM</td>
                <td>3:43 PM</td>
                <td>6:19 PM</td>
                <td>7:49 PM</td>
              </tr>
              <tr>
                <td>13 الاثنين</td>
                <td>5:06 AM</td>
                <td>6:20 AM</td>
                <td>12:20 PM</td>
                <td>3:42 PM</td>
                <td>6:19 PM</td>
                <td>7:49 PM</td>
              </tr>
              <tr>
                <td>14 الثلاثاء</td>
                <td>5:05 AM</td>
                <td>6:19 AM</td>
                <td>12:19 PM</td>
                <td>3:42 PM</td>
                <td>6:19 PM</td>
                <td>7:49 PM</td>
              </tr>
              <tr>
                <td>15 الأربعاء</td>
                <td>5:04 AM</td>
                <td>6:19 AM</td>
                <td>12:19 PM</td>
                <td>3:42 PM</td>
                <td>6:20 PM</td>
                <td>7:50 PM</td>
              </tr>
              <tr>
                <td>16 الخميس</td>
                <td>5:03 AM</td>
                <td>6:18 AM</td>
                <td>12:19 PM</td>
                <td>3:42 PM</td>
                <td>6:20 PM</td>
                <td>7:50 PM</td>
              </tr>
              <tr>
                <td>17 الجمعة</td>
                <td>5:03 AM</td>
                <td>6:17 AM</td>
                <td>12:18 PM</td>
                <td>3:41 PM</td>
                <td>6:20 PM</td>
                <td>7:50 PM</td>
              </tr>
              <tr>
                <td>18 السبت</td>
                <td>5:02 AM</td>
                <td>6:16 AM</td>
                <td>12:18 PM</td>
                <td>3:41 PM</td>
                <td>6:20 PM</td>
                <td>7:50 PM</td>
              </tr>
              <tr>
                <td>19 الأحد</td>
                <td>5:01 AM</td>
                <td>6:15 AM</td>
                <td>12:18 PM</td>
                <td>3:41 PM</td>
                <td>6:21 PM</td>
                <td>7:51 PM</td>
              </tr>
              <tr>
                <td>20 الاثنين</td>
                <td>5:00 AM</td>
                <td>6:14 AM</td>
                <td>12:18 PM</td>
                <td>3:40 PM</td>
                <td>6:21 PM</td>
                <td>7:51 PM</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <Pagination itemsPerPage={4} data={currentCitiesOfCountryData} />
        </div>
      </div>
    </Layout>
  )
}
