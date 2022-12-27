import '../styles/globals.css'

import Router from 'next/router'

import Head from 'next/head'

import nNProgress from 'nprogress'

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'

import Layout from '../Components/Layout/Layout'

function MyApp ({Component, pageProps}) {
  return (
    <>
      <Head>

      </Head>

      <ChakraProvider>
        <Layout>
          <Component {...pageProps}/>
        </Layout>
      </ChakraProvider>
    </>
  )
}

export default MyApp