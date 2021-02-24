import React, { useEffect, useState } from 'react'
import axios from 'axios'

export function App() {
  const [currencyResults, setCurrencyResults] = useState({})
  const [amount, setsAmount] = useState(1)

  useEffect(async () => {
    const resp = await axios.get(
      'https://api.ratesapi.io/api/2010-01-12?base=USD '
    )
    setCurrencyResults(resp)
  }, [])

  return <></>
}
