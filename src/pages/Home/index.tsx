import { Intro } from '../../components/Intro'
import {
  HomeCoffeeBorderContentContainer,
  HomeCoffeeCartContainer,
  HomeCoffeeCartFooterContainer,
  HomeCoffeeContentContainer,
  HomeContainer,
} from './styles'
import { ShoppingCartSimple } from 'phosphor-react'
import coffeeTradicional from '../../assets/coffees/coffee-expresso-tradicional.svg'
import coffeeAmericado from '../../assets/coffees/coffee-expresso-americano.svg'
import coffeeCremoso from '../../assets/coffees/coffee-expresso-cremoso.svg'
import coffeeGelado from '../../assets/coffees/coffee-expresso-gelado.svg'
import coffeeComLeite from '../../assets/coffees/coffee-com-leite.svg'
import { QuantityInput } from '../../components/QuantityInput'
import { Tag } from '../../components/Intro/styles'

export function Home() {
  return (
    <>
      <Intro />
      <HomeContainer>
        <h1>Nossos cafés</h1>
        <HomeCoffeeBorderContentContainer>
          <HomeCoffeeContentContainer>
            <img src={coffeeTradicional} alt="" />
            {/* teste de tag */}
            <Tag>
              <span>Tradional</span>
            </Tag>
            <h1>Expresso Tradicional</h1>
            <p>O tradicional café feito com água quente e grãos moídos</p>
            {/* <h3>R$ 9,90</h3> */}
            <HomeCoffeeCartFooterContainer>
              <text>
                <text>R$</text> 9,90
              </text>

              <HomeCoffeeCartContainer>
                <QuantityInput />
                <button>
                  <ShoppingCartSimple size={22} weight="fill" />
                </button>
              </HomeCoffeeCartContainer>
            </HomeCoffeeCartFooterContainer>
          </HomeCoffeeContentContainer>
          <HomeCoffeeContentContainer>
            <img src={coffeeAmericado} alt="" />
            <Tag>
              <span>Tradional</span>
            </Tag>
            <h1>Expresso Americano</h1>
            <p>Expresso diluído menos intenso que o tradicional</p>
            {/* <h3>R$ 9,90</h3> */}
            <HomeCoffeeCartFooterContainer>
              <text>
                <text>R$</text> 9,90
              </text>

              <HomeCoffeeCartContainer>
                <QuantityInput />
                <button>
                  <ShoppingCartSimple size={22} weight="fill" />
                </button>
              </HomeCoffeeCartContainer>
            </HomeCoffeeCartFooterContainer>
          </HomeCoffeeContentContainer>
          <HomeCoffeeContentContainer>
            <img src={coffeeCremoso} alt="" />
            <Tag>
              <span>Tradional</span>
            </Tag>
            <h1>Expresso Cremoso</h1>
            <p>Café expresso tradicional com espuma cremosa</p>
            <HomeCoffeeCartFooterContainer>
              <text>
                <text>R$</text> 9,90
              </text>

              <HomeCoffeeCartContainer>
                <QuantityInput />
                <button>
                  <ShoppingCartSimple size={22} weight="fill" />
                </button>
              </HomeCoffeeCartContainer>
            </HomeCoffeeCartFooterContainer>
          </HomeCoffeeContentContainer>
          <HomeCoffeeContentContainer>
            <img src={coffeeGelado} alt="" />
            <Tag>
              <span>Tradional</span>
              <span>Gelado</span>
            </Tag>
            <h1>Expresso Gelado</h1>
            <p>Bebida preparada com café expresso e cubos de gelo</p>
            {/* <h3>R$ 9,90</h3> */}
            <HomeCoffeeCartFooterContainer>
              <text>
                <text>R$</text> 9,90
              </text>

              <HomeCoffeeCartContainer>
                <QuantityInput />
                <button>
                  <ShoppingCartSimple size={22} weight="fill" />
                </button>
              </HomeCoffeeCartContainer>
            </HomeCoffeeCartFooterContainer>
          </HomeCoffeeContentContainer>
          <HomeCoffeeContentContainer>
            <img src={coffeeComLeite} alt="" />
            <Tag>
              <span>Tradional</span>
              <span>Com Leite</span>
            </Tag>

            <h1>Café com Leite</h1>
            <p>Meio a meio de expresso tradicional com leite vaporizado</p>

            <HomeCoffeeCartFooterContainer>
              <text>
                <text>R$</text> 9,90
              </text>

              <HomeCoffeeCartContainer>
                <QuantityInput />
                <button>
                  <ShoppingCartSimple size={22} weight="fill" />
                </button>
              </HomeCoffeeCartContainer>
            </HomeCoffeeCartFooterContainer>
          </HomeCoffeeContentContainer>
        </HomeCoffeeBorderContentContainer>
      </HomeContainer>
    </>
  )
}
