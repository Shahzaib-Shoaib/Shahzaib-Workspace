import fetchData from '../helpers/fetchData'
import { HomepagePostsQuery, HomepageProductsQuery } from './HomePageQueries'

export const getHomePagePosts = async () => {
  const data = await fetchData(HomepagePostsQuery, {
    variables: {},
  })

  return data.data.posts
}

export const getHomePageProducts = async () => {
  const data = await fetchData(HomepageProductsQuery, {
    variables: {},
  })

  return data.data.products
}
