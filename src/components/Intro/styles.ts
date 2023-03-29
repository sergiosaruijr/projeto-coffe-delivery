import styled from 'styled-components'

export const IntroContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: 5.87rem;
`
export const TextIntroContainer = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-family: 'Baloo 2';
    font-size: 3rem;
    font-weight: 800;
    line-height: 130%;
    color: ${(props) => props.theme['gray-title']};
  }

  p {
    font-family: 'Roboto';
    font-size: 1.25rem;
    margin-top: 1rem;
    color: ${(props) => props.theme['gray-subtitle']};
  }
`

export const ImageCoffeIntroContainer = styled.div`
  display: flex;
  padding-left: 3.5rem;
  padding-bottom: 5.75rem;

  img {
    width: 29.75rem;
    height: 22.5rem;
  }
`

export const TextDetailsIntroContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  padding-top: 4rem;
  /* justify-content: space-between; */
  align-items: center;
  margin-bottom: 6.75rem;

  p {
    font-size: 1rem;
    padding-bottom: 1.1rem;
    padding-right: 2.5rem;

    /*As distancias do projeto
    padding-bottom: 1.1rem;
    padding-left: 0.75rem;
    padding-right: 2.5rem; */

    img {
      /* margin-top: 2rem; */
      padding-top: 1rem;
    }
  }
`
// export const TextDetailsIntroContainer = styled.div`
//   width: 100%;
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   row-gap: 1.25rem;
//   margin-top: 4.125rem;

//   p {
//     font-size: 1rem;
//     padding-bottom: 1.1rem;
//     padding-right: 2.5rem;

//     /*As distancias do projeto
//     padding-bottom: 1.1rem;
//     padding-left: 0.75rem;
//     padding-right: 2.5rem; */

//     img {
//       /* margin-top: 2rem; */
//     }
//   }
// `
