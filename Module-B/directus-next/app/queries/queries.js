import fetchData from '../helpers/fetchData'
import {
  HomepagePostsQuery,
  HomepageProductsQuery,
  HomepageCategoriesQuery,
} from './HomePageQueries'

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

export const getHomePageCategories = async () => {
  const data = await fetchData(HomepageCategoriesQuery, {
    variables: {},
  })

  return data.data.categories
}

export const getHomePageFilteredProducts = async (categories) => {
  const data = await fetchData(HomepageFilteredProductsQuery, {
    variables: {
      categories,
    },
  })

  return data.data.products
}
