import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { InfoIconWithoutBorder } from '../../../../components/InfoIcon'
import { TitleCard } from '../../styles'
import {
  BorderFormAndPayContentContainer,
  BorderText,
  FormContainer,
  PayContainer,
  PayMethodContainer,
  PayMethodButton,
} from './styles'
import { FormAddress } from '../FormAddress'
import { useTheme } from 'styled-components'

export function FormAndPay() {
  const { colors } = useTheme()
  return (
    <BorderFormAndPayContentContainer>
      <TitleCard>Complete seu pedido</TitleCard>
      <FormContainer>
        <BorderText>
          <InfoIconWithoutBorder
            icon={<MapPinLine size={22} />}
            iconColor={colors['yellow-600']}
            text="Endereço de Entrega"
            subText="Informe o endereço onde deseja receber seu pedido"
          ></InfoIconWithoutBorder>
          {/* </TextContentContainer> */}
        </BorderText>
        <FormAddress />
      </FormContainer>
      <PayContainer>
        <BorderText>
          <InfoIconWithoutBorder
            icon={<CurrencyDollar size={22} />}
            iconColor={colors['purple-300']}
            text="Pagamento"
            subText="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
          ></InfoIconWithoutBorder>
        </BorderText>
        <PayMethodContainer>
          <PayMethodButton>
            <CreditCard size={16} weight="bold" color={colors['purple-300']} />
            <p>Cartão de Crédito</p>
          </PayMethodButton>

          <PayMethodButton>
            <Bank size={16} weight="bold" color={colors['purple-300']} />
            <p>Cartão de Débito</p>
          </PayMethodButton>

          <PayMethodButton>
            <Money size={16} weight="bold" color={colors['purple-300']} />
            <p>Dinheiro</p>
          </PayMethodButton>
        </PayMethodContainer>
      </PayContainer>
    </BorderFormAndPayContentContainer>
  )
}
