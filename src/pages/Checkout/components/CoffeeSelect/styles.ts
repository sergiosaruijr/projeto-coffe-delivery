import styled from 'styled-components'

export const CoffeeSelectContainer = styled.div`
  background: ${(props) => props.theme.colors['yellow-300']};
  display: flex;
  flex-direction: column;
  width: 28rem;
  height: 31.125rem;
  margin-top: 0.9375rem;

  /* h1 {
    margin-top: -2.937rem;
  } */
`
export const BorderCoffeeSelectionSContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.colors['gray-label']};
  margin-left: 2rem;
`
