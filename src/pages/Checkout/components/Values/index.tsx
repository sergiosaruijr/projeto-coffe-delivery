import { formatPrice } from '../../../../components/Format/formatPrice'
import { useCartContext } from '../../../../hooks/useCartContext'
import {
  ValueItensAndDeliveryContainer,
  ValueTotalContainer,
  ValuesContainer,
} from './styles'

const DeliveryPrice = 3.5

export function Values() {
  const { cartItemsTotal } = useCartContext()
  const cartTotal = DeliveryPrice + cartItemsTotal

  const formattedItemsTotal = formatPrice(cartItemsTotal)
  const formattedTotal = formatPrice(cartTotal)
  const formatDelivery = formatPrice(DeliveryPrice)
  return (
    <ValuesContainer>
      <ValueItensAndDeliveryContainer>
        <p>Total de itens</p>
        R$ {formattedItemsTotal}
      </ValueItensAndDeliveryContainer>
      <ValueItensAndDeliveryContainer>
        <p>Entrega</p>
        R$ {formatDelivery}
      </ValueItensAndDeliveryContainer>
      <ValueTotalContainer>
        <p>Total</p>
        <p>R$ {formattedTotal}</p>
      </ValueTotalContainer>
    </ValuesContainer>
  )
}
