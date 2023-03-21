import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 90rem;
  height: calc(100vh);
  margin: 0 auto;
  padding-left: 10rem;
  padding-right: 10rem;
  /* padding-top: 2rem; */

  background: ${(props) => props.theme['white-back']};

  display: flex;
  flex-direction: column;
`
