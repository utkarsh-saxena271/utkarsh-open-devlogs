interface PageProps {
  params: Promise<{
    slug:string[]
  }>
}
import { notFound } from "next/navigation";


export const runtime = "nodejs";
// export const dynamic = "force-dynamic"
export const revalidate = 3600; //ISR

export default async function Page({ 
    params 
}: PageProps) {
    const { slug } = await params;
    const filepath = slug.join('/');

    try {
        const { default: Post } = await import(`@/content/learn/${filepath}.mdx`);

        return (
            <article className="px-6 py-12 max-w-5xl mx-auto">
                <Post />
            </article>
        );
    } catch (e) {
        console.log(e)
        notFound();
    }
}