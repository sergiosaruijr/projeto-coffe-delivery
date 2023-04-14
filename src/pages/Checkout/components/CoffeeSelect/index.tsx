import { Trash } from 'phosphor-react'
import { QuantityInputCheckout } from '../../../../components/QuantityInput'
import { TitleCard } from '../../styles'
import {
  BorderCoffeeSelectionContentContainer,
  CardCoffeeBorder,
  CoffeeSelectContainer,
  ImageCoffeeContainer,
  BorderQuantityCoffee,
  ValueDeliveryContainer,
  ValueItensContainer,
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
import imgCoffee from '../CoffeeSelect/ame.svg'
export function CoffeeSelect() {
  const { colors } = useTheme()
  return (
    // <h1>Cafés selecionados</h1>

    <BorderCoffeeSelectionContentContainer>
      <TitleCard>Cafés selecionados</TitleCard>
      <CoffeeSelectContainer>
        {/* arrumar para ser um componente separado */}
        <CardCoffeeBorder></CardCoffeeBorder>
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
            <p>R$19,90</p>
          </ValueIndividualCoffeeContainer>
        </CardCoffeeBorder>
        <ValuesContainer>
          <ValueItensContainer>
            <p>Total de itens</p>
            <p>R$ 29,70</p>
          </ValueItensContainer>
          <ValueDeliveryContainer>
            <p>Entrega</p>
            <p>R$ 3,50</p>
          </ValueDeliveryContainer>
          <ValueTotalContainer>
            <p>Total</p>
            <p>R$ 33,20</p>
          </ValueTotalContainer>
        </ValuesContainer>
        <ButtonConfirmContainer>
          <h1>Confirmar Pedido</h1>
        </ButtonConfirmContainer>
      </CoffeeSelectContainer>
    </BorderCoffeeSelectionContentContainer>
  )
}
