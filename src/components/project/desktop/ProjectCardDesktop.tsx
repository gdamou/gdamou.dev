import type { Project } from '@/data/projects'
import { formatTechs, formatText } from '@/utils/format'
import { useRef, useState } from 'react'
import { css, cva } from 'styled-system/css'
import type { HTMLStyledProps } from 'styled-system/jsx'
import { HStack, Stack, styled } from 'styled-system/jsx'
import { ProjectDescription } from './ProjectDescription'

export const ProjectCardDesktop = ({ project, ...props }: { project: Project } & HTMLStyledProps<'div'>) => {
  const { title, summary, techs, description, link, isComingSoon } = project
  const [expandedCard, setExpandedCard] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  const desktopCardStyles = cva({
    base: {
      w: 'full',
      p: 4,
      bgColor: 'background',
      rounded: 'md',
      borderColor: 'neutral.700',
      borderWidth: '1px',
    },
    variants: {
      expandableCard: {
        true: {
          transition: 'all 500ms',
          _hover: {
            borderColor: 'neutral.400',
          },
          _expanded: {
            borderColor: 'neutral.400',
          },
        },
      },
    },
  })

  return (
    <styled.div
      {...props}
      ref={cardRef}
      role="button"
      aria-expanded={expandedCard}
      className={desktopCardStyles({ expandableCard: !isComingSoon })}
    >
      <HStack
        onClick={() => setExpandedCard(!expandedCard)}
        w="full"
        cursor={isComingSoon ? 'default' : 'pointer'}
        borderBottom="1px solid neutral.500"
      >
        <HStack justifyContent="space-between" w="full">
          <Stack gap={1}>
            <styled.p fontSize="md">{title}</styled.p>
            <styled.p display="none" fontSize="xs" opacity="0.8" md={{ display: 'block' }}>
              {summary}
            </styled.p>
          </Stack>
          <styled.p fontSize="xs" fontStyle="italic">
            {formatTechs(techs)}
          </styled.p>
        </HStack>
        {isComingSoon ? (
          <styled.p w="fit" rounded="md" bgColor="neutral.900" px="4" py="1">
            Soon
          </styled.p>
        ) : (
          <Hamburger expandedCard={expandedCard} />
        )}
      </HStack>

      {description && link && <ProjectDescription expandedCard={expandedCard} description={description} link={link} />}
    </styled.div>
  )
}

const Hamburger = ({ expandedCard }: { expandedCard: boolean }) => {
  const hamburgerStyles = css({
    w: '20px',
    h: '20px',
    ml: '5',
    transform: 'rotate(0deg)',
  })

  const spanStyles = cva({
    base: {
      display: 'block',
      pos: 'absolute',
      left: '0',
      h: '2px',
      w: '100%',
      bg: 'white',
      opacity: 1,
      transform: 'rotate(0deg)',
      transition: '.25s ease-in-out',
    },
    variants: {
      bars: {
        first: {
          top: expandedCard ? '8px' : '0px',
          left: expandedCard ? '50%' : '0',
          w: expandedCard ? '0%' : '100%',
        },
        second: {
          top: '8px',
          transform: expandedCard ? 'rotate(45deg)' : 'rotate(0deg)',
        },
        third: {
          top: '8px',
          transform: expandedCard ? 'rotate(-45deg)' : 'rotate(0deg)',
        },
        fourth: {
          top: expandedCard ? '18px' : '16px',
          left: expandedCard ? '50%' : '0',
          w: expandedCard ? '0%' : '100%',
        },
      },
    },
  })

  return (
    <styled.div className={hamburgerStyles}>
      <span className={spanStyles({ bars: 'first' })} />
      <span className={spanStyles({ bars: 'second' })} />
      <span className={spanStyles({ bars: 'third' })} />
      <span className={spanStyles({ bars: 'fourth' })} />
    </styled.div>
  )
}
