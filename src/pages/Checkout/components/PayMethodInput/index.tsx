import { PayMethodContainer, ContentContainer } from './styles'
import { InputHTMLAttributes, ReactNode, forwardRef } from 'react'

type PayMethodInputProps = InputHTMLAttributes<HTMLInputElement> & {
  icon: ReactNode
  label: string
}

// eslint-disable-next-line react/display-name
export const PayMethodInput = forwardRef<HTMLInputElement, PayMethodInputProps>(
  ({ id, icon, label, ...props }, ref) => {
    return (
      <PayMethodContainer>
        <input id={id} type="radio" {...props} name="payMethod" ref={ref} />
        <label htmlFor={id}>
          <ContentContainer>
            {icon}
            {label}
          </ContentContainer>
        </label>
      </PayMethodContainer>
    )
  },
)
