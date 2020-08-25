import React, { useState } from 'react'
import Link from 'next/link'

const Home = (props) => {

  const [state, setState] = useState({
    cotacao: '',
    quantidade: ''
  })

  const coletar = evt => {
    const valores = evt.target.value
    const key = evt.target.name
    setState(old => ({
      ...old,
      [key]: valores
    }))
  }
  const Pagina1 = props => {
    return (
      <div id='divhome'>
        <form name='formuser' method='GET' action='/resultado'>
          <input type='number' value={props.dataCotJson.value[0].cotacaoVenda} onChange={coletar} required name='cotacao' id='cotacao' placeholder='Cotação do dólar'></input><br />
          <input type='number' value={state.quantidade} onChange={coletar} required name='quantidade' id='quantidade' placeholder='Quantidade de dólares'></input><br />
          <Link href={{ pathname: '/resultado', query: { cotacao: props.dataCotJson.value[0].cotacaoVenda, quantidade: state.quantidade } }}><a><button type='submit'>Converter!</button></a></Link>
        </form>
      </div >
    )
  }
  const Pagina2 = props => {
    return (
      <div id='divhome'>
        <form name='formuser' method='GET' action='/resultado'>
          <input type='number' value={props.dataCotJson2.value[0].cotacaoVenda} onChange={coletar} required name='cotacao' id='cotacao' placeholder='Cotação do dólar'></input><br />
          <input type='number' value={state.quantidade} onChange={coletar} required name='quantidade' id='quantidade' placeholder='Quantidade de dólares'></input><br />
          <Link href={{ pathname: '/resultado', query: { cotacao: props.dataCotJson2.value[0].cotacaoVenda, quantidade: state.quantidade } }}><a><button type='submit'>Converter!</button></a></Link>
        </form>
      </div >
    )
  }

  if (props.dataCotJson.value[0] === undefined) {
    return Pagina2(props)
  } else {
    return Pagina1(props)
  }

}

export async function getServerSideProps(context) {
  const getToday = () => {
    const today = new Date()
    return (today.getMonth() + 1) + '-' + today.getDate() + '-' + today.getFullYear()
  }
  const getYesterday = () => {
    const today = new Date()
    return (today.getMonth() + 1) + '-' + (today.getDate() - 1) + '-' + today.getFullYear()
  }

  const data = getToday()

  const dataCot = await fetch(`https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao=%27${data}%27&$top=100&$format=json&$select=cotacaoCompra,cotacaoVenda,dataHoraCotacao`)
  const dataCotJson = await dataCot.json()

  const data2 = getYesterday()

  const dataCot2 = await fetch(`https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao=%27${data2}%27&$top=100&$format=json&$select=cotacaoCompra,cotacaoVenda,dataHoraCotacao`)
  const dataCotJson2 = await dataCot2.json()



  return {
    props: {
      dataCotJson,
      dataCotJson2
    }
  }

}
export default Home