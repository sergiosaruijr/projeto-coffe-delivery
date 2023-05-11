import styled from 'styled-components'

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  position: relative;
  > p {
    color: ${(props) => props.theme.colors['red-error']};
  }
`

export const InputStyled = styled.input`
  flex: 1;
  background: none;
  border: none;
  padding: 0 0.75rem;
  height: 100%;
  font-size: 0.75rem;
  color: ${(props) => props.theme.colors['gray-text']};
  &::placeholder {
    color: ${(props) => props.theme.colors['gray-label']};
  }
`
export const InputStyleContainer = styled.div`
  height: 2.625rem;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.colors['gray-button']};
  background: ${(props) => props.theme.colors['gray-input']};
  transition: 0.4s;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* overflow: hidden; */
  &:focus {
    border-color: ${(props) => props.theme.colors['yellow-600']};
  }

  color: ${(props) => props.theme.colors['gray-text']};
  font-size: 0.75rem;
  padding: 0.75rem;

  &::placeholder {
    color: ${(props) => props.theme.colors['gray-label']};
  }
`
