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
import { QuantityInput } from '../QuantityInput'
import { ShoppingCartSimple } from 'phosphor-react'
import { formatPrice } from '../../../../../src/components/Format/formatPrice'

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
            <QuantityInput />
            <button>
              <ShoppingCartSimple size={22} weight="fill" />
            </button>
          </CoffeeCartAndPriceContainer>
        </CoffeeCartFooterContainer>
      </CoffeeContentContainer>
    </BorderContentContainer>
  )
}
