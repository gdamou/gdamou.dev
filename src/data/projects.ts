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
    title: 'Otom AI',
    summary: 'A Chrome extension to analyze LinkedIn profiles and chat with their data via AI.',
    techs: ['Typescript', 'React', 'Effect', 'WXT', 'Gemini', 'PostgreSQL', 'PandaCSS'],
    description:
      '*Otom AI* is a Chrome extension that analyzes LinkedIn profiles and lets you chat with their data through AI.\nThe backend is built with *Effect* for service composition and dependency injection, paired with *Gemini* for AI generation and *PostgreSQL* for persistence — *Drizzle* handles the schema and migrations, while *Kysely* powers typesafe queries.\nThe extension itself is built on *WXT* with *React* and *TanStack Query* for async state, all styled with *PandaCSS*.\nIt features cross-user caching, a per-user quota system, and a 24h TTL to keep dossiers fresh while minimizing AI generation costs.',
    link: 'https://otom-ai.com/',
  },
  {
    title: 'Fuda',
    summary: 'A collectible anime character cards web app, reimagined for the web.',
    techs: ['Typescript', 'React', 'Vite', 'Effect', 'TanStack Query', 'Zod', 'Chakra UI', 'PostgreSQL'],
    isComingSoon: true,
  },
]

export default projects
