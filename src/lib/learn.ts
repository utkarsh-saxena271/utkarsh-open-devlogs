import fs from "fs";
import path from "path";

// 1. Define specific types for File and Folder
export type LearnFile = {
  name: string;
  type: "file";
  path: string;
  title: string;
};

export type LearnFolder = {
  name: string;
  type: "folder";
  path: string;
  children: LearnNode[];
};

// 2. Union them together
export type LearnNode = LearnFile | LearnFolder;

const LEARN_DIR = path.join(process.cwd(), "src/content/learn");

export function getLearnTree(dir: string = LEARN_DIR, baseRoute: string = ""): LearnNode[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  const tree = entries
    .map((entry): LearnNode | null => {
      const fullPath = path.join(dir, entry.name);
      // Ensure paths use forward slashes for URLs
      const relativePath = path.join(baseRoute, entry.name).replace(/\\/g, "/");

      if (entry.isDirectory()) {
        return {
          name: entry.name,
          type: "folder",
          path: relativePath,
          children: getLearnTree(fullPath, relativePath),
        };
      }

      if (entry.name.endsWith(".mdx")) {
        const slug = relativePath.replace(".mdx", "");
        const content = fs.readFileSync(fullPath, "utf-8");
        const match = content.match(/title:\s*(.+)/);
        const title = match ? match[1].trim().replace(/['"]/g, "") : entry.name.replace(".mdx", "");

        return {
          name: entry.name,
          type: "file",
          path: slug,
          title: title,
        };
      }

      return null;
    })
    // 3. Proper type guard to remove nulls and satisfy the compiler
    .filter((node): node is LearnNode => node !== null);

  // 4. Sort safely (TypeScript now knows node is not null here)
  return tree.sort((a, b) => {
    if (a.type === b.type) return a.name.localeCompare(b.name);
    return a.type === "folder" ? -1 : 1;
  });
}