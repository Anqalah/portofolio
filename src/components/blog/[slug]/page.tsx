import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getPostBySlug, getAllSlugs } from "@/lib/mdx";
import { mdxComponents } from "@/components/blog/mdx-components";
import { BlogPostLayout } from "@/components/sections/blog-post";

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return { title: `${post.title} — Lingtar`, description: post.excerpt };
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <BlogPostLayout meta={post}>
      <MDXRemote source={post.content} components={mdxComponents} />
    </BlogPostLayout>
  );
}