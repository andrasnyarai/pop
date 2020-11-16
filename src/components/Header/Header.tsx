import React, { createContext } from 'react'

import logoSrc from '../../assets/logo.svg'
import titleSrc from '../../assets/title.svg'
import { RegistrationButton } from '../RegistrationButton'
import { SearchButton } from '../SearchButton'
import { useYScrollPosition } from '../../hooks/useYScrollPosition'
import { useWindowSize } from '../../hooks/useWindowSize'
import { easeInOut } from '../../transitions'
import * as S from './styles'
import { Rail } from '../Rail'

export const HeaderContext = createContext({
  isSmallHeader: false,

  isExtraSmallScreen: false,
  isSmallScreen: false,
  isMediumScreen: false,
  isLargeScreen: false,
})

export function Header() {
  const { previous, current } = useYScrollPosition()
  const { width } = useWindowSize()

  const isExtraSmallScreen = width <= 475
  const isSmallScreen = 475 < width && width <= 650
  const isMediumScreen = 650 < width && width <= 900
  const isLargeScreen = 900 < width

  const isSmallHeader = current > previous

  return (
    <HeaderContext.Provider value={{ isSmallHeader, isExtraSmallScreen, isSmallScreen, isMediumScreen, isLargeScreen }}>
      <S.Container transition={easeInOut} animate={{ height: isSmallHeader ? 50 : 125 }}>
        <S.Wrapper transition={easeInOut} initial={{ y: 30 }} animate={{ y: isSmallHeader ? 13 : 30 }}>
          <S.Img
            src={logoSrc}
            transition={easeInOut}
            initial={{ y: 5 }}
            animate={{ y: isSmallHeader ? 0 : 5 }}
            style={{ width: 25, marginRight: 5 }}
          />
          <S.Img
            src={titleSrc}
            transition={easeInOut}
            initial={{ y: isSmallHeader || isExtraSmallScreen ? -60 : 5 }}
            animate={{ y: isSmallHeader || isExtraSmallScreen ? -60 : 5 }}
          />

          <SearchButton />
          <RegistrationButton />
        </S.Wrapper>
        <Rail />
      </S.Container>
    </HeaderContext.Provider>
  )
}
