import { MapPinLine } from 'phosphor-react'
import { InfoIconWithoutBorder } from '../../../../components/InfoIcon'
import { BorderText, TitleCard } from '../../styles'
import { BorderFormAndPayContentContainer, FormContainer } from './styles'
import { FormAddress } from '../FormAddress'
import { useTheme } from 'styled-components'
import { PayMethod } from '../PayMethod'

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
        </BorderText>
        <FormAddress />
      </FormContainer>
      <PayMethod />
    </BorderFormAndPayContentContainer>
  )
}
