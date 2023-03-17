import {
  ImageCoffeIntroContainer,
  IntroContainer,
  TextIntroContainer,
} from './styles'
import logoCoffeeIntro from '../../assets/logo-coffee-intro.svg'

export function Intro() {
  return (
    <IntroContainer>
      <TextIntroContainer>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>Compra</p>
      </TextIntroContainer>
      <ImageCoffeIntroContainer>
        <img src={logoCoffeeIntro} alt="" />
      </ImageCoffeIntroContainer>
    </IntroContainer>
  )
}
