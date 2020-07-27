import React, { useState } from 'react'
import Link from 'next/link'

const Home = () => {

  const coletar = evt => {
    /*const quantidade1 = evt.target.value
    const cotacao1 = evt.target.value*/
    console.log(evt)

  }

  return (
    <div id='divhome'>
      <form name='formuser' method='GET' action='/resultado'>
        <input value='static' required id='cotacao' placeholder='Cotação do dólar'></input><br />
        <input value='alow' required id='quantidade' placeholder='Quantidade de dólares'></input><br />
        <button>Converter!</button>
      </form>
      <Link href={{ pathname: '/resultado', query: { nome: 10, valor: 5 } }}><a>Link!</a></Link>
    </div>
  )
}


export default Home




