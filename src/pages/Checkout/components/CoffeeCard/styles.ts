import styled from 'styled-components'

export const CardCoffeeBorder = styled.div`
  display: flex;
  /* flex-direction: column; */
  justify-content: space-between;
  align-items: center;
  width: 23rem;
  height: 6.5rem;

  margin-bottom: 1.5rem;
  background-color: ${(props) => props.theme.colors['gray-card']};
  border-bottom: 1px solid ${(props) => props.theme.colors['gray-button']};
`

// Falta parte de dentro do coffee
export const BorderInfoAndQuantity = styled.div`
  display: flex;
  flex-direction: column;
  width: 10.687rem;
  height: 3.812rem;
  margin-left: 1.25rem;
  /* background: ${(props) => props.theme.colors['purple-300']}; */
`
export const NameCoffeeContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.colors['gray-subtitle']};
  font-size: ${(props) => props.theme.textSizes['text-regular-m']};
  height: 1.312rem;
  margin-top: -1rem;
`
export const ImageAndInfoBorder = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const ImageCoffeeContainer = styled.div`
  width: 4rem;
  height: 4rem;
  /* background-color: ${(props) => props.theme.colors['gray-label']}; */
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5rem;
  margin-top: -1.5rem;
  margin-left: 0.25rem;
`

export const BorderQuantityCoffee = styled.div`
  display: flex;
  width: 10.687rem;
  height: 3.812rem;
  /* background-color: ${(props) => props.theme.colors['gray-hover']}; */
  /* justify-content: space-between; */
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`

export const ButtonBorderContainer = styled.div`
  div {
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
  }
`

export const ButtonRemoveContainer = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 5.687rem;
  height: 2rem;
  background: ${(props) => props.theme.colors['gray-button']};
  border-radius: 6px;
  border: none;
  border-color: ${(props) => props.theme.colors['gray-button']};

  p {
    font-size: ${(props) => props.theme.textSizes['components-button-s']};
    text-transform: uppercase;
    padding-left: 0.25rem;
  }

  &:hover {
    background: ${(props) => props.theme.colors['gray-hover']};
    transition: 0.1s;
  }

  &:focus {
    background: ${(props) => props.theme.colors['purple-100']};
    border-color: ${(props) => props.theme.colors['purple-300']};
    border-width: 2px;
    border-style: solid;
    box-shadow: 0 0 0 0;
    outline: 0;
  }
`

export const ValueIndividualCoffeeContainer = styled.div`
  display: flex;
  height: 1.312rem;
  margin-bottom: 4.5rem;
  margin-right: 0.25rem;
  p {
    font-size: ${(props) => props.theme.textSizes['text-bold-m']};
    font-weight: bold;
    color: ${(props) => props.theme.colors['gray-text']};
  }
`
