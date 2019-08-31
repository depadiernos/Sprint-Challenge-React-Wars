import React from 'react'
import CharacterCard from './CharacterCard'
import styled from 'styled-components'

const CharacterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`


export default function ({ characters }) {
  return <CharacterContainer>
    {(characters) && (characters.results) && characters.results.map((character, index) => {
      return <CharacterCard key={index} character={character} />
    })}
  </CharacterContainer>
}