import { Minus, Plus } from 'phosphor-react'
import { IconContainer, QuantityInputContainer } from './styles'

export function QuantityInput() {
  return (
    <QuantityInputContainer>
      <IconContainer id="minus">
        <Minus size={14} weight="fill" />
      </IconContainer>
      <input type="number" readOnly value={1} />
      <IconContainer id="plus">
        <Plus size={14} weight="fill" />
      </IconContainer>
    </QuantityInputContainer>
  )
}
