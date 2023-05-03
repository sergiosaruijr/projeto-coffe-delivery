import { TitleCard } from '../../styles'
import {
  BorderCoffeeSelectionContentContainer,
  CoffeeSelectContainer,
} from './styles'
import { Values } from '../Values'
import { ButtonConfirm } from '../ButtonConfirm'
import { CoffeeCard } from '../CoffeeCard'
import { useCartContext } from '../../../../hooks/useCartContext'

export function CoffeeSelect() {
  const { cartItems } = useCartContext()

  return (
    // <h1>Cafés selecionados</h1>

    <BorderCoffeeSelectionContentContainer>
      <TitleCard>Cafés selecionados</TitleCard>
      <CoffeeSelectContainer>
        {cartItems.map((item) => (
          <CoffeeCard key={item.id} coffee={item} />
        ))}
        <Values />
        <ButtonConfirm />
      </CoffeeSelectContainer>
    </BorderCoffeeSelectionContentContainer>
  )
}
