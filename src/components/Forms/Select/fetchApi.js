import { useEffect, useState } from 'react'

export const useCountry = (ct) => {
  const [country, setCountry] = useState([])

  useEffect(() => {
    fetch(`https://amazon-api.sellead.com/country`)
      .then((response) => response.json())
      .then((data) => setCountry(data))
  }, [])

  return country
}
