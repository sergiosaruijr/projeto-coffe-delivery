import styled from 'styled-components'

export const HomeContainer = styled.div`
  /* background: ${(props) => props.theme.colors['purple-100']}; */
  color: ${(props) => props.theme.colors['yellow-300']};
  height: 85rem;
  width: 70rem;
  margin-bottom: 9rem;
  h1 {
    font-family: 'Baloo 2';
    font-size: 2rem;
    font-weight: 800;
    line-height: 130%;
    color: ${(props) => props.theme.colors['gray-title']};
    margin-bottom: 3.37rem;
  }
`

export const HomeCoffeeBorderContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  row-gap: 2.5rem;
  flex-wrap: wrap;
  /* overflow: auto; */
`
export const TagContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  margin-top: 1rem;
  margin-bottom: 1.25rem;
  flex-wrap: wrap;

  span {
    background: ${(props) => props.theme.colors['yellow-100']};
    color: ${(props) => props.theme.colors['yellow-600']};
    font-size: 0.875rem;
    text-transform: uppercase;
    padding: 0.25rem 0.5rem;
    font-weight: 700;
  }
`

export const HomeCoffeeContentContainer = styled.div`
  width: 16rem;
  height: 19.375rem;

  background: ${(props) => props.theme.colors['gray-card']};
  border-radius: 6px 36px 6px 36px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  h1 {
    font-size: 1.25rem;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }
  //tirar
  /* h4 {
    font-size: 0.625rem;
    padding: 0.75rem;
    text-transform: uppercase;
    color: ${(props) => props.theme.colors['yellow-600']};
  } */

  p {
    font-size: 0.875rem;
    color: ${(props) => props.theme.colors['gray-label']};
    padding-left: 1.25rem;
    padding-right: 1.25rem;
    text-align: center;
    padding-bottom: 2.06rem;
  }

  text {
    font-family: 'Baloo 2';
    color: ${(props) => props.theme.colors['gray-text']};
    font-size: 1.5rem;
    text {
      & {
        font-family: 'Roboto';
        font-size: 0.875rem;
      }
    }
  }
  //tirar
  img {
    position: absolute;
    bottom: 13.125rem;
    /* overflow-x: visible; */
  }

  //tirar
  div {
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    margin-top: 8rem;

    /* div {
      & {
        background: ${(props) => props.theme.colors['yellow-100']};
        margin-bottom: 8rem;
        width: 40%;
        height: 100%;
        border-radius: 10px;
        margin-left: 0.25rem;
      }
    } */
  }
`

export const HomeCoffeeCartFooterContainer = styled.footer`
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

// export const HomeCoffeeCartContainer = styled.button`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   //ver isso de px e rem
//   width: 2.375rem;
//   height: 38px;
//   border-radius: 38px;
//   border: 0 none;
//   background: ${(props) => props.theme['purple-600']};
//   color: ${(props) => props.theme['gray-card']};

//   &:focus {
//     box-shadow: 0 0 0 0;
//     outline: 0;
//     border: 0 none;
//   }

//   &:hover {
//     transition: 120ms;
//     background: ${(props) => props.theme['purple-300']};
//   }
// `
export const HomeCoffeeCartContainer = styled.div`
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
