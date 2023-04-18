import { Intro } from './components/Intro/index'
import { HomeCoffeeBorderContentContainer, HomeContainer } from './styles'
import { CoffeCard } from './components/CoffeeCard'
import { coffees } from '../../components/InfoCoffes/coffes'

export function Home() {
  return (
    <>
      <Intro />
      <HomeContainer>
        <h1>Nossos cafés</h1>
        <HomeCoffeeBorderContentContainer>
          {coffees.map((coffee) => (
            <CoffeCard key={coffee.id} coffee={coffee} />
          ))}
        </HomeCoffeeBorderContentContainer>
      </HomeContainer>
    </>
  )
}
