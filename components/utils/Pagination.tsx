import Link from "next/link"
import React, { useState } from "react"
import ReactPaginate from "react-paginate"

type ItemsProps = {
  currentItems: {
    id: number
    link: string
    name: string
  }[]
}

function Items({ currentItems }: ItemsProps) {
  return (
    <div className="card border border-gray-200 rounded-3xl bg-white">
      <h3 className="title text-primary-600">مواقيت الصلاة لدول العالم</h3>
      <ul className="grid grid-cols-4 gap-6 text-justify">
        {currentItems &&
          currentItems.map((item) => (
            <li className="text-justify" key={item.id}>
              <Link className="link-list" href={item.link}>
                {item.name}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  )
}

export default function Pagination(props: {
  itemsPerPage: number
  data: {
    id: number
    link: string
    name: string
  }[]
}) {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0)

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + props.itemsPerPage
  console.log(`Loading items from ${itemOffset} to ${endOffset}`)
  const currentItems = props.data.slice(itemOffset, endOffset)
  const pageCount = Math.ceil(props.data.length / props.itemsPerPage)

  // Invoke when user click to request another page.
  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * props.itemsPerPage) % props.data.length
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    )
    setItemOffset(newOffset)
  }

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="Next"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="Prev"
        containerClassName="flex items-center justify-center gap-2"
        pageClassName="pagination-button"
        nextClassName="pagination-button"
        previousClassName="pagination-button"
        activeClassName="pagination-button-active"
        disabledClassName="pagination-button-disable"
        disabledLinkClassName="cursor-not-allowed"
        // renderOnZeroPageCount={null}
      />
    </>
  )
}
