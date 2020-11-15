import { useEffect, useRef, useState } from 'react'

export function useYScrollPosition() {
  const [position, setPosition] = useState({ previous: 0, current: 0 })

  const isMounted = useRef(false)

  useEffect(() => {
    const handleScroll = () => {
      setPosition((previousPosition) => ({
        previous: isMounted.current ? previousPosition.current : window.pageYOffset,
        current: window.pageYOffset,
      }))

      if (!isMounted.current) {
        isMounted.current = true
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return position
}
