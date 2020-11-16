import React, { useState, useRef } from 'react'
import * as S from './styles'
import searchSrc from '../../assets/search.svg'
import { easeInOut } from '../../transitions'

type Props = {
  isSmallHeader: boolean
}

export function SearchButton({ isSmallHeader }: Props) {
  const [isExpanded, setIsExpanded] = useState(!isSmallHeader)

  const inputRef = useRef(null)

  const focusInput = () => {
    inputRef?.current.focus()
  }

  return (
    <S.Wrapper
      transition={easeInOut}
      initial={{ width: 190, y: 0 }}
      animate={isSmallHeader ? { width: 36, y: -5 } : { width: 190, y: 0 }}
    >
      <img src={searchSrc} style={{ width: 14 }} alt="search" onClick={focusInput} />
      <S.Input
        transition={easeInOut}
        initial={{ opacity: 1 }}
        animate={{ opacity: isSmallHeader ? 0 : 1 }}
        placeholder="Search"
        ref={inputRef}
      ></S.Input>
    </S.Wrapper>
  )
}
