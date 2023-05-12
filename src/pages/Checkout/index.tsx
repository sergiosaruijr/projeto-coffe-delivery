/* eslint-disable no-unused-vars */
import { CoffeeSelect } from './components/CoffeeSelect'
import { FormAndPay } from './components/FormAndPay'
import { CheckoutContainer } from './styles'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, FormProvider } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

enum PayMethods {
  credit = 'credit',
  debit = 'debit',
  money = 'money',
}

const confirmFormAndPayValidationSchema = zod.object({
  cep: zod.string().min(1, 'Informe o CEP'),
  street: zod.string().min(1, 'Informe o nome da Rua'),
  number: zod.string().min(1, 'Informe o número da Rua'),
  complement: zod.string(),
  discrict: zod.string().min(1, 'Informe o Bairro'),
  city: zod.string().min(1, 'Informe a Cidade'),
  uf: zod.string().min(1, 'Informe o UF'),
  payMethod: zod.nativeEnum(PayMethods, {
    errorMap: () => {
      return { message: 'Informe o método de pagamento' }
    },
  }),
})

export type FormData = zod.infer<typeof confirmFormAndPayValidationSchema>

type ConfirmFormData = FormData

export function Checkout() {
  const confirmFormAndPay = useForm<ConfirmFormData>({
    resolver: zodResolver(confirmFormAndPayValidationSchema),
    defaultValues: {
      payMethod: undefined,
    },
  })

  const { handleSubmit } = confirmFormAndPay

  const navigate = useNavigate()

  function handleConfirmForm(data: ConfirmFormData) {
    navigate('/success', {
      state: data,
    })
    console.log(data)
  }

  return (
    <FormProvider {...confirmFormAndPay}>
      <CheckoutContainer onSubmit={handleSubmit(handleConfirmForm)}>
        <FormAndPay />
        <CoffeeSelect />
      </CheckoutContainer>
    </FormProvider>
  )
}
