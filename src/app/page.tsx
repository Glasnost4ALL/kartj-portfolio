"use client";

import { useState } from "react";
import Link from "next/link";
import { projects } from "@/lib/projects";
import Image from "next/image";

function ProjectCard({ project }: { project: typeof projects[number] }) {
  const [clicked, setClicked] = useState(false);

  return (
    <Link
      href={`/project/${project.slug}`}
      className="block group"
      onMouseDown={() => setClicked(true)}
      onMouseUp={() => setTimeout(() => setClicked(false), 150)}
    >
      <div
        className={`relative aspect-[3/2] mb-6 overflow-hidden transition-transform duration-150 ${
          clicked ? "scale-[0.97]" : "group-hover:scale-[1.015]"
        }`}
      >
        <Image
          src={project.cover}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-1000 ease-out"
        />
      </div>
      <div className="flex justify-between items-baseline">
        <h3 className="text-sm tracking-widest uppercase">{project.title}</h3>
        <span className="text-xs text-gray-600 tracking-widest">{project.year}</span>
      </div>
      {project.description && (
        <p className="text-xs text-gray-600 mt-2 tracking-wider">
          {project.description}
        </p>
      )}
    </Link>
  );
}

export default function Home() {
  const featuredProject = projects[0];

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="h-screen flex items-center justify-center relative">
        <div className="text-center">
          <h1 className="text-7xl md:text-9xl font-extralight tracking-widest mb-4">
            KARTj
          </h1>
          <p className="text-xs tracking-widest text-gray-500 uppercase">Photographie</p>
        </div>
      </section>

      {/* Featured Project */}
      <section className="px-6 pb-32">
        <ProjectCard project={featuredProject} />
      </section>

      {/* All Projects */}
      <section className="px-6 pb-32 max-w-5xl mx-auto">
        <div className="flex flex-col gap-24">
          {projects.slice(1).map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
}
