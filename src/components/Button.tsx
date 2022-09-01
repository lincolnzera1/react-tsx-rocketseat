import React from 'react'
import { ButtonContainer, ButtonCor } from './Button.styles'

interface ButtonProps {
    cor?: ButtonCor;
    
}

export function Button ({cor = "primary"}: ButtonProps) {
  return <ButtonContainer cor={cor} >Enviar</ButtonContainer>

   
  
}