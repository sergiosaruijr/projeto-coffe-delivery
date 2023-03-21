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
    color: ${(props) => props.theme['gray-800']};
  }

  p {
    font-family: 'Roboto';
    font-size: 1.25rem;
    margin-top: 1rem;
    color: ${(props) => props.theme['gray-700']};
  }
`

export const ImageCoffeIntroContainer = styled.div`
  display: flex;
  padding-left: 3.5rem;
  /* margin-bottom: 5.75rem; */

  img {
    width: 29.75rem;
    height: 22.5rem;
  }
`

export const TextDetailsIntroContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  padding-top: 4.125rem;

  p {
    font-size: 1rem;
  }

  img {
  }

  div {
    background: ${(props) => props.theme['yellow-600']};
    border-radius: 999px;
    width: 15%;
    display: flex;
    justify-content: center;
    border-top: 3px solid transparent;
    border-bottom: 3px solid transparent;
  }
`
