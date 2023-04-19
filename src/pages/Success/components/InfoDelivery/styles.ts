import styled from 'styled-components'

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
