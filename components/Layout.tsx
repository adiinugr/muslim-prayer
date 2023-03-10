import React, { ReactNode, useState } from "react"
import Head from "next/head"
import Header from "./parts/Header"
import Sidebar from "./parts/Sidebar"
import Footer from "./parts/Footer"

type Props = { children: ReactNode }

export default function Layout({ children }: Props) {
  const [openSidebar, setOpenSidebar] = useState(false)

  return (
    <>
      <Head>
        <title>Title of The Page</title>
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
