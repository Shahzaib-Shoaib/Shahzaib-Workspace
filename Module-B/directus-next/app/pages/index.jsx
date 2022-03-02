import Head from 'next/head'
import Image from 'next/image'
import ProductCard from '../components/ProductCard'

import { useQuery } from 'react-query'
import { getHomePagePosts, getHomePageProducts } from '../queries/queries'

export default function Home() {
  const {
    data: products,

    isSuccess,
  } = useQuery('products', async () => await getHomePageProducts())

  console.log(products)

  return (
    <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <Head>
        <title>E-Commerce Site</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
        Latest products
      </h2>
      <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
        {isSuccess &&
          products.map((product) => (
            <ProductCard
              product_name={product.product_name}
              price={product.price}
              key={product.id}
              image={product.product_image.id}
              category={
                product.product_categories[0].categories_id.category_name
              }
            />
          ))}
      </div>
    </div>
  )
}
