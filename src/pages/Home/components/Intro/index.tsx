import {
  ImageCoffeIntroContainer,
  IntroContainer,
  TextDetailsIntroContainer,
  TextIntroContainer,
} from './styles'
import logoCoffeeIntro from '../../../../assets/logo-coffee-intro.svg'
import { InfoIcon } from '../../../../components/InfoIcon'
import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'
import { useTheme } from 'styled-components'

export function Intro() {
  const { colors } = useTheme()

  return (
    <IntroContainer>
      <TextIntroContainer>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <text>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </text>
        <TextDetailsIntroContainer>
          <InfoIcon
            icon={<ShoppingCart weight="fill" />}
            text="Compra simples e segura"
            iconBgColor={colors['yellow-600']}
          ></InfoIcon>
          <InfoIcon
            icon={<Package weight="fill" />}
            text="Embalagem mantém o café intacto"
            iconBgColor={colors['gray-subtitle']}
          ></InfoIcon>
          <InfoIcon
            icon={<Timer weight="fill" />}
            text="Entrega rápida e rastreada"
            iconBgColor={colors['yellow-300']}
          ></InfoIcon>
          <InfoIcon
            icon={<Coffee weight="fill" />}
            text="O café chega fresquinho até você"
            iconBgColor={colors['purple-300']}
          ></InfoIcon>

          {/* <p>
            <img src={iconCoffee} alt="" />O café chega fresquinho até você
          </p> */}
        </TextDetailsIntroContainer>
      </TextIntroContainer>
      <ImageCoffeIntroContainer>
        <img src={logoCoffeeIntro} alt="" />
      </ImageCoffeIntroContainer>
    </IntroContainer>
  )
}
