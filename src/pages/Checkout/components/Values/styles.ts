import styled from 'styled-components'

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
