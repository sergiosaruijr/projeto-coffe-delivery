import {
  BorderContentContainer,
  CoffeeCartAndPriceContainer,
  CoffeeCartFooterContainer,
  CoffeeContentContainer,
  DescriptionCoffe,
  NameCoffee,
  Tag,
  TextPriceCoffee,
} from './styles'
// import coffeeTradicional from '../../assets/coffeeImage/coffee-expresso-tradicional.svg'
import { QuantityInputHome } from '../../../../components/QuantityInput'
import { ShoppingCartSimple } from 'phosphor-react'
import { formatPrice } from '../../../../../src/components/Format/formatPrice'
import { useCartContext } from '../../../../hooks/useCartContext'
import { useState } from 'react'

export interface Coffee {
  id: number
  tags: string[]
  name: string
  description: string
  photo: string
  price: number
}

interface CoffeeProps {
  coffee: Coffee
}

export function CoffeCard({ coffee }: CoffeeProps) {
  const [quantity, setQuantity] = useState(1)

  function handleIncrease() {
    setQuantity((state) => state + 1)
  }

  function handleDecrease() {
    setQuantity((state) => state - 1)
  }

  const { addCoffeeToCart } = useCartContext()

  function handleAddToCart() {
    const coffeeAdd = {
      ...coffee,
      quantity,
    }
    addCoffeeToCart(coffeeAdd)
  }

  const formattedCoffeePrice = formatPrice(coffee.price)
  return (
    <BorderContentContainer>
      <CoffeeContentContainer>
        <img src={`/coffeeImg/${coffee.photo}`} alt="" />

        <Tag>
          {coffee.tags.map((tag) => (
            <span key={`${coffee.id} ${tag}`}>{tag}</span>
          ))}
        </Tag>

        <NameCoffee>{coffee.name}</NameCoffee>

        <DescriptionCoffe>{coffee.description}</DescriptionCoffe>

        <CoffeeCartFooterContainer>
          <TextPriceCoffee>
            <text>R$</text> {formattedCoffeePrice}
          </TextPriceCoffee>

          <CoffeeCartAndPriceContainer>
            <QuantityInputHome
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
              quantity={quantity}
            />
            <button onClick={handleAddToCart}>
              <ShoppingCartSimple size={22} weight="fill" />
            </button>
          </CoffeeCartAndPriceContainer>
        </CoffeeCartFooterContainer>
      </CoffeeContentContainer>
    </BorderContentContainer>
  )
}
