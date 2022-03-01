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
    query HomePageProducts {
       products {
           id
           product_name
           price 
           product_image {
               id
           }
           product_categories {
               categories_id {
                   id
                   category_name
               }
           }
       }
    }
    
    `
