import styled from 'styled-components'

export const TagContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  width: 13rem;
  height: 1.312rem;
  margin-top: 8rem;

  h4 {
    font-size: 0.625rem;
    /* padding: 0.75rem; */
    text-transform: uppercase;
    color: ${(props) => props.theme['yellow-600']};
  }
  > div {
    background: ${(props) => props.theme['yellow-100']};
    margin-bottom: 8rem;
    width: 40%;
    height: 100%;
    border-radius: 10px;
    margin-left: 0.25rem;
  }
`
