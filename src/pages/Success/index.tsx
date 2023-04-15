import { InfoDelivery } from './components/InfoDelivery'
import {
  BorderMessage,
  InfoDeliveryContainer,
  MessageConfirmContainer,
  SubMessageConfirmContainer,
  SuccessContainer,
} from './styles'
import iconDelivery from '../../assets/icon-delivery.svg'

export function Success() {
  return (
    <SuccessContainer>
      <BorderMessage>
        <MessageConfirmContainer>
          <h1>Uhu! Pedido confirmado</h1>
        </MessageConfirmContainer>
        <SubMessageConfirmContainer>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </SubMessageConfirmContainer>
      </BorderMessage>
      <InfoDeliveryContainer>
        <InfoDelivery />
        <img src={iconDelivery} alt="" />
      </InfoDeliveryContainer>
    </SuccessContainer>
  )
}
