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
import coffeeTradicional from '../../assets/coffeesImage/coffee-expresso-tradicional.svg'
import { QuantityInput } from '../QuantityInput'
import { ShoppingCartSimple } from 'phosphor-react'

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
  return (
    <BorderContentContainer>
      <CoffeeContentContainer>
        <img src={coffeeTradicional} alt="" />

        <Tag>
          {/* <span>Tradicional</span> */}
          {/* {coffee.tags.map((tag) => (
            <span key={`${coffee.id} ${tag}`}>tradicional</span>
          ))} */}
          {coffee.tags.map((tag) => (
            <span key={`${coffee.id} ${tag}`}>{tag}</span>
          ))}
        </Tag>

        <NameCoffee>Expresso Tradicional</NameCoffee>

        <DescriptionCoffe>
          O tradicional café feito com água quente e grãos moídos
        </DescriptionCoffe>

        <CoffeeCartFooterContainer>
          <TextPriceCoffee>
            <text>R$</text> 9,90
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
