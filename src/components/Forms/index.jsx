import React from 'react'
import { label_input } from './api/api_dados'
import Input from './Input'
import { SelectCity, SelectCountry } from './Select'

const Form = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        {label_input.map((input) => (
          <Input
            label={input.label}
            type={input.type}
            placeholder={input.placeholder}
            id={input.id}
            key={input.id}
          />
        ))}
        <hr />

        <SelectCity label="Cidade" />
        <SelectCountry label="País" />
      </form>
    </div>
  )
}

export default Form
