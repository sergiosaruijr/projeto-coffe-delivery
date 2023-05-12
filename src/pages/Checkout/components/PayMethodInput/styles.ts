import styled from 'styled-components'

export const PayMethodContainer = styled.div`
  input {
    visibility: hidden;
    appearance: none;
  }

  input:checked + label div {
    background: ${(props) => props.theme.colors['purple-100']};
    border-color: ${(props) => props.theme.colors['purple-300']};
    &:hover {
      background: ${(props) => props.theme.colors['purple-100']};
    }
  }
`

export const ContentContainer = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 11.167rem;
  height: 3.187rem;
  background: ${(props) => props.theme.colors['gray-button']};
  border-radius: 6px;
  border: 1px solid ${(props) => props.theme.colors['gray-button']};
  gap: 0.75rem;
  font-size: ${(props) => props.theme.textSizes['components-button-s']};
  text-transform: uppercase;
  padding-left: 0.5rem;

  &:hover {
    background: ${(props) => props.theme.colors['gray-hover']};
    transition: 0.1s;
  }

  &:focus {
    background: ${(props) => props.theme.colors['purple-100']};
    border-color: ${(props) => props.theme.colors['purple-300']};
    border-width: 2px;
    border-style: solid;
    box-shadow: 0 0 0 0;
    outline: 0;
  }
`
