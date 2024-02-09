import React from 'react'

const FormInput = ({ type, name, value, onChange }) => {
  return <input type={type} name={name} value={value} onChange={onChange} />
}

export default FormInput
