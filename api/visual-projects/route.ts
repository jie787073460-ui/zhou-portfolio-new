import { NextResponse } from "next/server";

export const dynamic = "force-static";

type VisualProjectsResponse = {
  projects: [];
};

export function GET() {
  /*
   * Visual Exploration is compiled from src/assets/visual on the client bundle.
   * Keeping this endpoint as a no-op preserves older fetch compatibility without
   * relying on Node-only fs/path/process APIs during Vercel builds.
   */
  const response: VisualProjectsResponse = { projects: [] };

  return NextResponse.json(response);
}
