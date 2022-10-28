import { useEffect, useState } from 'react'

export const useCountry = (ct) => {
  const [country, setCountry] = useState([])

  useEffect(() => {
    fetch(`https://amazon-api.sellead.com/${ct}`)
      .then((response) => response.json())
      .then((data) => setCountry(data))
  }, [ct])

  return country
}
