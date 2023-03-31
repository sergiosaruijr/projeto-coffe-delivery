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
    color: ${(props) => props.theme.colors['gray-title']};
  }

  text {
    font-family: 'Roboto';
    font-size: 1.25rem;
    margin-top: 1rem;
    color: ${(props) => props.theme.colors['gray-subtitle']};
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
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 4.125rem;
  margin-bottom: 6.75rem;
  row-gap: 1.25rem;
  text {
    font-size: 1rem;
  }
`
export const Tag = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  width: 13rem;
  height: 1.312rem;
  margin-top: 8rem;

  span {
    font-size: 0.625rem;
    font-weight: bold;
    text-transform: uppercase;
    color: ${(props) => props.theme.colors['yellow-600']};
    background: ${(props) => props.theme.colors['yellow-100']};
    padding: 0.25rem 0.5rem;
    margin-left: 0.25rem;
    border-radius: 10px;
  }
`
