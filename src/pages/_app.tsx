import '../styles/globals.css'
import type { AppProps } from 'next/app'
import * as React from 'react'
import { Reset } from 'styled-reset'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Reset />
      <Component {...pageProps} />
      <ToastContainer position='bottom-right' theme='dark' />
    </>
  )
}

export default MyApp
