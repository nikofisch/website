import type { ReactNode } from "react";
import {
  Binary,
  Bot,
  Cloud,
  Code2,
  Database,
  FileCode2,
  FolderGit2,
  Gamepad2,
  Hash,
  MonitorCog,
  Radar,
  TerminalSquare,
} from "lucide-react";
import { HeroSection } from "@/components/portfolio/hero-section";
import { Highlight } from "@/components/portfolio/highlight";
import { ProjectsSection } from "@/components/portfolio/projects-section";
import { SkillsSection } from "@/components/portfolio/skills-section";

export default function Home() {
  const socialLinks = [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/nikolausfischmeister/",
      icon: <LinkedInLogo />,
    },
    {
      label: "GitHub",
      href: "https://github.com/nikofisch",
      icon: <GitHubLogo />,
    },
    {
      label: "Devpost",
      href: "https://devpost.com/triangularfish?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav",
      icon: <DevpostLogo />,
    },
  ];

  const heroItems: ReactNode[] = [
    <>
      interested in <Highlight tone="blue">embedded systems</Highlight> and{" "}
      <Highlight tone="lavender">operating systems</Highlight>
    </>,
    <>
      <Highlight tone="pink">3x hackathon winner</Highlight> across team projects
      and fast-turnaround builds
    </>,
    <>
      Embedded System Developer at{" "}
      <Highlight tone="yellow">Fronius International</Highlight> (Summer 2025)
    </>,
    <>
      reached <Highlight tone="rose">61k+ views</Highlight> on my Arch Linux dotfiles repo
    </>,
    <>
      outside of school I enjoy <Highlight tone="blue">sailing</Highlight> and{" "}
      <Highlight tone="mint">travelling</Highlight>
    </>,
  ];

  const skills = [
    { name: "Python", icon: <Bot className="h-4 w-4" strokeWidth={1.8} /> },
    { name: "C", icon: <Code2 className="h-4 w-4" strokeWidth={1.8} /> },
    {
      name: "Processing",
      icon: <MonitorCog className="h-4 w-4" strokeWidth={1.8} />,
    },
    {
      name: "GCBASIC",
      icon: <Binary className="h-4 w-4" strokeWidth={1.8} />,
    },
    {
      name: "Arduino",
      icon: <FileCode2 className="h-4 w-4" strokeWidth={1.8} />,
    },
    {
      name: "ESP8266",
      icon: <Radar className="h-4 w-4" strokeWidth={1.8} />,
    },

    {
      name: "Git",
      icon: <FolderGit2 className="h-4 w-4" strokeWidth={1.8} />,
    },
    {
      name: "Linux",
      icon: <TerminalSquare className="h-4 w-4" strokeWidth={1.8} />,
    },
    {
      name: "Blender",
      icon: <MonitorCog className="h-4 w-4" strokeWidth={1.8} />,
    },
    {
      name: "discord.py",
      icon: <Hash className="h-4 w-4" strokeWidth={1.8} />,
    },
    {
      name: "AWS",
      icon: <Cloud className="h-4 w-4" strokeWidth={1.8} />,
    },
    {
      name: "Claude Code",
      icon: <Bot className="h-4 w-4" strokeWidth={1.8} />,
    },
    {
      name: "Codex",
      icon: <Bot className="h-4 w-4" strokeWidth={1.8} />,
    },
    {
      name: "MCP",
      icon: <Database className="h-4 w-4" strokeWidth={1.8} />,
    },
    {
      name: "MCreator Link",
      icon: <Gamepad2 className="h-4 w-4" strokeWidth={1.8} />,
    },
  ];

  const projects = [
    {
      name: "dotfiles",
      description:
        "Personal Arch Linux configuration repo with Hyprland, Waybar, rofi, yazi, wallpapers, and related setup files.",
      href: "https://github.com/nikofisch/dotfiles",
      imageSrc: "/projects/dotfiles.png",
      imageAlt: "Screenshot of the dotfiles desktop setup running Hyprland on Arch Linux",
      tools: ["Linux", "Hyprland", "Waybar", "Rofi", "Yazi"],
    },
    {
      name: "Fronius Harmonic Analysis",
      description:
        "Built a Python wrapper for the PicoScope 4262 and automated Fourier-based harmonic analysis with closed-loop cancellation testing.",
      href: "#",
      imageSrc: "/projects/fronius.svg",
      imageAlt: "Abstract preview for the Fronius harmonic analysis project",
      tools: ["Python", "PicoScope", "PicoSDK", "SciPy", "Matplotlib"],
    },
    {
      name: "Autonomous Firefighter Robot",
      description:
        "Designed the PCB, assembled the robot, and wrote PIC16F887 firmware for maze solving, line tracking, and flame detection.",
      href: "#",
      imageSrc: "/projects/firefighter.svg",
      imageAlt: "Abstract preview for the autonomous firefighter robot",
      tools: ["TraxMaker", "GCBASIC", "PIC16F887"],
    },
    {
      name: "AutoAlt",
      description:
        "JamHacks 2025 project combining ESP8266 hardware with C++ and Python components for desktop control experiments, plus MCP integration for the control workflow.",
      href: "https://github.com/nikofisch/AutoAlt",
      imageSrc: "/projects/autoalt.svg",
      imageAlt: "Abstract preview for AutoAlt",
      tools: ["ESP8266", "C++", "Python", "MCP"],
    },
    {
      name: "Boat Dynamics Simulator",
      description:
        "Created a real-time Processing simulation with modular physics, configurable wind and wave forces, and save/load support.",
      href: "#",
      imageSrc: "/projects/boat.svg",
      imageAlt: "Abstract preview for the boat dynamics simulator",
      tools: ["Processing", "GUI"],
    },
    {
      name: "MC Home Security",
      description:
        "Built a Minecraft-based home security system using MCreator Link where in-game tripwires trigger Arduino LEDs and a buzzer, with a Python script sending Twilio SMS alerts on log changes.",
      href: "https://devpost.com/software/mc-home-security",
      imageSrc: "/projects/minecraft-arduino.svg",
      imageAlt: "Abstract preview for MC Home Security",
      tools: ["MCreator Link", "Arduino", "Java", "Python", "Twilio"],
    },
  ];

  return (
    <main className="mx-auto flex w-full max-w-[62rem] flex-1 flex-col px-5 py-6 sm:px-8 sm:py-8">
      <HeroSection
        name="Nikolaus Fischmeister"
        intro="Computer Engineering Student @ University of Toronto."
        items={heroItems}
        socialLinks={socialLinks}
      />
      <SkillsSection skills={skills} />
      <ProjectsSection projects={projects} />
    </main>
  );
}

