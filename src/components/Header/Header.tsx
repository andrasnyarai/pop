import React, { createContext } from 'react'

import logoSrc from '../../assets/logo.svg'
import titleSrc from '../../assets/title.svg'
import { RegistrationButton } from '../RegistrationButton'
import { SearchButton } from '../SearchButton'
import { useYScrollPosition } from '../../hooks/useYScrollPosition'
import { easeInOut } from '../../transitions'
import * as S from './styles'

export const HeaderContext = createContext({
  isSmallHeader: false,
})

export function Header() {
  const { previous, current } = useYScrollPosition()

  const isSmallHeader = current > previous

  return (
    <HeaderContext.Provider value={{ isSmallHeader }}>
      <S.Container transition={easeInOut} animate={{ height: isSmallHeader ? 50 : 125 }}>
        <S.Wrapper transition={easeInOut} initial={{ y: 30 }} animate={{ y: isSmallHeader ? 13 : 30 }}>
          <S.Img src={logoSrc} style={{ width: 25, marginRight: 5 }} />
          <S.Img src={titleSrc} transition={easeInOut} initial={{ y: 0 }} animate={{ y: isSmallHeader ? -60 : 0 }} />

          <SearchButton />
          <RegistrationButton />
        </S.Wrapper>
        <S.Rail
          transition={easeInOut}
          initial={{ x: 0, y: -15 }}
          animate={isSmallHeader ? { x: 45, y: -14 } : { x: 0, y: -15 }}
        >
          <S.RailItem>All A-Z</S.RailItem>
          <S.RailItem>Brexit</S.RailItem>
          <S.RailItem>Climate</S.RailItem>
          <S.RailItem>Copyright</S.RailItem>
          <S.RailItem>Migration</S.RailItem>
          <S.RailItem>Deb on hover</S.RailItem>
          <S.RailItem>Debate W</S.RailItem>
          <S.RailItem>Debate X</S.RailItem>
          <S.RailItem>Debate Y</S.RailItem>
          <S.RailItem>Debate Z</S.RailItem>
        </S.Rail>
      </S.Container>
    </HeaderContext.Provider>
  )
}
