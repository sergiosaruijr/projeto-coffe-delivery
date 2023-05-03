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

import { useTheme } from 'styled-components'
import { CartItem } from '../../../../contexts/CartContext'
import { formatPrice } from '../../../../components/Format/formatPrice'
import { useCartContext } from '../../../../hooks/useCartContext'

interface CoffeeCardProps {
  coffee: CartItem
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const { colors } = useTheme()
  const { changeCartItemQuantity, removeCart } = useCartContext()

  function handleIncrease() {
    changeCartItemQuantity(coffee.id, 'increase')
  }

  function handleDecrease() {
    changeCartItemQuantity(coffee.id, 'decrease')
  }

  function handleRemove() {
    removeCart(coffee.id)
  }

  const coffeeTotal = coffee.price * coffee.quantity
  const formatedPrice = formatPrice(coffeeTotal)
  return (
    <CardCoffeeBorder>
      <ImageAndInfoBorder>
        <ImageCoffeeContainer>
          <img src={`/coffeeImg/${coffee.photo}`} alt="" />
        </ImageCoffeeContainer>
        <BorderInfoAndQuantity>
          <NameCoffeeContainer>{coffee.name}</NameCoffeeContainer>
          <BorderQuantityCoffee>
            {/* <QuantityInputCheckout /> */}
            <ButtonBorderContainer>
              <QuantityInputCheckout
                onIncrease={handleIncrease}
                onDecrease={handleDecrease}
                quantity={coffee.quantity}
              />
            </ButtonBorderContainer>
            <ButtonRemoveContainer onClick={handleRemove}>
              <Trash size={16} weight="bold" color={colors['purple-300']} />
              <p>Remover</p>
            </ButtonRemoveContainer>
          </BorderQuantityCoffee>
        </BorderInfoAndQuantity>
      </ImageAndInfoBorder>
      <ValueIndividualCoffeeContainer>
        <p>R$ {formatedPrice}</p>
      </ValueIndividualCoffeeContainer>
    </CardCoffeeBorder>
  )
}
