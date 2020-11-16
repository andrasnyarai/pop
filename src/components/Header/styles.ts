import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Container = styled(motion.header)`
  --padding: 25px;

  position: sticky;
  top: 0;
  height: 125px;
  background-color: white;
  padding: 0 var(--padding);

  @media (min-width: 800px) {
    --padding: 50px;
  }

  @media (min-width: 1000px) {
    --padding: 75px;
  }

  @media (min-width: 1200px) {
    --padding: 100px;
  }

  @media (min-width: 1400px) {
    --padding: 175px;
  }
`

export const Wrapper = styled(motion.div)`
  position: absolute;
  display: flex;
  z-index: 2;
  width: calc(100% - 2 * var(--padding));
`

export const Rail = styled(motion.div)`
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  z-index: 1;

  width: calc(100% - 2 * var(--padding));

  @media (min-width: 800px) {
    font: normal normal bold 14px/20px Roboto;
  }
`

export const RailItem = styled.div`
  color: #132f48;
  opacity: 0.5;
  cursor: pointer;

  :hover {
    opacity: 1;
  }
`

export const Img = styled(motion.img)``
