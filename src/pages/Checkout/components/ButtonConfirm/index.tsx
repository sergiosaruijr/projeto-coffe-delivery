// import { NavLink } from 'react-router-dom'
import { useCartContext } from '../../../../hooks/useCartContext'
import { ButtonConfirmContainer } from './styles'

export function ButtonConfirm() {
  const { cartQuantity } = useCartContext()
  return (
    <ButtonConfirmContainer type="submit" disabled={cartQuantity <= 0}>
      {/* <NavLink to="/success"> */}
      <h1>Confirmar Pedido</h1>
      {/* </NavLink> */}
    </ButtonConfirmContainer>
  )
}
