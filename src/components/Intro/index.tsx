import {
  ImageCoffeIntroContainer,
  IntroContainer,
  TextDetailsIntroContainer,
  TextIntroContainer,
} from './styles'
import logoCoffeeIntro from '../../assets/logo-coffee-intro.svg'
import iconCart from '../../assets/icon-cart.svg'
import iconTimer from '../../assets/icon-timer.svg'
import iconBox from '../../assets/icon-box.svg'
import iconCoffee from '../../assets/icon-coffee.svg'
// import { ShoppingCart } from 'phosphor-react'

export function Intro() {
  return (
    <IntroContainer>
      <TextIntroContainer>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>
        <TextDetailsIntroContainer>
          <p>
            <img src={iconCart} alt="" />
            Compra simples e segura
          </p>
          <p>
            <img src={iconBox} alt="" />
            Embalagem mantém o café intacto
          </p>
          <p>
            <img src={iconTimer} alt="" />
            Entrega rápida e rastreada
          </p>
          <p>
            <img src={iconCoffee} alt="" />O café chega fresquinho até você
          </p>
        </TextDetailsIntroContainer>
      </TextIntroContainer>
      <ImageCoffeIntroContainer>
        <img src={logoCoffeeIntro} alt="" />
      </ImageCoffeIntroContainer>
    </IntroContainer>
  )
}
