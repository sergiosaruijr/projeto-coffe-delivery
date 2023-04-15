import { useTheme } from 'styled-components'
import { InfoIcon } from '../../../../components/InfoIcon'
import { BorderInfoContent, BorderInfoDelivery } from './styles'
import { MapPin, CurrencyDollar, Timer } from 'phosphor-react'

export function InfoDelivery() {
  const { colors } = useTheme()
  return (
    <BorderInfoDelivery>
      <BorderInfoContent>
        <InfoIcon
          icon={<MapPin weight="fill" />}
          text="Entrega em Rua Benjamin Constant, 1974"
          text2="Londrina - Paraná, PR"
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
          textBold="Cartão de Crédito"
          iconBgColor={colors['yellow-600']}
        ></InfoIcon>
      </BorderInfoContent>
    </BorderInfoDelivery>
  )
}
