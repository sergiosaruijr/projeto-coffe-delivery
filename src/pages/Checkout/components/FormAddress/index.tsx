// import { useState } from 'react'
import { FormBorderContent } from './styles'
import { Input } from '../../../../components/Input'
import { useFormContext } from 'react-hook-form'

interface ErrorsType {
  errors: {
    [key: string]: {
      message: string
    }
  }
}

export function FormAddress() {
  const { register, formState } = useFormContext()

  const { errors } = formState as unknown as ErrorsType

  return (
    <FormBorderContent className="interna">
      <Input
        type="text"
        placeholder="CEP"
        className="cep"
        id="cep"
        {...register('cep')}
        error={errors.cep?.message}
      />
      <Input
        type="text"
        placeholder="Rua"
        className="street"
        {...register('street')}
        error={errors.street?.message}
      />
      <Input
        type="text"
        placeholder="Número"
        maxLength={6}
        className="number"
        {...register('number')}
        error={errors.number?.message}
      />
      <Input
        type="text"
        placeholder="Complemento"
        className="complement"
        {...register('complement')}
        error={errors.complement?.message}
        rightText="opcional"
      />
      <div>
        <Input
          type="text"
          placeholder="Bairro"
          className="discrict"
          {...register('discrict')}
          error={errors.discrict?.message}
        />
      </div>
      <div>
        <Input
          type="text"
          placeholder="Cidade"
          // onChange={handleChange}
          className="city"
          {...register('city')}
          error={errors.city?.message}
        />
        {/* <p>{ValueInputCity}</p> */}
      </div>
      <div>
        <Input
          type="text"
          placeholder="UF"
          maxLength={2}
          className="uf"
          {...register('uf')}
          error={errors.uf?.message}
        />
      </div>
    </FormBorderContent>
  )
}
