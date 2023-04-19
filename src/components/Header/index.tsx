import {
  CartContainer,
  HeaderContainer,
  HeaderDivContainer,
  LocationContainer,
} from './styles'
import logoCoffee from '../../assets/logo-coffee.svg'
import logoCart from '../../assets/logo-cart.svg'
import { MapPin } from 'phosphor-react'
// import { ValueInputCity } from '../../../src/pages/Checkout/components/FormAndPay'

export function Header() {
  // const ValueCity = ValueInputCity.toString()
  return (
    <HeaderContainer>
      <a href="/">
        <img
          src={logoCoffee}
          alt="Simbolo que representa um copo de cafe, com o texto 'Coffee Delivery'"
        />
      </a>
      <HeaderDivContainer>
        <div>
          <LocationContainer>
            <MapPin size={22} weight="fill" />
            <p>Londrina, PR</p>
          </LocationContainer>
        </div>

        <div>
          <CartContainer>
            <a href="/checkout">
              <img src={logoCart} alt="" />
            </a>
          </CartContainer>
        </div>
      </HeaderDivContainer>
    </HeaderContainer>
  )
}
