import React from 'react'
import Input from './Input'
import Select from './Select'

const Form = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <Input
          label="Nome"
          type="text"
          placeholder="Digite seu nome"
          id="nome"
        />
        <Input
          label="Email"
          type="password"
          placeholder="Digite seu email"
          id="email"
        />
        <Input
          label="Telefone"
          type="text"
          placeholder="Digite seu telefone"
          id="telefone"
        />
        <Input label="Cpf" type="text" placeholder="Digite seu cpf" id="cpf" />

        <hr />

        <Select label="Cidade" />
        <Select label="País" />
      </form>
    </div>
  )
}

export default Form
