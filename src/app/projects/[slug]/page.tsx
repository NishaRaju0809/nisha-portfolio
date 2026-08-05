import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

import {
  getAllProjectSlugs,
  getProjectBySlug,
  projects,
} from '../../../data/projects';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: 'Project not found' };

  return {
    title: `${project.title} | Nisha Raju`,
    description: project.description.replace(/\n+/g, ' ').slice(0, 160),
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const paragraphs = project.description
    .split(/\n+/)
    .map((part) => part.trim())
    .filter(Boolean);

  const related = projects
    .filter((item) => item.slug !== project.slug)
    .slice(0, 3);

  return (
    <main className="pt-[100px] pb-section px-gutter">
      <div className="max-w-5xl mx-auto">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm font-bold text-secondary hover:text-tertiary transition-colors mb-8"
        >
          <span className="material-symbols-outlined text-base">arrow_back</span>
          Back to projects
        </Link>

        <div className="mb-6">
          <span className="font-label text-[12px] font-bold tracking-[0.1em] uppercase text-tertiary bg-tertiary/10 px-3 py-1 rounded inline-block mb-4">
            {project.category}
          </span>
          <h1 className="font-display text-[36px] sm:text-[48px] lg:text-[56px] font-extrabold leading-tight text-on-surface">
            {project.title}
          </h1>
        </div>

        <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden border border-secondary/20 bg-surface-container shadow-[0_24px_64px_-24px_rgba(0,0,0,0.55)] mb-10">
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            fill
            priority
            className="object-contain bg-surface-container-lowest"
            sizes="(max-width: 1024px) 100vw, 1024px"
          />
        </div>

        <div className="flex flex-wrap gap-3 mb-10">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-code text-sm text-secondary bg-secondary/10 px-3 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>

        <section className="glass-panel rounded-2xl p-6 sm:p-8 mb-10">
          <h2 className="font-headline text-2xl font-semibold text-on-surface mb-5">
            About this project
          </h2>
          <div className="space-y-4 text-on-surface-variant text-lg leading-relaxed">
            {paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
        </section>

        <div className="flex flex-wrap gap-4 mb-16">
          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="brutalist-button inline-flex items-center gap-3 bg-tertiary text-on-primary font-bold px-6 py-3 rounded-lg transition-all"
            >
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                {project.icon}
              </span>
              View on Play Store
            </a>
          ) : null}
          <Link
            href="/#projects"
            className="inline-flex items-center gap-3 border border-secondary text-secondary font-bold px-6 py-3 rounded-lg hover:bg-secondary/10 transition-colors"
          >
            See all projects
          </Link>
        </div>

        {related.length > 0 ? (
          <section>
            <h2 className="font-headline text-xl font-semibold text-on-surface mb-6">
              More projects
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={`/projects/${item.slug}`}
                  className="glass-card rounded-xl overflow-hidden group"
                >
                  <div className="relative h-36 bg-surface-container">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <p className="font-label text-[11px] uppercase tracking-widest text-tertiary mb-1">
                      {item.category}
                    </p>
                    <h3 className="font-headline font-semibold text-on-surface">
                      {item.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ) : null}
      </div>
    </main>
  );
}
