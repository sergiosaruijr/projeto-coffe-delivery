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
  FormBorderContent,
  PayContainer,
  PayMethodContainer,
  PayMethodButton,
  ZipCode,
  StreetName,
  Complement,
  NumberEndress,
  District,
  City,
  State,
} from './styles'
import { useTheme } from 'styled-components'
import { useState } from 'react'

// import { useForm } from 'react-hook-form'
// import { zodResolver } from '@hookform/resolvers/zod'
// import * as zod from 'zod'

// const newCycleFormValidationSchema = zod.object({})

// export const LocationCity = () = {
//   const [valueCity, setValueCity] = useState('');

//   const handleCity = (event) => {
//     setValue(event.target.value);
//   }
// }

export function FormAndPay() {
  // const { register, handleSubmit, watch } = useForm()

  const { colors } = useTheme()
  const [ValueInputCity, setValueCity] = useState('')

  const handleChange = (event: { target: { value: any } }) => {
    setValueCity(event.target.value)
  }

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
        <FormBorderContent>
          <div>
            <ZipCode type="text" placeholder="CEP" className="cep" id="cep" />
          </div>
          <div>
            <StreetName type="text" placeholder="Rua" />
          </div>
          <div>
            <NumberEndress type="text" placeholder="Número" maxLength={6} />
          </div>
          <div>
            <Complement type="text" placeholder="Complemento" />
          </div>
          <div>
            <District type="text" placeholder="Bairro" />
          </div>
          <div>
            <City type="text" placeholder="Cidade" onChange={handleChange} />
            <p>{ValueInputCity}</p>
          </div>
          <div>
            <State type="text" placeholder="UF" maxLength={2} />
          </div>
        </FormBorderContent>
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
