import { Trash } from 'phosphor-react'
import { QuantityInputCheckout } from '../../../../components/QuantityInput'
import {
  BorderInfoAndQuantity,
  BorderQuantityCoffee,
  ButtonBorderContainer,
  ButtonRemoveContainer,
  CardCoffeeBorder,
  ImageAndInfoBorder,
  ImageCoffeeContainer,
  NameCoffeeContainer,
  ValueIndividualCoffeeContainer,
} from './styles'

import imgCoffee from '../../../../../public/coffeeImg/tradicional.svg'
import { useTheme } from 'styled-components'

export function CoffeeCard() {
  const { colors } = useTheme()
  return (
    <CardCoffeeBorder>
      <ImageAndInfoBorder>
        <ImageCoffeeContainer>
          <img src={imgCoffee} alt="" />
        </ImageCoffeeContainer>
        <BorderInfoAndQuantity>
          <NameCoffeeContainer>Expresso Tradicional</NameCoffeeContainer>
          <BorderQuantityCoffee>
            {/* <QuantityInputCheckout /> */}
            <ButtonBorderContainer>
              <QuantityInputCheckout />
            </ButtonBorderContainer>
            <ButtonRemoveContainer>
              <Trash size={16} weight="bold" color={colors['purple-300']} />
              <p>Remover</p>
            </ButtonRemoveContainer>
          </BorderQuantityCoffee>
        </BorderInfoAndQuantity>
      </ImageAndInfoBorder>
      <ValueIndividualCoffeeContainer>
        <p>R$ 9,90</p>
      </ValueIndividualCoffeeContainer>
    </CardCoffeeBorder>
  )
}
