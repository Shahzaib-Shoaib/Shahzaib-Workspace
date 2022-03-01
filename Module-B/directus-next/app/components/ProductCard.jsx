import React from 'react'
const assetsUrl = process.env.NEXT_PUBLIC_ASSETS_URL

export default function ProductCard({ image, product_name, price, category }) {
  return (
    <div className="my-2 max-w-xs overflow-hidden rounded shadow-lg">
      <img
        className="w-full"
        src={`${assetsUrl}/${image}`}
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4">
        <div className="mb-2 text-xl font-bold">{product_name}</div>
        <p className="text-grey-darker text-base">
          {price} = {category}
        </p>
      </div>
    </div>
  )
}
