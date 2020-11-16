import { useEffect, useRef, useState } from 'react'
import throttle from 'lodash.throttle'

function positive(num: number): number {
  return Math.max(0, num)
}

export function useYScrollPosition() {
  const [position, setPosition] = useState({ previous: window.pageYOffset, current: window.pageYOffset })

  const isMounted = useRef(false)

  useEffect(() => {
    const handleScroll = () => {
      setPosition((previousPosition) => ({
        previous: isMounted.current ? previousPosition.current : positive(window.pageYOffset),
        current: positive(window.pageYOffset),
      }))

      if (!isMounted.current) {
        isMounted.current = true
      }
    }

    window.addEventListener('scroll', throttle(handleScroll, 300))

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return position
}
