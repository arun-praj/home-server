import '../styles/globals.css'
import '../styles/editor.css'
import '../styles/lock.css'
import Head from 'next/head'
function MyApp({ Component, pageProps }) {
   return (
      <div>
         <Head>
            <title>@Aaaarun</title>
            <meta
               name='description'
               content='Author: Arun Prajapati, Portfolio of Arun Prajapati, Length:2 pages'
            />
            <meta
               httpEquiv='Content-Type'
               content='text/html; charset=utf-8'
            />
            <meta
               httpEquiv='Content-Type'
               content='text/html; charset=ISO-8859-1'></meta>
            <link rel='icon' href='/favicon.ico' />
         </Head>
         <Component {...pageProps} />
      </div>
   )
}

export default MyApp
