import React from 'react'
import * as S from './styles'
import profileSrc from '../../assets/profile.svg'

type Props = {
  isSmallHeader: boolean
}

const just = {
  type: 'just',
  velocity: 3,
}

export function RegistrationButton({ isSmallHeader }: Props) {
  return (
    <S.Wrapper transition={just} initial={{ y: -4 }} animate={{ y: isSmallHeader ? -9 : -4 }}>
      <img src={profileSrc} style={{ width: 14, marginLeft: 19, marginRight: 9 }} alt="register" />
      <p>Register</p>
    </S.Wrapper>
  )
}
