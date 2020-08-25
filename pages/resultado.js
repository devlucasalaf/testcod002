import React from 'react'
import { useRouter } from 'next/router'

const Resultado = () => {
  const router = useRouter()
  const { cotacao, quantidade } = router.query
  return (
    <div id='resultdiv'>
      <p>{parseFloat(quantidade).toFixed(2)} dólares na cotação de {parseFloat(cotacao).toFixed(2)} é igual a: {parseFloat(quantidade * cotacao).toFixed(2)} reais.</p>
    </div>
  )
}

export default Resultado
