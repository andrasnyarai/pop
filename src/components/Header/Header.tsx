import React from 'react'

import logoSrc from '../../logo.svg'
import titleSrc from '../../title.svg'
import { RegistrationButton } from '../RegistrationButton'
import { SearchButton } from '../SearchButton'
import * as S from './styles'

type Props = {
  isSmallHeader: boolean
}

const just = {
  type: 'just',
  velocity: 3,
}

export function Header({ isSmallHeader }: Props) {
  return (
    <S.Container transition={just} animate={{ height: isSmallHeader ? 50 : 125 }}>
      <S.Wrapper transition={just} initial={{ y: 30 }} animate={{ y: isSmallHeader ? 13 : 30 }}>
        <S.Img src={logoSrc} style={{ width: 25 }} />
        <S.Img src={titleSrc} transition={just} initial={{ y: 0 }} animate={{ y: isSmallHeader ? -60 : 0 }} />
        <div />
        <SearchButton />
        <RegistrationButton />
      </S.Wrapper>
      <S.Rail
        transition={just}
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
  )
}
