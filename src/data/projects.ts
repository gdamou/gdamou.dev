export type Project = {
    title: string;
    techs: string[];
    link: string;
    isComingSoon?: boolean;
};

const projects: Project[] = [
    {
        title: 'Rep Tracker',
        techs: ['Typescript', 'Fastify', 'TRPC', 'Zod', 'React', 'PandaCSS'],
        link: 'https://github.com/gdamou/reptracker',
    },
    {
        title: 'Rocket League Esport Bot',
        techs: ['TypeScript', 'DiscordJS'],
        link: 'https://github.com/gdamou/rocket-league-esport-bot',
    },
    {
        title: 'My Dream Game',
        techs: ['Typescript, React, ThreeJS'],
        link: '/',
        isComingSoon: true,
    },
];

export default projects;
