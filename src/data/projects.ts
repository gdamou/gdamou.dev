export type Project = {
  title: string
  summary: string
  techs: string[]
  link?: string
  description?: string
  isComingSoon?: boolean
}

const projects: Project[] = [
  {
    title: 'Stream Soundboard',
    summary: 'An interactive soundboard for Twitch Streamers.',
    techs: ['Typescript', 'Fastify', 'React', 'Zod', 'PandaCSS'],
    description:
      '*Stream Soundboard* is an interactive Twitch extension that brings sound and video alerts to life during broadcasts.\nDeveloped in *TypeScript*, it employs *Fastify* as low scope backend framework and *Zod* for data validation.\nOn the frontend, *React* and *Vite* power the application, with *PandaCSS* ensuring a typesafe and stylish user interface.\nThe system is built for scale, ready to handle high traffic with low latency for seamless real-time interactions.\nStreamers link their soundboard to OBS via a browser source, with alerts powered through websockets for immediate audience engagement.',
    link: 'https://dashboard.twitch.tv/extensions/vztbpgp078b444w7vvuwxz2cmm85k1-0.0.1',
  },
  {
    title: 'Rep Tracker',
    summary: 'My personal app to track my weightlifting progression.',
    techs: ['Typescript', 'Fastify', 'React', 'TRPC', 'Zod', 'PandaCSS'],
    description:
      '*RepTracker* is a custom app for tracking my weightlifting progress.\nBuilt with TypeScript for type safety, it features a *Fastify* backend in a *pnpm monorepo*.\nThe frontend is crafted with *React*, *Vite* for build optimization, *Jotai* and *XState* for state management, and styled with *PandaCSS*.\nIt simplifies logging workouts, creating templates, and analyzing performance.',
    link: 'https://github.com/gdamou/reptracker',
  },
  {
    title: 'Pet Traveler',
    summary: 'App regrouping all the information about traveling with your pet.',
    techs: ['Typescript', 'React', 'Node', 'Fastify', 'PandaCSS'],
    isComingSoon: true,
  },
]

export default projects
