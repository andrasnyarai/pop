import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

import logo from './logo.svg'

import { useYScrollPosition } from './hooks/useYScrollPosition'

function App() {
  const { previous, current } = useYScrollPosition()

  const shouldShrinkHeader = current > previous

  return (
    <div style={{ height: '3000px' }}>
      <motion.header
        transition={{ delay: 0.2 }}
        animate={{ height: shouldShrinkHeader ? '10px' : '50px' }}
        style={{ height: '50px', backgroundColor: 'red', position: 'sticky', top: 0 }}
      >
        imba header
      </motion.header>
    </div>
  )
}

export default App
