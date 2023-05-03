import { NavLink } from 'react-router-dom'
import { ButtonConfirmContainer } from './styles'

export function ButtonConfirm() {
  // const { cartQuantity } = useCartContext()
  return (
    <ButtonConfirmContainer>
      <NavLink to="/success">
        <h1>Confirmar Pedido</h1>
      </NavLink>
    </ButtonConfirmContainer>
  )
}
