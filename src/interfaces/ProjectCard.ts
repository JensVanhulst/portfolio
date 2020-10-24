interface IProjectLinks {
    icon: string;
    link: string;
    text?: string;
}

interface IProject {
    name: string;
    description: string;
    technologies: Array<string>;
    links: Array<IProjectLinks>;
    preview: string;
}

interface ISkill {
    icon: string;
    color: string;
    percentage: number;
}

export { IProject, IProjectLinks, ISkill };
