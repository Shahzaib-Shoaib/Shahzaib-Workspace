import Head from 'next/head'
import Image from 'next/image'
import PostCard from '../components/PostCard'

import { useQuery } from 'react-query'
import { getHomePagePosts } from '../queries/queries'

export default function Home() {
  const {
    status,
    data: posts,
    error,
    isFetching,
    isSuccess,
  } = useQuery('posts', async () => await getHomePagePosts())

  console.log(posts)

  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {isSuccess &&
        posts.map((post) => (
          <PostCard
            title={post.title}
            body={post.body}
            key={post.id}
            image={post.featured_image.id}
          />
        ))}
    </div>
  )
}
