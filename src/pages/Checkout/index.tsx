import { CoffeeSelect } from './components/CoffeeSelect'
import { FormAndPay } from './components/FormAndPay'
import {
  // BorderContentContainer,
  CheckoutContainer,
  // TitleCard,
  // CoffesSelectContainer,
  // FormAndPayContainer,
} from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <FormAndPay />
      <CoffeeSelect />
    </CheckoutContainer>
  )
}
