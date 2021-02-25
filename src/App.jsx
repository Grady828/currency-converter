import React, { useEffect, useState } from 'react'
import axios from 'axios'

export function App() {
  const [currencyResults, setCurrencyResults] = useState({ rates: [] })
  const [amount, setAmount] = useState(1)

  // @ts-ignore
  useEffect(async () => {
    const resp = await axios.get(
      'https://api.ratesapi.io/api/latest?base=USD  '
    )
    setCurrencyResults(resp.data)
  }, [])

  return (
    <>
      <ul>
        {Object.entries(
          // @ts-ignore
          currencyResults.rates
        ).map(([currencyCode, currencyDetails]) => {
          return (
            <li key={currencyCode}>
              {currencyCode} : {currencyDetails}
            </li>
          )
        })}
      </ul>
      <input
        type="number"
        onChange={(event) => setAmount(event.target.value)}
        value={amount}
      />
    </>
  )
}
