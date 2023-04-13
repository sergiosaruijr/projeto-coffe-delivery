import { TitleCard } from '../../styles'
import {
  BorderCoffeeSelectionSContentContainer,
  CardCoffeeBorder,
  CoffeeSelectContainer,
  ImageCoffeeContainer,
  ValueDeliveryContainer,
  ValueItensContainer,
  ValueTotalContainer,
  ValuesContainer,
} from './styles'

export function CoffeeSelect() {
  return (
    // <h1>Cafés selecionados</h1>
    <BorderCoffeeSelectionSContentContainer>
      <TitleCard>Cafés selecionados</TitleCard>
      <CoffeeSelectContainer>
        {/* arrumar para ser um componente separado */}
        <CardCoffeeBorder></CardCoffeeBorder>
        <CardCoffeeBorder>
          <ImageCoffeeContainer></ImageCoffeeContainer>
          <p>Algo</p>
        </CardCoffeeBorder>
        <ValuesContainer>
          <ValueItensContainer>
            <p>Total de itens</p>
            <p>R$ 29,70</p>
          </ValueItensContainer>
          <ValueDeliveryContainer>
            <p>Entrega</p>
            <p>R$ 3,50</p>
          </ValueDeliveryContainer>
          <ValueTotalContainer>
            <p>Total</p>
            <p>R$ 33,20</p>
          </ValueTotalContainer>
        </ValuesContainer>
      </CoffeeSelectContainer>
    </BorderCoffeeSelectionSContentContainer>
  )
}
