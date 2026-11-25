import { useEffect, useMemo, useState } from "react";
import {
  Bookmark,
  Briefcase,
  CheckCircle2,
  MapPin,
  RotateCcw,
  Search,
  X,
} from "lucide-react";
import { JobCard, type JobItem } from "@/components/job-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Separator } from "@/components/ui/separator";
import jobsData from "@/mock/lowongan.json";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const jobs = jobsData as JobItem[];

function getJobKey(job: JobItem): string {
  return `${job.jobTitle}-${job.company}`;
}

export default function LowonganPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [selectedJobType, setSelectedJobType] = useState("all");
  const [showSavedOnly, setShowSavedOnly] = useState(false);
  const [savedKeys, setSavedKeys] = useState<string[]>([]);
  const [appliedKeys, setAppliedKeys] = useState<string[]>([]);
  const [activeJob, setActiveJob] = useState<JobItem | null>(null);

  const locations = useMemo(
    () => Array.from(new Set(jobs.map((job) => job.location))),
    [],
  );

  const locationItems = useMemo(
    () => [
      { label: "Semua Lokasi", value: "all" },
      ...locations.map((loc) => ({ label: loc, value: loc })),
    ],
    [locations],
  );

  const jobTypes = useMemo(
    () => Array.from(new Set(jobs.map((job) => job.jobType))),
    [],
  );

  const jobTypeItems = useMemo(
    () => [
      { label: "Semua Tipe", value: "all" },
      ...jobTypes.map((type) => ({ label: type, value: type })),
    ],
    [jobTypes],
  );

  const filteredJobs = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return jobs.filter((job) => {
      const key = getJobKey(job);
      if (showSavedOnly && !savedKeys.includes(key)) {
        return false;
      }

      if (selectedLocation !== "all" && job.location !== selectedLocation) {
        return false;
      }

      if (selectedJobType !== "all" && job.jobType !== selectedJobType) {
        return false;
      }

      if (!query) {
        return true;
      }

      const matchesTitle = job.jobTitle.toLowerCase().includes(query);
      const matchesCompany = job.company.toLowerCase().includes(query);
      const matchesSkill = job.skills.some((skill) =>
        skill.toLowerCase().includes(query),
      );

      return matchesTitle || matchesCompany || matchesSkill;
    });
  }, [
    searchQuery,
    selectedLocation,
    selectedJobType,
    showSavedOnly,
    savedKeys,
  ]);

  const hasActiveFilter =
    searchQuery.trim() !== "" ||
    selectedLocation !== "all" ||
    selectedJobType !== "all" ||
    showSavedOnly;

  const resetFilters = () => {
    setSearchQuery("");
    setSelectedLocation("all");
    setSelectedJobType("all");
    setShowSavedOnly(false);
  };

  const toggleSave = (job: JobItem) => {
    const key = getJobKey(job);
    setSavedKeys((prev) =>
      prev.includes(key) ? prev.filter((item) => item !== key) : [...prev, key],
    );
  };

  const handleConfirmApply = (job: JobItem) => {
    const key = getJobKey(job);
    setAppliedKeys((prev) => (prev.includes(key) ? prev : [...prev, key]));
  };

  useEffect(() => {
    if (!activeJob) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveJob(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeJob]);

  const activeJobKey = activeJob ? getJobKey(activeJob) : "";
  const isActiveJobApplied = activeJob
    ? appliedKeys.includes(activeJobKey)
    : false;

  return (
    <div className="w-full">
      <header className="w-full border-b bg-blue-50/70">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 md:py-12">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl">
              Semua Lowongan Pekerjaan
            </h1>
            <p className="max-w-2xl text-sm text-neutral-600 md:text-base">
              Temukan posisi yang sesuai dengan keahlian Anda, lengkap dengan
              estimasi gaji bulanan dan fasilitas kerja.
            </p>
          </div>

          <Card>
            <CardContent className="grid grid-cols-1 gap-3 md:grid-cols-12 md:items-center">
              <div className="md:col-span-6">
                <label htmlFor="job-search" className="sr-only">
                  Cari posisi, perusahaan, atau keahlian
                </label>
                <InputGroup className="h-11 bg-background">
                  <InputGroupAddon align="inline-start">
                    <Search
                      className="size-4 text-neutral-500"
                      aria-hidden="true"
                    />
                  </InputGroupAddon>
                  <InputGroupInput
                    id="job-search"
                    type="text"
                    value={searchQuery}
                    onChange={(event) => setSearchQuery(event.target.value)}
                    placeholder="Cari posisi, perusahaan, atau skill (mis. React, Golang)"
                  />
                  {searchQuery && (
                    <InputGroupAddon align="inline-end">
                      <button
                        type="button"
                        onClick={() => setSearchQuery("")}
                        aria-label="Hapus kata kunci pencarian"
                        className="cursor-pointer rounded-md p-1 text-neutral-500 hover:bg-neutral-100 hover:text-neutral-800 focus-visible:outline-2 focus-visible:outline-blue-800"
                      >
                        <X className="size-4" aria-hidden="true" />
                      </button>
                    </InputGroupAddon>
                  )}
                </InputGroup>
              </div>

              <div className="md:col-span-3">
                <Select items={locationItems}>
                  <SelectTrigger className="w-full h-auto">
                    <SelectValue placeholder="Pilih Lokasi" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Lokasi</SelectLabel>
                      {locationItems.map((item) => (
                        <SelectItem key={item.value} value={item.value}>
                          {item.label}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              <div className="md:col-span-3">
                <Select items={jobTypeItems}>
                  <SelectTrigger className="w-full h-auto">
                    <SelectValue placeholder="Semua Jenis" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Tipe</SelectLabel>
                      {jobTypeItems.map((item) => (
                        <SelectItem key={item.value} value={item.value}>
                          {item.label}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </div>
      </header>

      <section
        aria-label="Daftar lowongan"
        className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-8 md:py-12"
      >
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm text-neutral-600">
            Menampilkan{" "}
            <span className="font-semibold text-neutral-900">
              {filteredJobs.length}
            </span>{" "}
            dari{" "}
            <span className="font-semibold text-neutral-900">
              {jobs.length}
            </span>{" "}
            lowongan
          </p>

          <div className="flex flex-wrap items-center gap-2">
            <Button
              type="button"
              variant={showSavedOnly ? "default" : "outline"}
              onClick={() => setShowSavedOnly((prev) => !prev)}
              aria-pressed={showSavedOnly}
              className="min-h-10 cursor-pointer"
            >
              <Bookmark className="size-4" aria-hidden="true" />
              Tersimpan ({savedKeys.length})
            </Button>

            {hasActiveFilter && (
              <Button
                type="button"
                variant="ghost"
                onClick={resetFilters}
                className="min-h-10 cursor-pointer text-neutral-700"
              >
                <RotateCcw className="size-4" aria-hidden="true" />
                Reset Filter
              </Button>
            )}
          </div>
        </div>

        {filteredJobs.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredJobs.map((job) => {
              const key = getJobKey(job);
              return (
                <JobCard
                  key={key}
                  job={job}
                  isSaved={savedKeys.includes(key)}
                  onToggleSave={toggleSave}
                  onApply={(selected) => setActiveJob(selected)}
                />
              );
            })}
          </div>
        ) : (
          <Card className="py-12 text-center">
            <CardContent className="mx-auto flex max-w-md flex-col items-center gap-4">
              <div className="flex size-12 items-center justify-center rounded-full bg-blue-100/60 text-blue-900">
                <Search className="size-5" aria-hidden="true" />
              </div>
              <div className="flex flex-col gap-1">
                <h2 className="text-lg font-semibold text-neutral-900">
                  Tidak ada lowongan yang cocok
                </h2>
                <p className="text-sm text-neutral-600">
                  {showSavedOnly && savedKeys.length === 0
                    ? "Anda belum menyimpan lowongan apa pun. Klik ikon simpan pada kartu lowongan untuk menambahkannya."
                    : "Coba ubah kata kunci pencarian atau reset filter lokasi dan tipe kerja."}
                </p>
              </div>
              <Button
                type="button"
                onClick={resetFilters}
                className="min-h-10 cursor-pointer"
              >
                Reset Semua Filter
              </Button>
            </CardContent>
          </Card>
        )}
      </section>

      {activeJob && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          onClick={() => setActiveJob(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="quick-apply-title"
            className="w-full max-w-lg rounded-2xl bg-background p-6 shadow-lg ring-1 ring-border"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold text-green-800">
                  {activeJob.jobType}
                </p>
                <h2
                  id="quick-apply-title"
                  className="mt-1 text-xl font-bold text-neutral-900"
                >
                  {activeJob.jobTitle}
                </h2>
                <p className="text-sm text-neutral-600">
                  {activeJob.company} - {activeJob.location}
                </p>
              </div>
              <Button
                type="button"
                variant="ghost"
                size="icon-lg"
                onClick={() => setActiveJob(null)}
                aria-label="Tutup dialog lamaran"
                className="min-h-10 min-w-10 cursor-pointer"
              >
                <X className="size-4" aria-hidden="true" />
              </Button>
            </div>

            <Separator className="my-4" />

            <div className="flex flex-col gap-4">
              <div className="rounded-lg bg-blue-100/40 p-3">
                <p className="text-[11px] font-medium text-neutral-600">
                  ESTIMASI GAJI BULANAN
                </p>
                <p className="text-base font-bold text-blue-800">
                  {activeJob.sallary}
                </p>
                <p className="mt-1 text-xs text-neutral-700">
                  Fasilitas: {activeJob.facilities.join(", ")}
                </p>
              </div>

              <div>
                <p className="mb-2 text-xs font-semibold text-neutral-700">
                  Keahlian yang Dibutuhkan
                </p>
                <div className="flex flex-wrap gap-2">
                  {activeJob.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="bg-blue-100/40 text-neutral-800"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              {isActiveJobApplied ? (
                <div className="flex items-center gap-2 rounded-lg bg-green-50 p-3 text-sm font-medium text-green-800">
                  <CheckCircle2
                    className="size-4 shrink-0"
                    aria-hidden="true"
                  />
                  <span>
                    Lamaran Anda untuk posisi {activeJob.jobTitle} telah
                    terkirim.
                  </span>
                </div>
              ) : null}
            </div>

            <div className="mt-6 flex flex-wrap justify-end gap-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => setActiveJob(null)}
                className="min-h-10 cursor-pointer"
              >
                Tutup
              </Button>
              <Button
                type="button"
                disabled={isActiveJobApplied}
                onClick={() => handleConfirmApply(activeJob)}
                className="min-h-10 cursor-pointer"
              >
                {isActiveJobApplied
                  ? "Lamaran Terkirim"
                  : "Kirim Lamaran Cepat"}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
