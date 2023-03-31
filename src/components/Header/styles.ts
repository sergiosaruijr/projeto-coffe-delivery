import styled from 'styled-components'
// arrumar
export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* margin-top: 2rem; */
  /* max-width: 70rem; */
  width: 100%;
  position: sticky;
  top: 0px;

  z-index: 1;
  background: ${(props) => props.theme.colors['gray-text']};
`

export const HeaderDivContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.75rem;
  height: 6.5rem;
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
  background: ${(props) => props.theme.colors['purple-100']};
  color: ${(props) => props.theme.colors['purple-300']};
  width: 100%;
  padding: 0.35rem;

  p {
    color: ${(props) => props.theme.colors['purple-600']};
    font-size: 0.87rem;
  }
`

export const CartContainer = styled.div`
  background: ${(props) => props.theme.colors['yellow-100']};
  width: 100%;
  padding: 0.35rem;
`
