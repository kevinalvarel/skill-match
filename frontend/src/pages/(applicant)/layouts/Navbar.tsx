import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router";

const navigationData = [
  { label: "Beranda", href: "/" },
  { label: "Semua Lowongan", href: "/lowongan-kerja" },
  { label: "Semua Perusahaan", href: "/" },
  { label: "Analisa CV", href: "/" },
];

export function Navbar() {
  return (
    <>
      <nav className="w-full mx-auto py-4 border-b-2">
        <div className="max-w-7xl mx-auto flex justify-between gap-4 items-center px-6">
          <Link className="font-semibold flex flex-col text-lg" to={"/"}>
            SkillMatch
            <span className="text-xs uppercase text-neutral-500">
              JOB Portal
            </span>
          </Link>
          <ul className="flex space-x-12">
            {navigationData.map((item) => (
              <li className="font-semibold text-neutral-700" key={item.label}>
                <Link to={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
          <div className="flex gap-6 items-center">
            <Separator orientation="vertical" />

            <div className="flex flex-row gap-3 items-center">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="flex-col text-sm">
                <h2 className="text-neutral-900 font-semibold">Kevin</h2>
                <p className="text-neutral-500">Software Engineer</p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
