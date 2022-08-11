import '../styles/globals.css'
import type { AppProps } from 'next/app'
import MainNavigation from '../components/MainNavigation'


function MyApp({ Component, pageProps }: AppProps) {
  return(
<>
    <MainNavigation/>

   <Component {...pageProps} />
   </>
   )
}

export default MyApp
