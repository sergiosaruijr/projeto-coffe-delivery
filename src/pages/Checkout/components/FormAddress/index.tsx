import { useState } from 'react'
import {
  City,
  Complement,
  District,
  FormBorderContent,
  NumberEndress,
  State,
  StreetName,
  // ZipCode,
} from './styles'
import { Input } from '../../../../components/Input'
import { useFormContext } from 'react-hook-form'

// interface ErrorsType {
//   errors: {
//     [key: string]: {
//       message: string
//     }
//   }
// }

export function FormAddress() {
  const [ValueInputCity, setValueCity] = useState('')
  const handleChange = (event: { target: { value: any } }) => {
    setValueCity(event.target.value)
  }
  const { register } = useFormContext()

  // const { errors } = formState as unknown as ErrorsType
  return (
    <FormBorderContent>
      <Input
        type="text"
        placeholder="CEP"
        className="cep"
        id="cep"
        {...register('cep')}
        // error={errors.cep?.message}
      />

      <StreetName type="text" placeholder="Rua" />

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
  )
}
