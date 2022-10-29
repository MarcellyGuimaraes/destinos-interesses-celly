import React from 'react'
import Label from '../Label'

const Input = (label, type = 'text', id) => {
  return (
    <div className="mb-6">
      <Label label={label} />
      <input
        id={id}
        type={type}
        required
        className="peer border border-slate-400 w-1/3 h-10"
      />

      <p className="invisible peer-invalid:visible text-blue-700 font-light">
        Este campo é obrigatório
      </p>
    </div>
  )
}

export default Input
