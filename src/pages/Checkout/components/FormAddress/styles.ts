import styled from 'styled-components'

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
