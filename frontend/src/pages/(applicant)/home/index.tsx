import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";
import { HeroSection } from "./_components/hero-section";
import { CategoriesSection } from "./_components/categories-section";
import { RecommendationSection } from "./_components/recommendation-section";

const popularBadges = ["Data Science", "Data Engineer", "Software Engineer"];
const techLogos = [
  {
    node: <SiReact />,
    title: "React",
    href: "https://react.dev",
    hoverColor: "#61dafb",
  },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  {
    node: <SiTypescript />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
    hoverColor: "#3178c6",
  },
  {
    node: <SiTailwindcss />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
    hoverColor: "#38bdf8",
  },
];

export default function HomePage() {
  return (
    <>
      <div className="w-full mx-auto">
        <HeroSection techLogos={techLogos} popularBadges={popularBadges} />
        <CategoriesSection />
        <RecommendationSection />
      </div>
    </>
  );
}
