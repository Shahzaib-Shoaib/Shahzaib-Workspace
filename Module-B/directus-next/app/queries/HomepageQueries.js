export const HomepagePostsQuery = `
    query getHomePagePosts {
        posts {
            id
            title
            slug
            featured_image {
                id
            }
            body
        }
    }
    
    `
export const HomepageProductsQuery = `
query HomepageProducts {
    products {
        id
        product_name
        price
        slug
        product_image {
            id
        }
        category {
            categories_id {
                id
                category_name
                slug
            }
        }
    }
}
    
    `

export const HomepageCategoriesQuery = `

query HomepageCategories {

    categories {
        id
        category_name
    }
}

 `

export const HomepageFilteredProductsQuery = `
 query HomepageProducts($categories: [Float]) {
     products(filter: { category: { categories_id: { id: {_in: $categories}} } }) {
         id
         product_name
         price
         slug
         product_image {
             id
         }
         category {
             categories_id {
                 id
                 category_name
                 slug
             }
         }
     }
 }
`
