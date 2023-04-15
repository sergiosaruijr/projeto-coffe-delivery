import styled from 'styled-components'

export const BorderCoffeeSelectionContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* background: ${(props) => props.theme.colors['gray-label']}; */
  margin-left: 2rem;
  img {
    width: 4rem;
    height: 4rem;
  }
`

export const CoffeeSelectContainer = styled.div`
  background: ${(props) => props.theme.colors['gray-card']};
  display: flex;
  flex-direction: column;
  width: 28rem;
  height: 31.125rem;
  margin-top: 0.9375rem;
  align-items: center;
  border-radius: 6px 36px 6px 36px;
  padding-top: 2.5rem;
`
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

export const ValuesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 23rem;
  height: 5.75rem;
  /* background-color: ${(props) => props.theme.colors['gray-text']}; */
`
export const ValueItensAndDeliveryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 23rem;
  height: 1.312rem;
  margin-bottom: 0.75rem;
  background-color: ${(props) => props.theme.colors['gray-card']};
  p {
    font-size: ${(props) => props.theme.textSizes['text-regular-s']};
    color: ${(props) => props.theme.colors['gray-text']};
  }
`

export const ValueTotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 23rem;
  height: 2.5rem;
  margin-bottom: 1.5rem;
  background-color: ${(props) => props.theme.colors['gray-card']};

  p {
    font-size: ${(props) => props.theme.textSizes['text-bold-l']};
    color: ${(props) => props.theme.colors['gray-subtitle']};
    font-weight: bold;
  }
`

export const ButtonConfirmContainer = styled.button`
  display: flex;
  width: 23rem;
  height: 2.875rem;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  background: ${(props) => props.theme.colors['yellow-300']};
  border: none;
  margin-top: 1.5rem;
  box-shadow: 0 0 0 0;
  outline: 0;

  h1 {
    font-size: ${(props) => props.theme.textSizes['components-button-g']};
    color: ${(props) => props.theme.colors.white};
    text-transform: uppercase;
  }

  &:hover {
    background: ${(props) => props.theme.colors['yellow-600']};
    transition: 0.1s;
  }

  a {
    box-shadow: 0 0 0 0;
    outline: 0;
    text-decoration: none;
  }
`
