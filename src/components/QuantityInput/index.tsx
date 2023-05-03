import { Minus, Plus } from 'phosphor-react'
import {
  IconContainer,
  QuantityInputContainerHome,
  QuantityInputContainerCheckout,
} from './styles'

// arrumar o tamanho pra ficar so em um
interface QuantityInputProps {
  quantity: number
  onIncrease: () => void
  onDecrease: () => void
}

export function QuantityInputHome({
  onIncrease,
  onDecrease,
  quantity,
}: QuantityInputProps) {
  return (
    <QuantityInputContainerHome>
      <IconContainer disabled={quantity <= 1} id="minus" onClick={onDecrease}>
        <Minus size={14} weight="bold" />
      </IconContainer>
      <input type="number" readOnly value={quantity} />
      <IconContainer id="plus" onClick={onIncrease}>
        <Plus size={14} weight="bold" />
      </IconContainer>
    </QuantityInputContainerHome>
  )
}

export function QuantityInputCheckout({
  onIncrease,
  onDecrease,
  quantity,
}: QuantityInputProps) {
  return (
    <QuantityInputContainerCheckout>
      <IconContainer disabled={quantity <= 1} id="minus" onClick={onDecrease}>
        <Minus size={14} weight="bold" />
      </IconContainer>
      <input type="number" readOnly value={quantity} />
      <IconContainer id="plus">
        <Plus size={14} weight="bold" onClick={onIncrease} />
      </IconContainer>
    </QuantityInputContainerCheckout>
  )
}
