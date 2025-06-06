import profile from '../notion-data/20a01b37-0b22-8005-8c8c-e83eda84525c.json';

const posts = [
    {
        title: 'Profile',
        slug: 'Profile',
        content: profile,
        date: '2025-06-06',
        description: "Description of Jongsu's profile",
        image: undefined,
    },
] as Post[];

export default posts;

export type Post = {
    title: string;
    slug: string;
    content: { blocks: any[] };
    date: string;
    description: string;
    image?: string;
};
