"use client";
import { useParams } from "next/navigation";

const projects = [
  {
    title: "Aritmetika Solver",
    slug: "aritmetika-solver",
    description: "Solves basic arithmetic expressions and visualizes steps.",
    details: "This project uses Flask to handle requests and returns step-by-step arithmetic solutions with visualization. It supports addition, subtraction, multiplication, and division.",
    tech: ["Python", "Flask"],
  },
  {
    title: "AutoChat-Discord",
    slug: "autochat-discord",
    description: "An AI bot that responds intelligently on Discord.",
    details: "This bot is powered by OpenAI API and uses Discord.js to handle chat messages, commands, and AI responses.",
    tech: ["Node.js", "Discord.js", "OpenAI API"],
  },
  {
    title: "Buku Catatan",
    slug: "buku-catatan",
    description: "A note-taking web app with local storage.",
    details: "Built using React and Tailwind CSS, this app lets users create, edit, and delete notes stored locally in the browser.",
    tech: ["React", "Tailwind"],
  },
];

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <div className="p-10 text-white">Project not found</div>;
  }

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-bold text-sky-400">{project.title}</h1>
      <p className="mt-4">{project.details}</p>
      <p className="mt-2 text-sky-300">Tech used: {project.tech.join(", ")}</p>
    </div>
  );
}
