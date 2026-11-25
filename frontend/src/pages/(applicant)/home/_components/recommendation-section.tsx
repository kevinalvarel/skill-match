import { Badge } from "@/components/ui/badge";
import {
  ArrowRightIcon,
  Bookmark,
  Clock,
  IdCard,
  SparkleIcon,
} from "lucide-react";
import { Link } from "react-router";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

import jobs from "@/mock/lowongan.json";

export const RecommendationSection = () => {
  return (
    <section className="w-full">
      <div className="max-w-7xl px-6 mx-auto grid grid-cols-1 gap-4 py-6 md:py-16 w-full">
        <header className="flex flex-col space-y-3 w-full">
          <div className="flex flex-row items-center gap-3 text-blue-900 font-semibold">
            <SparkleIcon /> AI SLOP MATCHING
          </div>
          <h2 className="text-4xl font-bold">
            Rekomendasi Pekerjaan Khusus Untukmu
          </h2>
          <div className="flex flex-row items-center justify-between w-full mx-auto">
            <div className="text-neutral-500 text-sm">
              <p>
                Berdasarkan prefensi profil:{" "}
                <span className="font-semibold text-neutral-800">
                  Frontend Development, React, Hybrid Jakarta
                </span>
              </p>
            </div>
            <div className="flex flex-row items-center gap-3 text-sm text-neutral-500">
              Akurasi Match :{" "}
              <span className="text-green-700 font-bold">89%</span>
              <Badge
                variant="outline"
                className="bg-transparent p-5 border-blue-800 "
                render={<Link to={"/"} />}
              >
                Lihat Semua Lowongan Pekerjaan
                <ArrowRightIcon />
              </Badge>
            </div>
          </div>
        </header>
        <main className="grid grid-cols-3 py-6 mx-auto w-full gap-6">
          {jobs.slice(0, 3).map((item, index) => {
            return (
              <>
                <Card key={index}>
                  <CardHeader className="flex flex-row gap-3">
                    <Avatar size="lg" className="rounded-xl size-20">
                      <AvatarFallback>PT</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col justify-center gap-1.5">
                      <h3 className="text-base font-bold">{item.jobTitle}</h3>
                      <p className="text-[12px]">
                        {item.company} - <span>{item.location}</span>
                      </p>
                      <p className="text-[10px] text-green-800 font-semibold">
                        {item.jobType}
                      </p>
                    </div>
                  </CardHeader>
                  <CardContent className="flex flex-col gap-4">
                    <div className="flex flex-col justify-center rounded-lg bg-blue-100/40 p-3 gap-0.5">
                      <h4 className="text-neutral-600 font-medium text-[11px]">
                        ESTIMASI GAJI BULANAN
                      </h4>
                      <p className="text-blue-800 font-bold">{item.sallary}</p>
                      <div className="flex flex-row items-center gap-4">
                        <span className="text-neutral-600 text-[11px] font-medium">
                          BPJS Asuransi Swasta
                        </span>
                      </div>
                    </div>
                    <div className="w-full flex flex-row gap-3">
                      <Badge variant="outline" className="bg-blue-100/40">
                        React
                      </Badge>
                    </div>
                    <Separator />
                  </CardContent>
                  <CardFooter className="flex flex-row justify-between items-center">
                    <div className="text-neutral-600 text-xs flex items-center gap-1.5">
                      <Clock className="size-4 text-neutral-600" /> 1 jam yang
                      lalu
                    </div>
                    <div className="flex gap-2 items-center">
                      <Button variant="outline">
                        <Bookmark />
                      </Button>
                      <Button nativeButton={false} render={<Link to={"/"} />}>
                        Lamar Cepat
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              </>
            );
          })}
        </main>
        <footer className="bg-blue-900 text-neutral-200 flex items-center justify-between p-3 rounded-xl">
          <main className="flex flex-row gap-3">
            <div
              role="banner"
              className="size-10 rounded-full bg-neutral-200/20 p-0 flex items-center justify-center"
            >
              <IdCard className="size-6 shrink-0" strokeWidth={1.5} />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-base font-bold">
                Tingkatkan Akurasi Rekomendasi Karirmu
              </h3>
              <p className="text-[10px]">
                Lengkapi CV dan riwayat portofolio untuk mendapatkan penawaran
                langsung (headhunt) dari 500+ recruiter perusahaan.
              </p>
            </div>
          </main>
          <aside>
            <Button className="bg-white rounded-md text-blue-900 font-semibold p-6">
              Perbarui Profil (80% Selesai)
            </Button>
          </aside>
        </footer>
      </div>
    </section>
  );
};
