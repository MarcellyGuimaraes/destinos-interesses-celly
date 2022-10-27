import React from 'react'
import Label from '../Label'
import { useCountry } from './fetchApi'

const Select = (label) => {
  const country = useCountry()
  return (
    <div className="mb-6">
      <Label label={label} />
      <div className="inline-block relative w-64">
        <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
          {country.map((item) => (
            <option key={item.code}>{item.name}</option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default Select
