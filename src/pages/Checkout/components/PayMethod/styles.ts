import styled from 'styled-components'

export const PayContainer = styled.div`
  background: ${(props) => props.theme.colors['gray-card']};
  display: flex;
  border-radius: 6px;
  flex-direction: column;
  align-items: center;
  width: 40rem;
  height: 12.937rem;
  margin-top: 0.75rem;
`

export const PayMethodContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 35rem;
  height: 3.187rem;
  margin-top: 2rem;
  align-items: center;
  justify-content: space-between;
  /* color: ; */

  > p {
    grid-column: span 3;
    color: ${(props) => props.theme.colors['red-error']};
  }
`
