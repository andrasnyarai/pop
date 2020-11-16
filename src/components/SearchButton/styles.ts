import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Wrapper = styled(motion.div)`
  width: 190px;
  height: 36px;
  border-radius: 60px;
  padding-left: 11px;
  background-color: #e6ecf0;

  display: flex;
  position: absolute;
  right: 150px;

  overflow: hidden;
  cursor: pointer;
`

export const Input = styled(motion.input)`
  width: 83%;
  background-color: #e6ecf0;
  height: 100%;
  padding-left: 10px;

  outline: none;
  border: none;
  box-shadow: none;

  ::placeholder {
    color: #b8c0c8;
  }
`
