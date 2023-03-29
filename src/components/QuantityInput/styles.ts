import styled from 'styled-components'

export const QuantityInputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 6px;
  background: ${(props) => props.theme['gray-button']};
  //arrumar: tem tbm em home
  margin-bottom: 8rem;
  width: 4.5rem;
  height: 2.375rem;

  input {
    text-align: center;
    width: 4.5rem;
    height: 2.375rem;
    background: ${(props) => props.theme['gray-button']};
    border: none;
    border-radius: 6px;
    color: ${(props) => props.theme['gray-title']};
  }
`

export const IconContainer = styled.button.attrs({ type: 'button' })`
  width: 0.875rem;
  height: 0.875rem;
  border: none;
  background: ${(props) => props.theme['purple-300']};
  color: ${(props) => props.theme['purple-100']};
  transition: 0.4s;
  position: absolute;
  left: 0;
  margin-left: 0.5rem;
  &:disabled {
    opacity: 0.4;
    /* color: ${(props) => props.theme['purple-300']}; */
  }

  &:not(:disabled):hover {
    color: ${(props) => props.theme['purple-600']};
  }
`
