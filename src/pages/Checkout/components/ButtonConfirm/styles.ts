import styled from 'styled-components'

export const ButtonConfirmContainer = styled.button`
  display: flex;
  width: 23rem;
  height: 2.875rem;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  background: ${(props) => props.theme.colors['yellow-300']};
  border: none;
  margin-top: 1.5rem;
  margin-bottom: 2.5rem;
  box-shadow: 0 0 0 0;
  outline: 0;

  h1 {
    font-size: ${(props) => props.theme.textSizes['components-button-g']};
    color: ${(props) => props.theme.colors.white};
    text-transform: uppercase;
  }

  &:hover {
    background: ${(props) => props.theme.colors['yellow-600']};
    transition: 0.1s;
  }

  a {
    box-shadow: 0 0 0 0;
    outline: 0;
    text-decoration: none;
  }
`
