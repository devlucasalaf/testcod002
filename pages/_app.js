import React from 'react'
import Header from '../components/Header'
import '../css/styles.css'

const MyApp = ({ Component, pageProps }) => {
  return (

    <div>
      <Header></Header>
      <Component {...pageProps}></Component>
    </div>
  )
}

export default MyApp