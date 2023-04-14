import { Minus, Plus } from 'phosphor-react'
import {
  IconContainer,
  QuantityInputContainerHome,
  QuantityInputContainerCheckout,
} from './styles'

export function QuantityInputHome() {
  return (
    <QuantityInputContainerHome>
      <IconContainer id="minus">
        <Minus size={14} weight="bold" />
      </IconContainer>
      <input type="number" readOnly value={1} />
      <IconContainer id="plus">
        <Plus size={14} weight="bold" />
      </IconContainer>
    </QuantityInputContainerHome>
  )
}

export function QuantityInputCheckout() {
  return (
    <QuantityInputContainerCheckout>
      <IconContainer id="minus">
        <Minus size={14} weight="bold" />
      </IconContainer>
      <input type="number" readOnly value={1} />
      <IconContainer id="plus">
        <Plus size={14} weight="bold" />
      </IconContainer>
    </QuantityInputContainerCheckout>
  )
}
