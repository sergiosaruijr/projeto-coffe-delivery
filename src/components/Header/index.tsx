import {
  CartContainer,
  HeaderContainer,
  HeaderDivContainer,
  LocationContainer,
} from './styles'
import logoCoffee from '../../assets/logo-coffee.svg'
import logoCart from '../../assets/logo-cart.svg'
import { MapPin } from 'phosphor-react'
import { useCartContext } from '../../hooks/useCartContext'
import { NavLink } from 'react-router-dom'
// import { ValueInputCity } from '../../../src/pages/Checkout/components/FormAndPay'

export function Header() {
  const { cartQuantity } = useCartContext()

  return (
    <HeaderContainer>
      <NavLink to="/">
        <img
          src={logoCoffee}
          alt="Simbolo que representa um copo de cafe, com o texto 'Coffee Delivery'"
        />
      </NavLink>
      <HeaderDivContainer>
        <div>
          <LocationContainer>
            <MapPin size={22} weight="fill" />
            <p>Londrina, PR</p>
          </LocationContainer>
        </div>

        <div>
          <CartContainer>
            <NavLink to="/checkout">
              {cartQuantity >= 1 && <span>{cartQuantity}</span>}
              <img src={logoCart} alt="" />
            </NavLink>
          </CartContainer>
        </div>
      </HeaderDivContainer>
    </HeaderContainer>
  )
}
