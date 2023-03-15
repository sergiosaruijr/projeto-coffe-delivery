import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const HeaderDivContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.75rem;

  div {
    border-radius: 8px;
    display: flex;
    gap: 0.25rem;
    align-items: center;
    border-top: 3px solid transparent;
    border-bottom: 3px solid transparent;
  }
`

export const LocationContainer = styled.div`
  background: ${(props) => props.theme['purple-100']};
  color: ${(props) => props.theme['purple-600']};
  width: 100%;
  padding: 0.35rem;
`

export const CartContainer = styled.div`
  background: ${(props) => props.theme['yellow-100']};
  width: 100%;
  padding: 0.35rem;
`
