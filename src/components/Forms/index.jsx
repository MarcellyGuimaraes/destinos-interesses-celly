import React from 'react'
import { label_input } from './api/api_dados'
import Input from './Input'
import { SelectCity, SelectCountry } from './Select'

const Form = () => {
  return (
    <form className="flex flex-col justify-center items-center">
      <h1 className="text-center text-blue-900 text-5xl font-bold m-10">
        Destinos de Interesses - Ally Hub
      </h1>
      <div className="bg-gray-100 shadow-md rounded px-8 pt-6 pb-8 mb-4 w-3/5 m-8">
        <h2 className="text-center text-blue-900 text-2xl font-semibold mb-10">
          Dados Pessoais
        </h2>
        {label_input.map((i) => (
          <Input label={i.label} type={i.type} id={i.id} key={i.id} />
        ))}
      </div>
      <div className="bg-gray-100 shadow-md rounded px-8 pt-6 pb-8 mb-4 w-3/5 m-8">
        <h2 className="text-center text-blue-900 text-2xl font-semibold mb-10">
          Destinos de Interesse
        </h2>
        <SelectCity label="Cidade" />
        <SelectCountry label="País" />
      </div>

      <button
        type="submit"
        className="w-1/5 m-10 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
      >
        Enviar
      </button>
    </form>
  )
}

export default Form
