import type { Project } from '@/data/projects'
import { ProjectCardDesktop } from './project/desktop/ProjectCardDesktop'
import { ProjectCardMobile } from './project/mobile/ProjectCardMobile'

export const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <>
      <ProjectCardDesktop display="none" sm={{ display: 'block' }} project={project} />
      <ProjectCardMobile sm={{ display: 'none' }} project={project} />
    </>
  )
}
