import { TitleCard } from '../../styles'
import {
  BorderCoffeeSelectionSContentContainer,
  CoffeeSelectContainer,
} from './styles'

export function CoffeeSelect() {
  return (
    // <h1>Cafés selecionados</h1>
    <BorderCoffeeSelectionSContentContainer>
      <TitleCard>Cafés selecionados</TitleCard>
      <CoffeeSelectContainer>
        <p>Algo</p>
      </CoffeeSelectContainer>
    </BorderCoffeeSelectionSContentContainer>
  )
}
