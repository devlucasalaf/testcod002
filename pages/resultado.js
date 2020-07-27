import React from 'react'
import { useRouter } from 'next/router'

const Resultado = () => {
  const router = useRouter()
  console.log(router)
  return (
    <div id='resultdiv'>
      <p>{parseFloat(router.query.nome).toFixed(2)} na cotação de {parseFloat(router.query.valor).toFixed(2)} é igual a: {parseFloat(router.query.nome * router.query.valor).toFixed(2)}</p>
    </div>
  )
}

export default Resultado
