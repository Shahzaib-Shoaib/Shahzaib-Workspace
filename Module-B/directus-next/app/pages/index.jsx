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
    <div className="mx-auto flex max-w-2xl flex-col items-center py-2">
      <Head>
        <title>E-Commerce Site</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {isSuccess &&
        products.map((product) => (
          <ProductCard
            product_name={product.product_name}
            price={product.price}
            key={product.id}
            image={product.product_image.id}
            category={product.product_categories[0].categories.id.category_name}
          />
        ))}
    </div>
  )
}
