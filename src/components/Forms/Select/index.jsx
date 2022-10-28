import React from 'react'
import Label from '../Label'
import { useCountry } from '../api/fetchApi'
import Select from 'react-select'

export const SelectCity = (label) => {
  const city = useCountry('city')

  return (
    <div className="mb-6">
      <Label label={label} />
      <div className="inline-block relative w-64">
        <Select
          isMulti
          options={city}
          getOptionValue={(option) => option.code}
          getOptionLabel={(option) => option.name}
        />
      </div>
    </div>
  )
}

export const SelectCountry = (label) => {
  const country = useCountry('country')

  return (
    <div className="mb-6">
      <Label label={label} />
      <div className="inline-block relative w-64">
        <Select
          isMulti
          options={country}
          getOptionValue={(option) => option.code}
          getOptionLabel={(option) => option.name}
        />
      </div>
    </div>
  )
}