function GitHubLogo() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4 fill-current"
    >
      <path d="M12 .5C5.65.5.5 5.66.5 12.03c0 5.1 3.3 9.42 7.87 10.95.58.11.79-.25.79-.56 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.97.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.3 1.19-3.11-.12-.3-.52-1.5.11-3.12 0 0 .97-.31 3.19 1.19a10.9 10.9 0 0 1 5.8 0c2.21-1.5 3.18-1.19 3.18-1.19.64 1.62.24 2.82.12 3.12.74.81 1.19 1.85 1.19 3.11 0 4.43-2.69 5.4-5.25 5.69.41.36.78 1.08.78 2.19 0 1.58-.01 2.86-.01 3.25 0 .31.21.68.8.56A11.54 11.54 0 0 0 23.5 12.03C23.5 5.66 18.35.5 12 .5Z" />
    </svg>
  );
}

function LinkedInLogo() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4 fill-current"
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.95v5.66H9.33V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.61 0 4.28 2.38 4.28 5.48v6.26ZM5.31 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.09 20.45H3.54V9h3.55v11.45Z" />
    </svg>
  );
}

function DevpostLogo() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4 fill-current"
    >
      <path d="M6.002 1.61 0 12.004 6.002 22.39h11.996L24 12.004 17.998 1.61zm1.593 4.084h4.266c3.544 0 6.136 1.801 6.136 6.31 0 4.51-2.592 6.31-6.136 6.31H7.595zm2.386 2.025v8.568h1.88c2.508 0 3.75-1.498 3.75-4.284 0-2.786-1.242-4.284-3.75-4.284z" />
    </svg>
  );
}
