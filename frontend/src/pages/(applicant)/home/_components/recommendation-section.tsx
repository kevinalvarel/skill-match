import { Badge } from "@/components/ui/badge";
import { ArrowRightIcon, IdCard, SparkleIcon } from "lucide-react";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { JobCard, type JobItem } from "@/components/job-card";
import { useState } from "react";

import jobs from "@/mock/lowongan.json";

export const RecommendationSection = () => {
  const [savedKeys, setSavedKeys] = useState<string[]>([]);

  const toggleSave = (job: JobItem) => {
    const key = `${job.jobTitle}-${job.company}`;
    setSavedKeys((prev) =>
      prev.includes(key) ? prev.filter((item) => item !== key) : [...prev, key],
    );
  };

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
                render={<Link to={"/lowongan-pekerjaan"} />}
              >
                Lihat Semua Lowongan Pekerjaan
                <ArrowRightIcon />
              </Badge>
            </div>
          </div>
        </header>
        <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-6 mx-auto w-full gap-6">
          {(jobs as JobItem[]).slice(0, 3).map((item) => {
            const key = `${item.jobTitle}-${item.company}`;
            return (
              <JobCard
                key={key}
                job={item}
                isSaved={savedKeys.includes(key)}
                onToggleSave={toggleSave}
                applyHref="/lowongan-pekerjaan"
              />
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
