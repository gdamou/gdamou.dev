import type { Project } from '@/data/projects'
import { css } from 'styled-system/css'
import { Stack, styled } from 'styled-system/jsx'
import type { HTMLStyledProps } from 'styled-system/types'

export const ProjectCardMobile = ({ project, ...props }: { project: Project } & HTMLStyledProps<'a'>) => {
  const { title, summary, link, isComingSoon } = project

  const mobileCardStyles = css({
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'space-between',
    w: 'full',
    p: 4,
    bgColor: 'background',
    rounded: 'md',
    borderColor: 'neutral.700',
    borderWidth: '1px',
  })

  return (
    <styled.a {...props} className={mobileCardStyles} href={link} target="_blank" rel="noopener noreferrer">
      <Stack gap={1}>
        <styled.p fontSize="md">{title}</styled.p>
        <styled.p fontSize="xs" opacity="0.8">
          {summary}
        </styled.p>
      </Stack>
      {isComingSoon ? (
        <styled.p w="fit" h="fit" rounded="md" bgColor="neutral.900" ml="5" px="4" py="1">
          Soon
        </styled.p>
      ) : (
        link && (
          <styled.svg sm={{ display: 'none' }} w="18px" h="18px" viewBox="0 0 18 18" fill="none">
            <path d="M5.25 12.75L12.75 5.25" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M5.25 5.25H12.75V12.75" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
          </styled.svg>
        )
      )}
    </styled.a>
  )
}
