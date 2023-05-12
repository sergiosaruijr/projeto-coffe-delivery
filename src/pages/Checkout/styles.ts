import styled from 'styled-components'

export const CheckoutContainer = styled.form`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding-top: 2.5rem;
  padding-left: 10rem;
  padding-right: 10rem;
`

export const TitleCard = styled.h1`
  font-size: ${(props) => props.theme.textSizes['title-title-xs']};
  font-family: 'Baloo 2';
  color: ${(props) => props.theme.colors['gray-title']};
`
export const BorderText = styled.div`
  display: flex;
  /* background: ${(props) => props.theme.colors['yellow-100']}; */
  width: 35rem;
  height: 2.75rem;
  margin-top: 2.5rem;
`
