import React, { useContext } from 'react'
import * as S from './styles'
import profileSrc from '../../assets/profile.svg'
import { easeInOut } from '../../transitions'
import { HeaderContext } from '../Header'

export function RegistrationButton() {
  const { isSmallHeader } = useContext(HeaderContext)
  return (
    <S.Wrapper transition={easeInOut} initial={{ y: -4 }} animate={{ y: isSmallHeader ? -9 : -4 }}>
      <img src={profileSrc} style={{ width: 14, marginLeft: 19, marginRight: 9 }} alt="register" />
      <p>Register</p>
    </S.Wrapper>
  )
}
