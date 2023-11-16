import { formatText } from '@/utils/format'
import { useRef } from 'react'
import { css } from 'styled-system/css'
import { styled } from 'styled-system/jsx'

type ProjectDescriptionProps = {
  expandedCard: boolean
  description: string
  link: string
}

export const ProjectDescription = ({ expandedCard, description, link }: ProjectDescriptionProps) => {
  const descriptionRef = useRef<HTMLDivElement>(null)

  const descriptionStyles = css({
    cursor: 'default',
    borderTop: '1px solid',
    borderColor: 'neutral.900',
    maxH: '500px',
    mt: expandedCard ? '3' : '0',
    pt: expandedCard ? '3' : '0',
    w: 'full',
    fontSize: 'sm',
    lineHeight: '2.5',
    opacity: expandedCard ? '1' : '0',
    overflow: 'hidden',
    transition: 'all 400ms ease-out',
  })

  return (
    <div
      ref={descriptionRef}
      className={descriptionStyles}
      style={{
        maxHeight: expandedCard
          ? `${descriptionRef.current ? descriptionRef.current.scrollHeight + 100 : 500}px`
          : '0px',
      }}
    >
      <styled.p dangerouslySetInnerHTML={{ __html: formatText(description) }} />
      <styled.a
        className="group"
        display="flex"
        mt="2"
        color="secondary"
        fontWeight="semibold"
        fontSize="sm"
        alignItems="center"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        View project
        <styled.svg
          transition="all 200ms ease-out"
          ml="2"
          className={css({
            _groupHover: {
              transform: 'translateX(5px) translateY(-2px)',
            },
          })}
          w="18px"
          h="18px"
          viewBox="0 0 18 18"
          fill="none"
        >
          <path d="M5.25 12.75L12.75 5.25" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5.25 5.25H12.75V12.75" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
        </styled.svg>
      </styled.a>
    </div>
  )
}
