import styled from 'styled-components'

export const BorderContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  row-gap: 2.5rem;
  flex-wrap: wrap;
`
export const CoffeeContentContainer = styled.div`
  width: 16rem;
  height: 19.375rem;

  background: ${(props) => props.theme.colors['gray-card']};
  border-radius: 6px 36px 6px 36px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  /* h1 {
    font-size: 1.25rem;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  } */
  /* 
  p {
    font-size: 0.875rem;
    color: ${(props) => props.theme.colors['gray-label']};
    padding-left: 1.25rem;
    padding-right: 1.25rem;
    text-align: center;
    padding-bottom: 2.06rem;
  } */

  /* text {
    font-family: 'Baloo 2';
    color: ${(props) => props.theme.colors['gray-text']};
    font-size: 1.5rem;
    text {
      & {
        font-family: 'Roboto';
        font-size: 0.875rem;
      }
    }
  } */

  img {
    position: absolute;
    bottom: 13.125rem;
    /* overflow-x: visible; */
  }

  div {
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    margin-top: 8rem;
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
export const NameCoffee = styled.h2`
  font-size: 1.25rem;
  font-family: 'Baloo 2';
  font-weight: bolder;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  color: ${(props) => props.theme.colors['gray-text']};
`
export const DescriptionCoffe = styled.p`
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors['gray-label']};
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  text-align: center;
  padding-bottom: 2.06rem;
`

export const CoffeeCartFooterContainer = styled.footer`
  display: flex;
  /* background: ${(props) => props.theme.colors['yellow-300']}; */
  color: ${(props) => props.theme.colors['gray-subtitle']};
  width: 13rem;
  height: 2.375rem;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin-bottom: 2rem;
`
export const TextPriceCoffee = styled.text`
  font-family: 'Baloo 2';
  color: ${(props) => props.theme.colors['gray-text']};
  font-size: 1.5rem;
  text {
    & {
      font-family: 'Roboto';
      font-size: 0.875rem;
    }
  }
`

export const CoffeeCartAndPriceContainer = styled.div`
  display: flex;
  /* background: ${(props) => props.theme.colors['gray-subtitle']}; */
  width: 7.375rem;
  height: 2.375rem;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin-bottom: 8rem;
  > button {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 0.5rem;
    //ver isso de px e rem
    width: 2.375rem;
    height: 2.375rem;
    border-radius: 6px;
    border: 0 none;
    background: ${(props) => props.theme.colors['purple-600']};
    color: ${(props) => props.theme.colors['gray-card']};

    &:focus {
      box-shadow: 0 0 0 0;
      outline: 0;
      border: 0 none;
    }

    &:hover {
      transition: 120ms;
      background: ${(props) => props.theme.colors['purple-300']};
    }
  }
`
