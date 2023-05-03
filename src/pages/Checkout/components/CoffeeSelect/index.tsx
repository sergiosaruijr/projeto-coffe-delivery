import { TitleCard } from '../../styles'
import {
  BorderCoffeeSelectionContentContainer,
  CoffeeSelectContainer,
} from './styles'
import { Values } from '../Values'
import { ButtonConfirm } from '../ButtonConfirm'
import { CoffeeCard } from '../CoffeeCard'

export function CoffeeSelect() {
  return (
    // <h1>Cafés selecionados</h1>

    <BorderCoffeeSelectionContentContainer>
      <TitleCard>Cafés selecionados</TitleCard>
      <CoffeeSelectContainer>
        <CoffeeCard />
        <CoffeeCard />
        <Values />
        <ButtonConfirm />
      </CoffeeSelectContainer>
    </BorderCoffeeSelectionContentContainer>
  )
}
