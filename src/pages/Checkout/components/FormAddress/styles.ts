import styled from 'styled-components'

// export const FormBorderContent = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   flex-wrap: wrap;
//   position: relative;
//   width: 35rem;
//   height: 12.5rem;
//   margin-top: 2rem;
//   font-size: ${(props) => props.theme.textSizes['text-regular-s']};
//   column-gap: 0.75rem;
//   row-gap: 1rem;

//   input {
//     font-size: ${(props) => props.theme.textSizes['text-regular-s']};
//     background: ${(props) => props.theme.colors['gray-input']};
//     height: 2.625rem;
//     border-radius: 4px;
//     border: 0;
//     padding-left: 0.75rem;
//   }

//   .street {
//     width: 35rem;
//   }

//   .number {
//     width: 12.5rem;
//   }

//   .complement {
//     width: 21.75rem;
//   }

//   .discrict {
//     width: 12.5rem;
//   }

//   .city {
//     width: 17.25rem;
//   }

//   .uf {
//     width: 3.75rem;
//   }
// `

export const FormBorderContent = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 12.5rem 17.25rem 3.75rem;
  font-size: ${(props) => props.theme.textSizes['text-regular-s']};
  column-gap: 0.75rem;
  row-gap: 1rem;
  grid-auto-flow: dense;
  margin-bottom: 2.5rem;
  margin-left: 5rem;

  input {
    font-size: ${(props) => props.theme.textSizes['text-regular-s']};
    background: ${(props) => props.theme.colors['gray-input']};
    height: 2.625rem;
    border-radius: 4px;
    border: 0;
    padding-left: 0.75rem;
  }

  .cep {
    grid-column: span 3;
    max-width: 12.5rem;
  }
  .street {
    grid-column: span 3;
  }

  .complement {
    grid-column: span 2;
  }
`
