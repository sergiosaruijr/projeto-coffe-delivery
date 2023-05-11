import { CoffeeSelect } from './components/CoffeeSelect'
import { FormAndPay } from './components/FormAndPay'
import { CheckoutContainer } from './styles'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, FormProvider } from 'react-hook-form'

const confirmFormAndPayValidationSchema = zod.object({
  cep: zod.string(),
})

export type FormData = zod.infer<typeof confirmFormAndPayValidationSchema>

type ConfirmFormData = FormData

export function Checkout() {
  const confirmFormAndPay = useForm<ConfirmFormData>({
    resolver: zodResolver(confirmFormAndPayValidationSchema),
  })

  const { handleSubmit } = confirmFormAndPay

  function handleConfirmForm(data: ConfirmFormData) {
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
