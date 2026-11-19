import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Separator } from "@/components/ui/separator";
import { Flame, LocationEdit, Search, Verified } from "lucide-react";

const badgePopular = ["Data Science", "Data Engineer", "Software Engineer"];

export default function HomePage() {
  return (
    <>
      <div className="w-full mx-auto">
        <section id="hero" className="h-screen bg-blue-50/90">
          <div className="max-w-7xl px-6 mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 py-3 md:py-12">
            <main className="col-span-3 w-[80%] py-12">
              <div className="flex flex-col space-y-8 break-normal">
                <Badge className="p-3 bg-blue-500 flex flex-row items-center gap-2.5">
                  <Verified />
                  Platform andalan bagi para Pencari Kerja
                </Badge>
                <h1 className="text-5xl font leading-tight font-bold">
                  Temukan Karir Impian Sesuai {""}
                  <span className="text-blue-900 underline">
                    Skill & Passion
                  </span>{" "}
                  Kamu.
                </h1>
                <p className="text-base leading-relaxed">
                  Jelajahi lebih dari{" "}
                  <span className="font-bold ">45.000+ lowongan aktif</span>{" "}
                  dari startup terkemuka, unicorn regional, hingga perusahaan
                  multinasional dengan transparansi gaji nyata.
                </p>
                <Card>
                  <CardContent className="flex flex-row gap-3 items-center w-full mx-auto">
                    <InputGroup className="bg-transparent dark:bg-transparent w-[40%]">
                      <InputGroupAddon align="inline-start">
                        <Search />
                      </InputGroupAddon>
                      <InputGroupInput placeholder="Cari Posisi" />
                    </InputGroup>
                    <Separator orientation="vertical" />
                    <div className="flex flex-row items-center justify-center gap-3 mx-auto">
                      <LocationEdit className="text-neutral-400" />
                      <p>Jakarta Selatan (Hybrid)</p>
                    </div>
                    <Separator orientation="vertical" />
                    <div className="flex items-center justify-center mx-auto">
                      <Button className="rounded-lg">
                        <Search />
                        Cari Lowongan
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                <div className="flex flex-row text-sm items-center gap-3">
                  <Flame className="text-orange-600 size-4" />{" "}
                  <span className="text-neutral-500">Populer :</span>
                  {badgePopular.map((item) => (
                    <Badge className="bg-neutral-50" variant="outline">
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>
            </main>
            <aside className="col-span-1 w-full py-12 flex items-center">
              <div className="relative">
                <img
                  src="images/hero-landing.jpg"
                  alt="Hero Image"
                  className="aspect-square h-auto w-auto rounded-xl object-cover ring-2 ring-white shadow-sm"
                />
              </div>
            </aside>
          </div>
        </section>
      </div>
    </>
  );
}
