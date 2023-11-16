import { useRef } from 'react'
import { css } from 'styled-system/css'
import { styled } from 'styled-system/jsx'

export const EarthBackground = () => {
  const earthRef = useRef<HTMLImageElement>(null)

  const earthContainerStyles = css({
    position: 'fixed',
    bottom: '0',
    left: '0',
    w: '200vw',
    h: '50vh',
    opacity: '0.1',
    lg: {
      top: '0',
      right: '0',
      h: '100vh',
      w: 'full',
    },
  })
  return (
    <div className={earthContainerStyles}>
      <picture>
        <source srcSet="/earth.webp" type="image/webp" />
        <source srcSet="/earth.png" type="image/png" />
        <styled.img
          ref={earthRef}
          objectFit="cover"
          w="full"
          animation="spin 250s infinite linear"
          lg={{
            animation: 'spin 500s infinite linear',
          }}
          src="/earth.png"
        />
      </picture>

      <styled.div
        position="absolute"
        bottom="-30%"
        zIndex="-1"
        h="120%"
        w={earthRef.current?.offsetWidth ?? '100%'}
        rounded="full"
        bgColor="secondary"
        filter="blur(100px)"
      />
    </div>
  )
}
