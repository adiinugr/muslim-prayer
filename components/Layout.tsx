import React, { ReactNode, useState } from "react"
import Head from "next/head"
import Header from "./parts/Header"
import Sidebar from "./parts/Sidebar"
import Footer from "./parts/Footer"

type Props = { headTitle?: string; headDesc?: string; children: ReactNode }

export default function Layout({ headTitle, headDesc, children }: Props) {
  const [openSidebar, setOpenSidebar] = useState(false)

  return (
    <>
      <Head>
        <title>{headTitle}</title>
        <meta name="description" content={headDesc} key="desc" />
      </Head>
      <div className="overflow-hidden relative">
        <Header setOpenSidebar={setOpenSidebar} />
        <Sidebar openSidebar={openSidebar} />
        <main className="pt-header-height bg-white">
          <section className="container mx-auto">{children}</section>
        </main>
        <Footer />
      </div>
    </>
  )
}
