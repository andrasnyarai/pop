import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Wrapper = styled(motion.div)`
  border-radius: 54px;
  background-color: #0096ff;
  color: white;
  width: 127px;
  height: 43px;

  position: absolute;
  right: 0;

  font: normal normal bold 16px/16px Roboto;
  display: flex;
  align-items: center;
  cursor: pointer;
`
