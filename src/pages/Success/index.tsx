// import { InfoDelivery } from './components/InfoDelivery'
import {
  BorderInfoContent,
  BorderInfoDelivery,
  BorderMessage,
  InfoDeliveryContainer,
  MessageConfirmContainer,
  SubMessageConfirmContainer,
  SuccessContainer,
} from './styles'
import iconDelivery from '../../assets/icon-delivery.svg'
import { useTheme } from 'styled-components'
import { InfoIcon } from '../../components/InfoIcon'
import { MapPin, CurrencyDollar, Timer } from 'phosphor-react'
import { useLocation, useNavigate } from 'react-router-dom'
import { FormData } from '../Checkout'
import { payMethods } from '../Checkout/components/PayMethod'
import { useEffect } from 'react'

interface LocationType {
  state: FormData
}

export function Success() {
  const { colors } = useTheme()

  const { state } = useLocation() as unknown as LocationType

  const navigate = useNavigate()

  useEffect(() => {
    if (!state) {
      navigate('/')
    }
  }, [])

  if (!state) return <></>

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
        <BorderInfoDelivery>
          <BorderInfoContent>
            <InfoIcon
              icon={<MapPin weight="fill" />}
              text={
                <p>
                  Entrega em{' '}
                  <strong>
                    Rua {state.street}, {state.number}
                  </strong>{' '}
                </p>
              }
              text2={
                <p>
                  {state.city} - {state.discrict}, {state.uf}
                </p>
              }
              iconBgColor={colors['purple-300']}
            ></InfoIcon>
          </BorderInfoContent>
          <BorderInfoContent>
            <InfoIcon
              icon={<Timer weight="fill" />}
              text="Previsão de entrega"
              textBold="20 min ~ 30 min"
              iconBgColor={colors['yellow-300']}
            ></InfoIcon>
          </BorderInfoContent>
          <BorderInfoContent>
            <InfoIcon
              icon={<CurrencyDollar weight="fill" />}
              text="Pagamento na entrega"
              textBold={<strong>{payMethods[state.payMethod].label}</strong>}
              iconBgColor={colors['yellow-600']}
            ></InfoIcon>
          </BorderInfoContent>
        </BorderInfoDelivery>
        <img src={iconDelivery} alt="" />
      </InfoDeliveryContainer>
    </SuccessContainer>
  )
}
