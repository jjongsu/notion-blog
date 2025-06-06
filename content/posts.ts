import profile from '../notion-data/13801b37-0b22-8039-bcb9-ea1730ae17b6.json';

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
