import styled from 'styled-components'

export const BorderCoffeeSelectionSContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* background: ${(props) => props.theme.colors['gray-label']}; */
  margin-left: 2rem;
`

export const CoffeeSelectContainer = styled.div`
  background: ${(props) => props.theme.colors['yellow-300']};
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
  flex-direction: column;
  justify-content: center;
  width: 23rem;
  height: 6.5rem;

  margin-bottom: 1.5rem;
  background-color: ${(props) => props.theme.colors['gray-card']};
  border-bottom: 1px solid ${(props) => props.theme.colors['gray-text']};
`

// Falta parte de dentro do coffee
export const ImageCoffeeContainer = styled.div`
  display: flex;
  width: 4rem;
  height: 4rem;
  background-color: ${(props) => props.theme.colors['gray-label']};
  align-items: center;
  justify-content: center;
`

export const InfoCoffeeContainer = styled.div`
  display: flex;
  width: 10.687rem;
  height: 3.812rem;
  background-color: ${(props) => props.theme.colors['gray-subtitle']};
  justify-content: space-between;
  align-items: center;
`

export const QuantityCoffeeContainer = styled.div`
  display: flex;
  width: 10.687rem;
  height: 3.812rem;
  background-color: ${(props) => props.theme.colors['gray-subtitle']};
  /* justify-content: space-between; */
  align-items: center;
`

export const ButtonQuantityContainer = styled.button`
  display: flex;
  width: 4.5rem;
  height: 2rem;
`

export const ButtonRemoveContainer = styled.button`
  width: 5.687rem;
  height: 2rem;
`

export const ValuesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 23rem;
  height: 5.75rem;
  /* background-color: ${(props) => props.theme.colors['gray-text']}; */
`
export const ValueItensContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 23rem;
  height: 1.312rem;
  margin-bottom: 0.75rem;
  background-color: ${(props) => props.theme.colors['gray-card']};
`
export const ValueDeliveryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 23rem;
  height: 1.312rem;
  margin-bottom: 0.75rem;
  background-color: ${(props) => props.theme.colors['gray-card']};
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
  }
`
