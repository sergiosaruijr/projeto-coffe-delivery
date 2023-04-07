import styled from 'styled-components'

export const FormAndPayContainer = styled.div`
  background: ${(props) => props.theme.colors['purple-300']};
  display: flex;
  flex-direction: column;
  width: 40rem;
  height: 31.125rem;
  margin-top: 0.9375rem;
`
export const BorderFormAndPayContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.colors['gray-label']};
  /* margin-bottom: 4.937rem; */
`
