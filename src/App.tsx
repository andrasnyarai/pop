import React from 'react'
import { createGlobalStyle } from 'styled-components'

import { useYScrollPosition } from './hooks/useYScrollPosition'
import { Header } from './components/Header'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    font: normal normal bold 14px/20px Roboto;
  }
`

function App() {
  const { previous, current } = useYScrollPosition()

  const isSmallHeader = current > previous

  return (
    <>
      <GlobalStyle />
      <div style={{ height: 3000, backgroundColor: 'rebeccapurple' }}>
        <Header isSmallHeader={isSmallHeader} />
      </div>
    </>
  )
}

export default App
