import React from 'react'
import Label from '../Label'
import { useCountry } from '../api/fetchApi'

export const SelectCity = (label) => {
  const city = useCountry('city')

  return (
    <div className="mb-6">
      <Label label={label} />
      <div className="inline-block relative w-64">
        <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
          <option>Selecione a cidade</option>
          {city.map((item) => (
            <option key={item.id}>{item.name_ptbr}</option>
          ))}
        </select>
      </div>
    </div>
  )
}

export const SelectCountry = (label) => {
  const country = useCountry('country')
  console.log(country[0])

  return (
    <div className="mb-6">
      <Label label={label} />
      <div className="inline-block relative w-64">
        <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
          <option>Selecione o país</option>
          {country.map((item) => (
            <option key={item.code} value={item.name}>
              {item.name_ptbr}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}
