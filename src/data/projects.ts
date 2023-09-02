export type Project = {
    title: string;
    techs: string[];
    link: string;
    isComingSoon?: boolean;
};

const projects: Project[] = [
    {
        title: 'Rocket League Esport Bot',
        techs: ['DiscordJS', 'TypeScript'],
        link: 'https://github.com/gdamou/rocket-league-esport-bot',
    },
    {
        title: 'Rep Tracker',
        techs: ['Typescript', 'fastify', 'trpc', 'zod', 'React', 'PandaCSS'],
        link: '/',
        isComingSoon: true,
    },
    {
        title: 'My Dream Game',
        techs: ['Typescript, React, ThreeJS'],
        link: '/',
        isComingSoon: true,
    },
];

export default projects;
