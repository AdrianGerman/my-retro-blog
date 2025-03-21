import { posts } from "../../data/posts"

export default function Post({ params }: { params: { id: string } }) {
  const post = posts.find((p) => p.id === Number.parseInt(params.id))

  return (
    <article className="prose prose-invert prose-green max-w-none">
      <h1 className="font-pixel">{post?.title}</h1>
      <span className="inline-block px-2 py-1 bg-green-600 text-black text-sm font-mono rounded mb-4">
        {post?.category}
      </span>
      <div className="font-mono text-lg leading-relaxed">{post?.content}</div>
    </article>
  )
}
