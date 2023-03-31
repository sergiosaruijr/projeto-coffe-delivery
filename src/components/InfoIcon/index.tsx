import { ReactNode } from 'react'
import { InfoWithContainer, IconContainer } from './styles'

interface InfoIconProps {
  icon: ReactNode
  text: string | ReactNode
  iconBgColor: string
}

export function InfoIcon({ icon, text, iconBgColor }: InfoIconProps) {
  return (
    <InfoWithContainer>
      <IconContainer iconBgColor={iconBgColor}>{icon}</IconContainer>
      {typeof text === 'string' ? <p>{text}</p> : text}
    </InfoWithContainer>
  )
}
