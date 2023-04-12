import styled from 'styled-components'

export const InfoWithContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.75rem;
`
interface IconContainerProps {
  iconBgColor?: string
  iconColor?: string
}

export const IconContainer = styled.div<IconContainerProps>`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;

  background: ${({ iconBgColor }) => iconBgColor};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.colors['white-100']};
`
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.125rem;

  h4 {
    font-size: ${(props) => props.theme.textSizes['text-regular-s']};
    font-weight: normal;
    color: ${(props) => props.theme.colors['gray-text']};
  }
  p {
    font-size: ${(props) => props.theme.textSizes['text-regular-m']};
    color: ${(props) => props.theme.colors['gray-subtitle']};
  }
`

export const IconContainerWithoutBorder = styled.div<IconContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 1.187rem;
  color: ${({ iconColor }) => iconColor};
`
