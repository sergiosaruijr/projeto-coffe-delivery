import { ReactNode } from 'react'
import {
  InfoWithContainer,
  IconContainer,
  TextContainer,
  IconContainerWithoutBorder,
} from './styles'

interface InfoIconProps {
  icon: ReactNode
  text: string | ReactNode
  subText?: string | ReactNode
  textBold?: string | ReactNode
  iconBgColor?: string
  iconColor?: string
}

export function InfoIcon({
  icon,
  text,
  iconBgColor,
  subText,
  textBold,
}: InfoIconProps) {
  return (
    <InfoWithContainer>
      <IconContainer iconBgColor={iconBgColor}>{icon}</IconContainer>
      <TextContainer>
        {typeof text === 'string' ? <p>{text}</p> : text}
        {typeof subText === 'string' ? <h4>{subText}</h4> : subText}
        {typeof textBold === 'string' ? <b>{textBold}</b> : textBold}
      </TextContainer>
    </InfoWithContainer>
  )
}

export function InfoIconWithoutBorder({
  icon,
  text,
  iconColor,
  subText,
  textBold,
}: InfoIconProps) {
  return (
    <InfoWithContainer>
      <IconContainerWithoutBorder iconColor={iconColor}>
        {icon}
      </IconContainerWithoutBorder>
      <TextContainer>
        {typeof text === 'string' ? <p>{text}</p> : text}
        {typeof subText === 'string' ? <h4>{subText}</h4> : subText}
        {typeof textBold === 'string' ? <b>{textBold}</b> : textBold}
      </TextContainer>
    </InfoWithContainer>
  )
}
