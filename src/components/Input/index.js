import React from 'react'

import { InputContainer } from './styles';

function Input({value, onChange, onKeyPress}) {
  return (
    <InputContainer>
        <input value={value} onChange={onChange} placeholder="Digite a localidade" onKeyPress={onKeyPress} />
    </InputContainer>
  )
}

export default Input
