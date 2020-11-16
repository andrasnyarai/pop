import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Wrapper = styled(motion.div)`
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  z-index: 1;

  width: calc(100% - 2 * var(--padding));

  @media (max-width: 500px) {
    font: normal normal bold 12px/20px Roboto;
  }
`

export const RailItem = styled(motion.div)`
  color: #132f48;
  cursor: pointer;

  div {
    opacity: 0.5;
    :hover {
      opacity: 1;
    }
  }
`
