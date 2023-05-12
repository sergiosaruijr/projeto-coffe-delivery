import styled from 'styled-components'

export const BorderFormAndPayContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const FormContainer = styled.div`
  background: ${(props) => props.theme.colors['gray-card']};
  display: flex;
  border-radius: 6px;
  flex-direction: column;
  align-items: center;
  width: 40rem;
  margin-top: 0.9375rem;
  gap: 2rem;
`

export const BorderText = styled.div`
  display: flex;
  /* background: ${(props) => props.theme.colors['yellow-100']}; */
  width: 35rem;
  height: 2.75rem;
  margin-top: 2.5rem;
`

// export const PayContainer = styled.div`
//   background: ${(props) => props.theme.colors['gray-card']};
//   display: flex;
//   border-radius: 6px;
//   flex-direction: column;
//   align-items: center;
//   width: 40rem;
//   height: 12.937rem;
//   margin-top: 0.75rem;
// `

// export const PayMethodContainer = styled.div`
//   display: flex;
//   width: 35rem;
//   height: 3.187rem;
//   margin-top: 2rem;
//   align-items: center;
//   justify-content: space-between;
// `
// export const PayMethodButton = styled.button`
//   display: inline-flex;
//   align-items: center;
//   justify-content: center;
//   width: 11.167rem;
//   height: 3.187rem;
//   background: ${(props) => props.theme.colors['gray-button']};
//   border-radius: 6px;
//   border: none;
//   border-color: ${(props) => props.theme.colors['gray-button']};
//   margin-bottom: 1rem;

//   p {
//     font-size: ${(props) => props.theme.textSizes['components-button-s']};
//     text-transform: uppercase;
//     padding-left: 0.75rem;
//   }

//   &:hover {
//     background: ${(props) => props.theme.colors['gray-hover']};
//     transition: 0.1s;
//   }

//   &:focus {
//     background: ${(props) => props.theme.colors['purple-100']};
//     border-color: ${(props) => props.theme.colors['purple-300']};
//     border-width: 2px;
//     border-style: solid;
//     box-shadow: 0 0 0 0;
//     outline: 0;
//   }
// `
