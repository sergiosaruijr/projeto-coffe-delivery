import styled from 'styled-components'

export const SuccessContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  padding-top: 2.5rem;
  padding-left: 10rem;
  padding-right: 10rem;
`
export const BorderMessage = styled.div`
  display: flex;
  flex-direction: column;
  width: 34.5rem;
  margin-top: -2.5rem;
`

export const MessageConfirmContainer = styled.div`
  display: flex;
  width: 22.1;
  margin-top: 5rem;
  h1 {
    font-size: ${(props) => props.theme.textSizes['title-title-l']};
    color: ${(props) => props.theme.colors['yellow-600']};
    font-weight: bold;
    font-family: 'Baloo 2';
  }
`
export const SubMessageConfirmContainer = styled.div`
  display: flex;
  width: 34.5rem;
  /* margin-top: 0.25rem; */
  margin-bottom: 2.5rem;

  p {
    font-size: ${(props) => props.theme.textSizes['text-regular-l']};
    color: ${(props) => props.theme.colors['gray-subtitle']};
  }
`
export const InfoDeliveryContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  /* margin-top: 2.5rem; */

  img {
    margin-left: 6.375rem;
    margin-top: -0.5rem;
  }
`
