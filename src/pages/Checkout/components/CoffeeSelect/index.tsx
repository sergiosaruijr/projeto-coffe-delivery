import { Trash } from 'phosphor-react'
import { QuantityInputCheckout } from '../../../../components/QuantityInput'
import { TitleCard } from '../../styles'
import {
  BorderCoffeeSelectionContentContainer,
  CardCoffeeBorder,
  CoffeeSelectContainer,
  ImageCoffeeContainer,
  BorderQuantityCoffee,
  ValueItensAndDeliveryContainer,
  ValueTotalContainer,
  ValuesContainer,
  ButtonBorderContainer,
  ValueIndividualCoffeeContainer,
  ImageAndInfoBorder,
  ButtonRemoveContainer,
  ButtonConfirmContainer,
  BorderInfoAndQuantity,
  NameCoffeeContainer,
} from './styles'
import { useTheme } from 'styled-components'
import imgCoffee from '../../../../../public/coffeeImg/tradicional.svg'
import imgCoffee2 from '../../../../../public/coffeeImg/latte.svg'
export function CoffeeSelect() {
  const { colors } = useTheme()
  return (
    // <h1>Cafés selecionados</h1>

    <BorderCoffeeSelectionContentContainer>
      <TitleCard>Cafés selecionados</TitleCard>
      <CoffeeSelectContainer>
        {/* arrumar para ser um componente separado */}
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
        <CardCoffeeBorder>
          <ImageAndInfoBorder>
            <ImageCoffeeContainer>
              <img src={imgCoffee2} alt="" />
            </ImageCoffeeContainer>
            <BorderInfoAndQuantity>
              <NameCoffeeContainer>Latte</NameCoffeeContainer>
              <BorderQuantityCoffee>
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
            <p>R$ 19,80</p>
          </ValueIndividualCoffeeContainer>
        </CardCoffeeBorder>
        <ValuesContainer>
          <ValueItensAndDeliveryContainer>
            <p>Total de itens</p>
            R$ 29,70
          </ValueItensAndDeliveryContainer>
          <ValueItensAndDeliveryContainer>
            <p>Entrega</p>
            R$ 3,50
          </ValueItensAndDeliveryContainer>
          <ValueTotalContainer>
            <p>Total</p>
            <p>R$ 33,20</p>
          </ValueTotalContainer>
        </ValuesContainer>
        <ButtonConfirmContainer>
          <a href="/success">
            <h1>Confirmar Pedido</h1>
          </a>
        </ButtonConfirmContainer>
      </CoffeeSelectContainer>
    </BorderCoffeeSelectionContentContainer>
  )
}
