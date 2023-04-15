import styled from 'styled-components'

export const BorderInfoDelivery = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center;
  justify-content: center; */
  width: 32.875rem;
  height: 16.875rem;
  border-color: ${(props) => props.theme.colors['purple-300']};
  background: ${(props) => props.theme.colors['yellow-100']};
  border: 2px;
  border-radius: 6px 36px 6px 36px;
  padding: 2.5rem;
`
export const BorderInfoContent = styled.div`
  height: 2.625rem;
  margin-top: 2rem;

  &:first-child {
    margin-top: 0;
  }
`
