import React from "react"
import Layout from "@/components/Layout"

type Props = {}

export default function TodayHijriDate({}: Props) {
  return (
    <Layout>
      <div className="mt-16 p-10 rounded-3xl pattern mb-12">
        <h1 className="text-center text-4xl font-bold text-primary-600">
          تاريخ اليوم هجري
        </h1>
      </div>

      <div>
        <h3 className="text-primary-600 font-semibold text-lg">
          ماهوا تاريخ اليوم هجري؟
        </h3>
        <p>
          اليوم الأحد، ١٢ مارس ٢٠٢٣ م حسب التاريخ الهجري فان التاريخ هو{" "}
          <strong>20 شعبان 1444</strong>.
        </p>

        <table className="hijri-date-table w-full mt-4">
          <thead>
            <tr>
              <th>التاريخ</th>
              <th>القيمة</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>تاريخ اليوم هجري</td>
              <td>
                <strong>20 شعبان 1444</strong>
              </td>
            </tr>
            <tr>
              <td>تاريخ اليوم هجري ارقام</td>
              <td>20/8/1444</td>
            </tr>
            <tr>
              <td>هل السنة كبيسة</td>
              <td>لا ليست سنة كبيسة</td>
            </tr>
            <tr>
              <td>ميلادي</td>
              <td>الأحد، ١٢ مارس ٢٠٢٣ م</td>
            </tr>
            <tr>
              <td>التاريخ شمسي</td>
              <td>21 الحوت 1401</td>
            </tr>
            <tr>
              <td>اليوم</td>
              <td>الأحد</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-20">
        <h3 className="text-primary-600 font-semibold text-lg">
          التقويم الهجري
        </h3>
        <table className="hijri-calendar-table w-full mt-4">
          <thead>
            <tr>
              <th>التاريخ</th>
              <th>هجري</th>
            </tr>
          </thead>
          <tbody>
            {" "}
            <tr>
              <td>الأحد، ١٢ مارس ٢٠٢٣ م</td>
              <td>
                <strong>20 شعبان 1444</strong>
              </td>
            </tr>{" "}
            <tr>
              <td>الاثنين، ١٣ مارس ٢٠٢٣ م</td>
              <td>
                <strong>21 شعبان 1444</strong>
              </td>
            </tr>{" "}
            <tr>
              <td>الثلاثاء، ١٤ مارس ٢٠٢٣ م</td>
              <td>
                <strong>22 شعبان 1444</strong>
              </td>
            </tr>{" "}
            <tr>
              <td>الأربعاء، ١٥ مارس ٢٠٢٣ م</td>
              <td>
                <strong>23 شعبان 1444</strong>
              </td>
            </tr>{" "}
            <tr>
              <td>الخميس، ١٦ مارس ٢٠٢٣ م</td>
              <td>
                <strong>24 شعبان 1444</strong>
              </td>
            </tr>{" "}
            <tr>
              <td>الجمعة، ١٧ مارس ٢٠٢٣ م</td>
              <td>
                <strong>25 شعبان 1444</strong>
              </td>
            </tr>{" "}
            <tr>
              <td>السبت، ١٨ مارس ٢٠٢٣ م</td>
              <td>
                <strong>26 شعبان 1444</strong>
              </td>
            </tr>{" "}
            <tr>
              <td>الأحد، ١٩ مارس ٢٠٢٣ م</td>
              <td>
                <strong>27 شعبان 1444</strong>
              </td>
            </tr>{" "}
            <tr>
              <td>الاثنين، ٢٠ مارس ٢٠٢٣ م</td>
              <td>
                <strong>28 شعبان 1444</strong>
              </td>
            </tr>{" "}
            <tr>
              <td>الثلاثاء، ٢١ مارس ٢٠٢٣ م</td>
              <td>
                <strong>29 شعبان 1444</strong>
              </td>
            </tr>{" "}
            <tr>
              <td>الأربعاء، ٢٢ مارس ٢٠٢٣ م</td>
              <td>
                <strong>30 شعبان 1444</strong>
              </td>
            </tr>{" "}
            <tr>
              <td>الخميس، ٢٣ مارس ٢٠٢٣ م</td>
              <td>
                <strong>1 رمضان 1444</strong>
              </td>
            </tr>{" "}
            <tr>
              <td>الجمعة، ٢٤ مارس ٢٠٢٣ م</td>
              <td>
                <strong>2 رمضان 1444</strong>
              </td>
            </tr>{" "}
            <tr>
              <td>السبت، ٢٥ مارس ٢٠٢٣ م</td>
              <td>
                <strong>3 رمضان 1444</strong>
              </td>
            </tr>{" "}
            <tr>
              <td>الأحد، ٢٦ مارس ٢٠٢٣ م</td>
              <td>
                <strong>4 رمضان 1444</strong>
              </td>
            </tr>{" "}
            <tr>
              <td>الاثنين، ٢٧ مارس ٢٠٢٣ م</td>
              <td>
                <strong>5 رمضان 1444</strong>
              </td>
            </tr>{" "}
            <tr>
              <td>الثلاثاء، ٢٨ مارس ٢٠٢٣ م</td>
              <td>
                <strong>6 رمضان 1444</strong>
              </td>
            </tr>{" "}
            <tr>
              <td>الأربعاء، ٢٩ مارس ٢٠٢٣ م</td>
              <td>
                <strong>7 رمضان 1444</strong>
              </td>
            </tr>{" "}
            <tr>
              <td>الخميس، ٣٠ مارس ٢٠٢٣ م</td>
              <td>
                <strong>8 رمضان 1444</strong>
              </td>
            </tr>{" "}
            <tr>
              <td>الجمعة، ٣١ مارس ٢٠٢٣ م</td>
              <td>
                <strong>9 رمضان 1444</strong>
              </td>
            </tr>{" "}
            <tr>
              <td>السبت، ١ أبريل ٢٠٢٣ م</td>
              <td>
                <strong>10 رمضان 1444</strong>
              </td>
            </tr>{" "}
            <tr>
              <td>الأحد، ٢ أبريل ٢٠٢٣ م</td>
              <td>
                <strong>11 رمضان 1444</strong>
              </td>
            </tr>{" "}
            <tr>
              <td>الاثنين، ٣ أبريل ٢٠٢٣ م</td>
              <td>
                <strong>12 رمضان 1444</strong>
              </td>
            </tr>{" "}
            <tr>
              <td>الثلاثاء، ٤ أبريل ٢٠٢٣ م</td>
              <td>
                <strong>13 رمضان 1444</strong>
              </td>
            </tr>{" "}
            <tr>
              <td>الأربعاء، ٥ أبريل ٢٠٢٣ م</td>
              <td>
                <strong>14 رمضان 1444</strong>
              </td>
            </tr>{" "}
            <tr>
              <td>الخميس، ٦ أبريل ٢٠٢٣ م</td>
              <td>
                <strong>15 رمضان 1444</strong>
              </td>
            </tr>{" "}
            <tr>
              <td>الجمعة، ٧ أبريل ٢٠٢٣ م</td>
              <td>
                <strong>16 رمضان 1444</strong>
              </td>
            </tr>{" "}
            <tr>
              <td>السبت، ٨ أبريل ٢٠٢٣ م</td>
              <td>
                <strong>17 رمضان 1444</strong>
              </td>
            </tr>{" "}
            <tr>
              <td>الأحد، ٩ أبريل ٢٠٢٣ م</td>
              <td>
                <strong>18 رمضان 1444</strong>
              </td>
            </tr>{" "}
            <tr>
              <td>الاثنين، ١٠ أبريل ٢٠٢٣ م</td>
              <td>
                <strong>19 رمضان 1444</strong>
              </td>
            </tr>{" "}
            <tr>
              <td>الثلاثاء، ١١ أبريل ٢٠٢٣ م</td>
              <td>
                <strong>20 رمضان 1444</strong>
              </td>
            </tr>{" "}
          </tbody>
        </table>
      </div>
    </Layout>
  )
}
