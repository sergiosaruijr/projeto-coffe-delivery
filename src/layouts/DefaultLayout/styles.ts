import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 90rem;
  height: calc(100vh);
  margin: 0 auto;
  overflow-x: hidden;

  background: ${(props) => props.theme.colors['white-back']};

  display: flex;
  flex-direction: column;

  &::-webkit-scrollbar {
    display: none;
  }
`
