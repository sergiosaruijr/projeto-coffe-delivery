import { CoffeeSelect } from './components/CoffeeSelect'
import { FormAndPay } from './components/FormAndPay'
import {
  BorderContentContainer,
  CheckoutContainer,
  TitleCard,
  // CoffesSelectContainer,
  // FormAndPayContainer,
} from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <BorderContentContainer>
        <TitleCard>Complete seu pedido</TitleCard>
        <FormAndPay />
      </BorderContentContainer>

      <BorderContentContainer>
        <TitleCard>Cafés selecionados</TitleCard>
        <CoffeeSelect />
      </BorderContentContainer>
    </CheckoutContainer>
  )
}
