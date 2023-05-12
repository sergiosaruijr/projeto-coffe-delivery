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
export const BorderInfoDelivery = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center;
  justify-content: center; */
  width: 32.875rem;
  height: 16.875rem;
  padding: 2.5rem;
  background: ${(props) => props.theme.colors['white-back']};

  --gradient: linear-gradient(
    to right,
    rgb(226 212 92/ 1),
    rgb(149 114 252 / 1)
  );

  /* border: double 5px transparent;
  border-image: var(--gradient) 1; */
  /* background-origin: border-box; */
  /* background-clip: content-box, border-box; */

  border-radius: 6px 36px 6px 36px;
  background: linear-gradient(#fff, #fff) padding-box,
    linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%) border-box;
  border: 2px solid transparent;
`

export const BorderInfoContent = styled.div`
  height: 2.625rem;
  margin-top: 2rem;

  &:first-child {
    margin-top: 0;
  }
`
