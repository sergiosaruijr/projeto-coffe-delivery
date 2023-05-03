import styled from 'styled-components'

export const QuantityInputContainerHome = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 6px;
  background: ${(props) => props.theme.colors['gray-button']};
  //arrumar: tem tbm em home
  margin-bottom: 8rem;
  width: 4.5rem;
  height: 2.375rem;

  input {
    text-align: center;
    width: 4.5rem;
    height: 2.375rem;
    background: ${(props) => props.theme.colors['gray-button']};
    border: none;
    border-radius: 6px;
    color: ${(props) => props.theme.colors['gray-title']};
    box-shadow: 0 0 0 0;
    outline: 0;
  }
`

export const IconContainer = styled.button.attrs({ type: 'button' })`
  width: 0.875rem;
  height: 0.875rem;
  border: none;
  background: none;
  color: ${(props) => props.theme.colors['purple-300']};
  transition: 0.4s;
  position: relative;
  margin-right: -1.5rem;
  margin-left: -1.5rem;
  box-shadow: 0 0 0 0;
  outline: 0;
  &:disabled {
    opacity: 0.4;
    /* color: ${(props) => props.theme.colors['purple-300']}; */
  }

  &:not(:disabled):hover {
    color: ${(props) => props.theme.colors['purple-600']};
  }
`

export const QuantityInputContainerCheckout = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 6px;
  background: ${(props) => props.theme.colors['gray-button']};
  width: 4.5rem;
  height: 2rem;

  input {
    text-align: center;
    width: 4.5rem;
    height: 2rem;
    /* height: 2.375rem; */
    background: ${(props) => props.theme.colors['gray-button']};
    border: none;
    border-radius: 6px;
    color: ${(props) => props.theme.colors['gray-title']};
    box-shadow: 0 0 0 0;
    outline: 0;
  }

  p {
    text-align: center;
  }
`
