import Link from "next/link";

const caseNames: Record<string, string> = {
  microcraft: "Microcraft",
  kupu: "KUPU",
  "c-node": "C-NODE",
  tmall: "TMALL",
  alibaba: "Alibaba",
  branding: "Branding"
};

export function generateStaticParams() {
  return Object.keys(caseNames).map((slug) => ({ slug }));
}

export default function WorkCasePage({ params }: { params: { slug: string } }) {
  const title = caseNames[params.slug] ?? "Work Case";

  return (
    <main className="min-h-screen bg-[#07090F] px-6 py-24 text-white md:px-12">
      <div className="mx-auto max-w-[900px]">
        <Link className="text-sm text-white/50 transition hover:text-white" href="/#work">
          Back to works
        </Link>
        <p className="mt-16 text-sm font-medium uppercase tracking-[0.22em] text-white/[0.34]">
          Case Study
        </p>
        <h1 className="mt-5 text-5xl font-semibold md:text-7xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/[0.56]">
          This case study page is ready for detailed project content. The homepage entry is connected and will not return a 404.
        </p>
      </div>
    </main>
  );
}
