import {
  CartContainer,
  HeaderContainer,
  HeaderDivContainer,
  LocationContainer,
} from './styles'
import logoCoffee from '../../assets/logo-coffee.svg'
import logoCart from '../../assets/logo-cart.svg'
import { MapPin } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <img
        src={logoCoffee}
        alt="Simbolo que representa um copo de cafe, com o texto 'Coffee Delivery'"
      />
      <HeaderDivContainer>
        <div>
          <LocationContainer>
            <MapPin size={22} weight="fill" />
            Localização
          </LocationContainer>
        </div>

        <div>
          <CartContainer>
            <img src={logoCart} alt="" />
          </CartContainer>
        </div>
      </HeaderDivContainer>
    </HeaderContainer>
  )
}
