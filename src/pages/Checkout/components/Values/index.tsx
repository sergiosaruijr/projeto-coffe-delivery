import {
  ValueItensAndDeliveryContainer,
  ValueTotalContainer,
  ValuesContainer,
} from './styles'

export function Values() {
  return (
    <ValuesContainer>
      <ValueItensAndDeliveryContainer>
        <p>Total de itens</p>
        R$ 29,70
      </ValueItensAndDeliveryContainer>
      <ValueItensAndDeliveryContainer>
        <p>Entrega</p>
        R$ 3,50
      </ValueItensAndDeliveryContainer>
      <ValueTotalContainer>
        <p>Total</p>
        <p>R$ 33,20</p>
      </ValueTotalContainer>
    </ValuesContainer>
  )
}
