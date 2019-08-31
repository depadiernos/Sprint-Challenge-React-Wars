
import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  margin: 1rem;
  padding: 0.2rem;
`

export default function({direction,currentPage, setCurrentPage}) {
  const handleClick = () => {
    if (direction === "previous") setCurrentPage(page => page-1)
    if (direction === "next") setCurrentPage(page => page+1)
  }

  const isPreviousDisabled = currentPage <= 1
  const isNextDisabled = currentPage >= 9
  return <Button onClick={handleClick} disabled={isPreviousDisabled || isNextDisabled}>{direction}</Button>
}