type Social = {
  label: string
  link: string
}

type Presentation = {
  mail: string
  title: string
  description: string
  socials: Social[]
  profile?: string
}

const presentation: Presentation = {
  mail: 'gdamou.dev@gmail.com',
  title: 'Hi, I’m Ghislain 👋',
  description:
    "Bonjour, i'm a *french frontend developer* with over *3 years* of web experience. I am mainly working with *Typescript, React and Node*.",
  socials: [
    {
      label: 'X',
      link: 'https://twitter.com/gdamou_dev',
    },
    {
      label: 'Github',
      link: 'https://github.com/gdamou',
    },
    {
      label: 'Linkedin',
      link: 'https://www.linkedin.com/in/gdamou',
    },
  ],
}

export default presentation
