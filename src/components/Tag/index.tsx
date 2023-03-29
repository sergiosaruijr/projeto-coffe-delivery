import { TagContainer } from './styles'

// interface para pegar as tags
export function Tag() {
  return (
    <TagContainer>
      <div>
        <h4>Tradiocional</h4>
      </div>
      <div>
        <h4>com leite</h4>
      </div>
    </TagContainer>
  )
}

// temporario ate criar a tag com dinamismo
export function TagTradi() {
  return (
    <TagContainer>
      <div>
        <h4>Tradiocional</h4>
      </div>
    </TagContainer>
  )
}

export function TagTradiGelado() {
  return (
    <TagContainer>
      <div>
        <h4>Tradiocional</h4>
      </div>
      <div>
        <h4>Gelado</h4>
      </div>
    </TagContainer>
  )
}
