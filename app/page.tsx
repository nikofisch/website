import type { ReactNode } from "react";
import {
  AtSign,
  Binary,
  BriefcaseBusiness,
  Bot,
  Braces,
  Code2,
  Database,
  FileCode2,
  FolderGit2,
  Mail,
  MonitorCog,
  Radar,
  TerminalSquare,
  Wind,
} from "lucide-react";
import { HeroSection } from "@/components/portfolio/hero-section";
import { Highlight } from "@/components/portfolio/highlight";
import { ProjectsSection } from "@/components/portfolio/projects-section";
import { SkillsSection } from "@/components/portfolio/skills-section";

export default function Home() {
  const socialLinks = [
    {
      label: "GitHub",
      href: "https://github.com/yourname",
      icon: FolderGit2,
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/yourname",
      icon: BriefcaseBusiness,
    },
    {
      label: "X",
      href: "https://x.com/yourname",
      icon: AtSign,
    },
    {
      label: "Email",
      href: "mailto:hello@yourname.dev",
      icon: Mail,
    },
  ];

  const heroItems: ReactNode[] = [
    <>
      lorem ipsum dolor sit amet with{" "}
      <Highlight tone="blue">consectetur adipiscing</Highlight> elit
    </>,
    <>
      sed do eiusmod tempor incididunt for{" "}
      <Highlight tone="lavender">labore et dolore</Highlight>
    </>,
    <>
      ut enim ad minim veniam for{" "}
      <Highlight tone="pink">quis nostrud</Highlight>
    </>,
    <>
      duis aute irure dolor in reprehenderit with{" "}
      <Highlight tone="rose">voluptate velit</Highlight> esse
    </>,
    <>
      excepteur sint occaecat cupidatat with{" "}
      <Highlight tone="blue">proident sunt</Highlight> in culpa
    </>,
    <>
      nulla pariatur occaecat cupidatat after{" "}
      <Highlight tone="mint">officia deserunt</Highlight> mollit
    </>,
    <>
      curabitur blandit tempus porttitor with{" "}
      <Highlight tone="yellow">integer posuere</Highlight> erat a ante
    </>,
  ];

  const skills = [
    { name: "Python", icon: <Bot className="h-4 w-4" strokeWidth={1.8} /> },
    { name: "C", icon: <Binary className="h-4 w-4" strokeWidth={1.8} /> },
    { name: "C++", icon: <Code2 className="h-4 w-4" strokeWidth={1.8} /> },
    {
      name: "TypeScript",
      icon: <FileCode2 className="h-4 w-4" strokeWidth={1.8} />,
    },
    {
      name: "JavaScript",
      icon: <Braces className="h-4 w-4" strokeWidth={1.8} />,
    },
    {
      name: "React",
      icon: <MonitorCog className="h-4 w-4" strokeWidth={1.8} />,
    },
    { name: "Next.js", icon: <Radar className="h-4 w-4" strokeWidth={1.8} /> },
    { name: "FastAPI", icon: <Wind className="h-4 w-4" strokeWidth={1.8} /> },
    { name: "SQL", icon: <Database className="h-4 w-4" strokeWidth={1.8} /> },
    { name: "Tailwind", icon: <SparkSymbol /> },
    {
      name: "Git",
      icon: <FolderGit2 className="h-4 w-4" strokeWidth={1.8} />,
    },
    {
      name: "Linux",
      icon: <TerminalSquare className="h-4 w-4" strokeWidth={1.8} />,
    },
  ];

  const projects = [
    {
      name: "StudyFlow",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      tag: "web app",
      href: "#",
    },
    {
      name: "ForestWatch",
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
      tag: "hardware",
      href: "#",
    },
    {
      name: "BuildHub",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
      tag: "community",
      href: "#",
    },
    {
      name: "PurityTest.fun",
      description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
      tag: "web app",
      href: "#",
    },
    {
      name: "TaskPilot",
      description: "Curabitur blandit tempus porttitor donec ullamcorper nulla non metus auctor fringilla.",
      tag: "tool",
      href: "#",
    },
  ];

  return (
    <main className="mx-auto flex w-full max-w-[62rem] flex-1 flex-col px-5 py-6 sm:px-8 sm:py-8">
      <HeroSection
        name="Your Name"
        intro="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        items={heroItems}
        socialLinks={socialLinks}
      />
      <SkillsSection skills={skills} />
      <ProjectsSection projects={projects} />
    </main>
  );
}

function SparkSymbol() {
  return (
    <span
      aria-hidden="true"
      className="block h-2 w-2 rounded-full bg-current shadow-[0_0_0_3px_rgba(255,255,255,0.08)]"
    />
  );
}
