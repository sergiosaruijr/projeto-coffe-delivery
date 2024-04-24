import { ButtonHTMLAttributes } from 'react'
import { ButtonContainer } from './styles'

interface PayButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string | number
}
export function PayButton({ text, ...rest }: PayButtonProps) {
  return <ButtonContainer {...rest}>{text}</ButtonContainer>
}
