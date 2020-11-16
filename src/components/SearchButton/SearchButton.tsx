import React, { useEffect, useState, useRef, useContext } from 'react'
import * as S from './styles'
import searchSrc from '../../assets/search.svg'
import { easeInOut } from '../../transitions'
import { HeaderContext } from '../Header'

export function SearchButton() {
  const { isSmallHeader } = useContext(HeaderContext)
  const [isExpanded, setIsExpanded] = useState(!isSmallHeader)

  useEffect(() => {
    setIsExpanded(!isSmallHeader)
  }, [isSmallHeader])

  const inputRef = useRef(null)

  const onClick = () => {
    setIsExpanded(true)
    inputRef.current.focus()
  }

  return (
    <S.Wrapper
      transition={easeInOut}
      initial={{ width: 190, y: 0 }}
      animate={isExpanded ? { width: 190, y: isSmallHeader ? -5 : 0 } : { width: 36, y: -5 }}
    >
      <img src={searchSrc} style={{ width: 14 }} onClick={onClick} alt="search" />
      <S.Input
        transition={easeInOut}
        initial={{ opacity: 1 }}
        animate={{ opacity: isExpanded ? 1 : 0 }}
        placeholder="Search"
        ref={inputRef}
      ></S.Input>
    </S.Wrapper>
  )
}
