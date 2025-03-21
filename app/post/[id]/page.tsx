import { notFound } from "next/navigation"
import { posts } from "../../data/posts"
import SocialShare from "@/app/components/SocialShare"
import CommentSection from "@/app/components/CommentSection"

export default function Post({ params }: { params: { id: string } }) {
  const post = posts.find((p) => p.id === Number.parseInt(params.id))

  if (!post) {
    notFound()
  }

  return (
    <article className="prose prose-invert prose-green max-w-none">
      <h1 className="font-pixel">{post?.title}</h1>
      <span className="inline-block px-2 py-1 bg-green-600 text-black text-sm font-mono rounded mb-4">
        {post?.category}
      </span>
      <div className="font-mono text-lg leading-relaxed">{post?.content}</div>
      <SocialShare
        url={`https://yourdomain.com/post/${post?.id}`}
        title={post?.title || ""}
      />
      <CommentSection />
    </article>
  )
}
