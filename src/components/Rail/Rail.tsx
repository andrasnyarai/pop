import React, { useContext } from 'react'
import * as S from './styles'
import { easeInOut } from '../../transitions'
import { HeaderContext } from '../Header'

export function Rail() {
  const { isSmallHeader, isSmallScreen, isExtraSmallScreen, isMediumScreen, isLargeScreen } = useContext(HeaderContext)
  return (
    <S.Wrapper
      transition={easeInOut}
      initial={{ x: 0, y: -15 }}
      animate={isSmallHeader ? { x: 45, y: -14 } : { x: 0, y: -15 }}
    >
      {['All A-Z', 'Brexit', 'Climate', 'Copyright', 'Migration', 'Deb on hover']
        .concat(isLargeScreen ? ['Debate W', 'Debate X', 'Debate Y', 'Debate Z'] : [])
        .map((text, i) => {
          let lastIndexToVisible
          if (isLargeScreen) {
            lastIndexToVisible = 6
          }

          if (isMediumScreen) {
            lastIndexToVisible = 3
          }

          if (isSmallScreen) {
            lastIndexToVisible = 2
          }

          if (isExtraSmallScreen) {
            lastIndexToVisible = 1
          }

          const fadeAnimation = {
            transition: easeInOut,
            initial: { opacity: 1 },
            animate: { opacity: isSmallHeader && i > (lastIndexToVisible as number) ? 0 : 1 },
          }

          return (
            <S.RailItem key={text} {...fadeAnimation}>
              <div>{text}</div>
            </S.RailItem>
          )
        })}
    </S.Wrapper>
  )
}
