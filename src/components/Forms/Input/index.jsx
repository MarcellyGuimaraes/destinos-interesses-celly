import React from 'react'
import Label from '../Label'

const Input = (label, placeholder = '', type = 'text', id) => {
  return (
    <div className="mb-6">
      <Label label={label} />
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id={id}
        type={type}
        placeholder={placeholder}
      />
    </div>
  )
}

export default Input
