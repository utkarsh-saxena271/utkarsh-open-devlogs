interface PageProps {
  params: Promise<{
    slug:string[]
  }>
}
import { notFound } from "next/navigation";
import path from "path";
import fs from 'fs'


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


export const dynamicParams = true



function getAllMdxFiles(dirPath: string, arrayOfFiles: string[][] = [], baseDir: string = "") {
    const files = fs.readdirSync(dirPath);

    files.forEach(function(file) {
        const fullPath = path.join(dirPath, file);
        if (fs.statSync(fullPath).isDirectory()) {
            getAllMdxFiles(fullPath, arrayOfFiles, baseDir);
        } else if (file.endsWith(".mdx")) {
            // Get the relative path from the base directory
            const relativePath = path.relative(baseDir, fullPath);
            // Remove .mdx and split into an array (e.g., "react/hooks" -> ["react", "hooks"])
            const slugArray = relativePath.replace(/\.mdx$/, "").split(path.sep);
            arrayOfFiles.push(slugArray);
        }
    });

    return arrayOfFiles;
}

export async function generateStaticParams() {
    const contentDir = path.join(process.cwd(), "src/content/learn");
    
    if (!fs.existsSync(contentDir)) return [];

    const allSlugs = getAllMdxFiles(contentDir, [], contentDir);

    // To keep build times fast, we only pre-render the first 20 files
    // The rest will be handled by ISR on-demand
    return allSlugs.slice(0, 20).map((slug) => ({
        slug: slug,
    }));
}