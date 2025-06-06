// app/blog/[slug]/page.tsx
import NotionRenderer from 'components/notion-renderer';
import posts from 'content/posts';

export default function BlogPost({ params }: { params: { slug: string } }) {
    const post = posts.find((p) => p.slug === params.slug);
    if (!post) return <div>Post not found</div>;

    return <NotionRenderer post={post} />;
}
