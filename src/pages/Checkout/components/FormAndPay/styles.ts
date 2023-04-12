import styled from 'styled-components'

export const BorderFormAndPayContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const FormContainer = styled.div`
  background: ${(props) => props.theme.colors['gray-card']};
  display: flex;
  border-radius: 6px;
  flex-direction: column;
  align-items: center;
  width: 40rem;
  height: 23.25rem;
  margin-top: 0.9375rem;
  input {
    font-size: ${(props) => props.theme.textSizes['text-regular-s']};
    background: ${(props) => props.theme.colors['gray-input']};
    height: 2.625rem;
    border-radius: 4px;
    border: 0;
    padding-left: 0.75rem;
  }
`

export const BorderText = styled.div`
  display: flex;
  /* background: ${(props) => props.theme.colors['yellow-100']}; */
  width: 35rem;
  height: 2.75rem;
  margin-top: 2.5rem;
`
export const FormBorderContent = styled.div`
  display: flex;
  /* position: relative; */
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 35rem;
  height: 12.5rem;
  margin-top: 2rem;
  font-size: ${(props) => props.theme.textSizes['text-regular-s']};
  column-gap: 0.75rem;
  row-gap: 1rem;
`
export const ZipCode = styled.input`
  display: flex;
  width: 12.5rem;
`

export const StreetName = styled.input`
  display: flex;
  width: 35rem;
`

export const NumberEndress = styled.input`
  display: flex;
  width: 12.5rem;
`

export const Complement = styled.input`
  display: flex;
  width: 21.75rem;
`

export const District = styled.input`
  display: flex;
  width: 12.5rem;
`

export const City = styled.input`
  display: flex;
  width: 17.25rem;
`

export const State = styled.input`
  display: flex;
  width: 3.75rem;
`

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
  display: flex;
  width: 35rem;
  height: 3.187rem;
  margin-top: 2rem;
  align-items: center;
  justify-content: space-between;
`
export const PayMethodButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 11.167rem;
  height: 3.187rem;
  background: ${(props) => props.theme.colors['gray-button']};
  border-radius: 6px;
  border: none;
  border-color: ${(props) => props.theme.colors['gray-button']};

  p {
    font-size: ${(props) => props.theme.textSizes['components-button-s']};
    text-transform: uppercase;
    padding-left: 0.75rem;
  }

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
