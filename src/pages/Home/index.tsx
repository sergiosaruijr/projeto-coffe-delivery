import { Intro } from '../../components/Intro'
import {
  HomeCoffeeBorderContentContainer,
  // HomeCoffeeCartContainer,
  // HomeCoffeeCartFooterContainer,
  // HomeCoffeeContentContainer,
  HomeContainer,
} from './styles'
// import { ShoppingCartSimple } from 'phosphor-react'
// import coffeeTradicional from '../../assets/coffeesImage/coffee-expresso-tradicional.svg'
// import coffeeAmericado from '../../assets/coffeesImage/coffee-expresso-americano.svg'
// import coffeeCremoso from '../../assets/coffeesImage/coffee-expresso-cremoso.svg'
// import coffeeGelado from '../../assets/coffeesImage/coffee-expresso-gelado.svg'
// import coffeeComLeite from '../../assets/coffeesImage/coffee-com-leite.svg'
// import { QuantityInput } from '../../components/QuantityInput'
// import { Tag } from '../Home/styles'
import { CoffeCard } from '../../components/CoffeeCard'
import { coffees } from '../../InfoCoffes/coffes'

export function Home() {
  return (
    <>
      <Intro />
      <HomeContainer>
        <h1>Nossos cafés</h1>
        <HomeCoffeeBorderContentContainer>
          {coffees.map((coffees) => (
            <CoffeCard key={coffees.id} coffee={undefined} />
          ))}
        </HomeCoffeeBorderContentContainer>
      </HomeContainer>
    </>
  )
}
