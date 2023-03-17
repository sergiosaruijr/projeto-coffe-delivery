import styled from 'styled-components'

export const IntroContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: 5.88rem;
`
export const TextIntroContainer = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-family: 'Baloo 2';
    font-size: 2.62rem;
    font-weight: 800;
    line-height: 130%;
    color: ${(props) => props.theme['gray-800']};
  }
`

export const ImageCoffeIntroContainer = styled.div`
  display: flex;
  padding-left: 3.5rem;

  img {
    width: 29.75rem;
    height: 22.5rem;
  }
`
