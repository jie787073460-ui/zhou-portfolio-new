import { promises as fs } from "fs";
import path from "path";
import { NextResponse } from "next/server";
import { visualProjects as configuredVisualProjects } from "@/src/data/visualProjects";

export const dynamic = "force-dynamic";

type VisualMeta = {
  id?: string;
  title?: string;
  subtitle?: string;
  category?: string;
  layout?: "vertical" | "square" | "wide";
  description?: string;
  sections?: {
    image?: string;
    title?: string;
    description?: string;
  }[];
};

const imagePattern = /\.(png|jpe?g|webp)$/i;

function toTitle(slug: string) {
  return slug
    .split(/[-_\s]+/)
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function visualPath(slug: string, fileName: string) {
  return `/images/visual/${encodeURIComponent(slug)}/${encodeURIComponent(fileName)}`;
}

async function readMeta(folderPath: string): Promise<VisualMeta> {
  try {
    const raw = await fs.readFile(path.join(folderPath, "meta.json"), "utf8");
    return JSON.parse(raw) as VisualMeta;
  } catch {
    return {};
  }
}

export async function GET() {
  const visualRoot = path.join(process.cwd(), "public", "images", "visual");
  const configuredBySlug = new Map(configuredVisualProjects.map((project) => [project.slug, project]));

  try {
    const entries = await fs.readdir(visualRoot, { withFileTypes: true });
    const projects = await Promise.all(
      entries
        .filter((entry) => entry.isDirectory())
        .map(async (entry) => {
          const slug = entry.name;
          const folderPath = path.join(visualRoot, slug);
          const files = await fs.readdir(folderPath);

          if (!files.includes("cover.png")) {
            return null;
          }

          const meta = await readMeta(folderPath);
          const configured = configuredBySlug.get(slug);
          const detailImages = files
            .filter((fileName) => imagePattern.test(fileName))
            .filter((fileName) => fileName !== "cover.png")
            .sort((a, b) => a.localeCompare(b, "zh-Hans-CN", { numeric: true }))
            .map((fileName) => visualPath(slug, fileName));

          return {
            id: meta.id ?? configured?.id ?? slug,
            slug,
            title: meta.title ?? configured?.title ?? toTitle(slug),
            subtitle: meta.subtitle ?? configured?.subtitle ?? "Visual Project",
            category: meta.category ?? configured?.category ?? "VISUAL",
            layout: meta.layout ?? configured?.layout ?? "vertical",
            cover: visualPath(slug, "cover.png"),
            folder: `/images/visual/${slug}/`,
            description: meta.description ?? configured?.description ?? `${toTitle(slug)} 的视觉探索内容。`,
            detailImages,
            sectionMeta: meta.sections
          };
        })
    );

    return NextResponse.json({
      projects: projects.filter(Boolean)
    });
  } catch {
    return NextResponse.json({ projects: [] });
  }
}
