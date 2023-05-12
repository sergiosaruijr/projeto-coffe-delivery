import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { InfoIconWithoutBorder } from '../../../../components/InfoIcon'
import { BorderText } from '../../styles'
import { PayContainer, PayMethodContainer } from './styles'
import { useTheme } from 'styled-components'
import { PayMethodInput } from '../PayMethodInput'
import { useFormContext } from 'react-hook-form'

export const payMethods = {
  credit: {
    label: 'Cartão de Crédito',
    icon: <CreditCard size={16} />,
  },
  debit: {
    label: 'Cartão de Débito',
    icon: <Bank size={16} />,
  },
  money: {
    label: 'Dinheiro',
    icon: <Money size={16} />,
  },
}

export function PayMethod() {
  const { colors } = useTheme()
  const {
    register,
    formState: { errors },
  } = useFormContext()

  const payMethodError = errors?.payMethod?.message as unknown as string

  return (
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
        {Object.entries(payMethods).map(([key, { label, icon }]) => (
          <PayMethodInput
            key={label}
            id={key}
            icon={icon}
            label={label}
            value={key}
            {...register('payMethod')}
          />
        ))}
        {payMethodError && <p>{payMethodError}</p>}
      </PayMethodContainer>
    </PayContainer>
  )
}
