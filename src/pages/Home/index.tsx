import { Intro } from '../../components/Intro'
import {
  HomeCoffeeBorderContentContainer,
  HomeCoffeeCartContainer,
  HomeCoffeeCartFooterContainer,
  HomeCoffeeContentContainer,
  HomeContainer,
} from './styles'
import { ShoppingCartSimple } from 'phosphor-react'
import coffeeTradicional from '../../assets/coffees/coffee-tradicional.svg'

export function Home() {
  return (
    <>
      <Intro />
      <HomeContainer>
        <h1>Nossos cafés</h1>
        <HomeCoffeeBorderContentContainer>
          <HomeCoffeeContentContainer>
            <img src={coffeeTradicional} alt="" />
            <div>
              <h4>TRADICIONAL</h4>
            </div>
            <h1>Expresso Tradicional</h1>
            <p>O tradicional café feito com água quente e grãos moídos</p>
            {/* <h3>R$ 9,90</h3> */}
            <HomeCoffeeCartFooterContainer>
              <text>
                <small>R$</small>9,90
              </text>
              <span>1</span>
              <HomeCoffeeCartContainer>
                <ShoppingCartSimple size={22} weight="fill" />
              </HomeCoffeeCartContainer>
            </HomeCoffeeCartFooterContainer>
          </HomeCoffeeContentContainer>
          <HomeCoffeeContentContainer>
            <img src={coffeeTradicional} alt="" />
            <div>
              <div>
                <h4>TRADICIONAL</h4>
              </div>
            </div>
            <h1>Expresso Americano</h1>
            <p>Expresso diluído menos intenso que o tradicional</p>
            {/* <h3>R$ 9,90</h3> */}
            <HomeCoffeeCartFooterContainer>
              <text>
                <small>R$</small> 9,90
              </text>
              <span>1</span>
              <HomeCoffeeCartContainer>
                <ShoppingCartSimple size={22} weight="fill" />
              </HomeCoffeeCartContainer>
            </HomeCoffeeCartFooterContainer>
          </HomeCoffeeContentContainer>
          <HomeCoffeeContentContainer>
            <h4>TRADICIONAL</h4>
            <h1>Expresso Cremoso</h1>
            <p>Café expresso tradicional com espuma cremosa</p>
            <HomeCoffeeCartFooterContainer>
              <text>
                <small>R$</small> 9,90
              </text>
              <span>1</span>
              <HomeCoffeeCartContainer>
                <ShoppingCartSimple size={22} weight="fill" />
              </HomeCoffeeCartContainer>
            </HomeCoffeeCartFooterContainer>
          </HomeCoffeeContentContainer>
          <HomeCoffeeContentContainer>
            <h4>TRADICIONAL</h4> <h4>GELADO</h4>
            <h1>Expresso Gelado</h1>
            <p>Bebida preparada com café expresso e cubos de gelo</p>
            {/* <h3>R$ 9,90</h3> */}
            <HomeCoffeeCartFooterContainer>
              <text>
                <small>R$</small> 9,90
              </text>
              <span>1</span>
              <HomeCoffeeCartContainer>
                <ShoppingCartSimple size={22} weight="fill" />
              </HomeCoffeeCartContainer>
            </HomeCoffeeCartFooterContainer>
          </HomeCoffeeContentContainer>
          <HomeCoffeeContentContainer>
            <div>
              <h4>TRADICIONAL</h4>
              <h4>GELADO</h4>
            </div>

            <h1>Expresso Gelado</h1>
            <p>Bebida preparada com café expresso e cubos de gelo</p>
            {/* <h3>R$ 9,90</h3> */}
            <HomeCoffeeCartFooterContainer>
              <text>
                <small>R$</small> 9,90
              </text>
              <span>1</span>
              <HomeCoffeeCartContainer>
                <ShoppingCartSimple size={22} weight="fill" />
              </HomeCoffeeCartContainer>
            </HomeCoffeeCartFooterContainer>
          </HomeCoffeeContentContainer>
        </HomeCoffeeBorderContentContainer>
      </HomeContainer>
    </>
  )
}
