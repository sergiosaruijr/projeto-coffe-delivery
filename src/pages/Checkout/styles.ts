import styled from 'styled-components'

// export const CheckoutContainer = styled.div`
//   width: 100%;
//   display: flex;
//   align-items: center;
//   padding-top: 5.87rem;
//   padding-left: 10rem;
//   padding-right: 10rem;
// `
export const CheckoutContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding-top: 5.87rem;
  padding-left: 10rem;
  padding-right: 10rem;
`

export const BorderContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const TitleCard = styled.h1`
  font-size: x-small;
  font-family: 'Baloo 2';
`

// export const FormAndPayContainer = styled.div`
//   background: ${(props) => props.theme.colors['purple-300']};
//   display: flex;
//   flex-direction: column;
//   width: 40rem;
//   height: 26.938rem;

//   h1 {
//     margin-top: -2.937rem;
//   }
// `

// export const CoffesSelectContainer = styled.div`
//   background: ${(props) => props.theme.colors['yellow-300']};
//   display: flex;
//   width: 28rem;
//   height: 31.125rem;
//   margin-left: 2rem;

//   h1 {
//     margin-top: -2.937rem;
//   }
// `

export const FormContentContainer = styled.div``

export const TextPayContentContainer = styled.div``

export const FormatPayContentContainer = styled.div``
