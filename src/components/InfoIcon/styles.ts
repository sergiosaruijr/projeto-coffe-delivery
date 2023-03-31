import styled from 'styled-components'

export const InfoWithContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`
interface IconContainerProps {
  iconBgColor: string
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
