import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Bookmark, Clock } from "lucide-react";
import { Link } from "react-router";

export interface JobItem {
  jobTitle: string;
  company: string;
  location: string;
  jobType: string;
  sallary: string;
  facilities: string[];
  skills: string[];
}

interface JobCardProps {
  job: JobItem;
  isSaved?: boolean;
  onToggleSave?: (job: JobItem) => void;
  onApply?: (job: JobItem) => void;
  applyHref?: string;
}

function getCompanyInitials(company: string): string {
  const cleaned = company.replace(/^PT\s+/i, "").trim();
  const words = cleaned.split(/\s+/).filter(Boolean);
  if (words.length === 0) return "PT";
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return (words[0][0] + words[1][0]).toUpperCase();
}

export function JobCard({
  job,
  isSaved = false,
  onToggleSave,
  onApply,
  applyHref = "/lowongan-pekerjaan",
}: JobCardProps) {
  const initials = getCompanyInitials(job.company);

  return (
    <Card className="flex h-full flex-col justify-between">
      <CardHeader className="flex flex-row gap-3">
        <Avatar size="lg" className="size-16 shrink-0 rounded-xl sm:size-20">
          <AvatarFallback className="rounded-xl bg-blue-100/60 font-semibold text-blue-900">
            {initials}
          </AvatarFallback>
        </Avatar>
        <div className="flex min-w-0 flex-col justify-center gap-1">
          <h3 className="text-base font-bold leading-snug text-neutral-900">
            {job.jobTitle}
          </h3>
          <p className="text-xs text-neutral-600">
            {job.company} - <span>{job.location}</span>
          </p>
          <p className="text-[11px] font-semibold text-green-800">
            {job.jobType}
          </p>
        </div>
      </CardHeader>

      <CardContent className="flex flex-1 flex-col gap-4">
        <div className="flex flex-col justify-center gap-0.5 rounded-lg bg-blue-100/40 p-3">
          <h4 className="text-[11px] font-medium text-neutral-600">
            ESTIMASI GAJI BULANAN
          </h4>
          <p className="font-bold text-blue-800">{job.sallary}</p>
          {job.facilities.length > 0 && (
            <div className="flex flex-row items-center gap-2">
              <span className="text-[11px] font-medium text-neutral-600">
                {job.facilities.join(", ")}
              </span>
            </div>
          )}
        </div>

        <div className="flex w-full flex-row flex-wrap gap-2">
          {job.skills.map((skill) => (
            <Badge
              key={skill}
              variant="outline"
              className="bg-blue-100/40 text-neutral-800"
            >
              {skill}
            </Badge>
          ))}
        </div>

        <Separator className="mt-auto" />
      </CardContent>

      <CardFooter className="flex flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-1.5 text-xs text-neutral-600">
          <Clock className="size-4 shrink-0 text-neutral-600" aria-hidden="true" />
          <span>Lowongan Aktif</span>
        </div>
        <div className="flex items-center gap-2">
          {onToggleSave && (
            <Button
              type="button"
              variant="outline"
              onClick={() => onToggleSave(job)}
              aria-pressed={isSaved}
              aria-label={
                isSaved
                  ? `Hapus ${job.jobTitle} dari tersimpan`
                  : `Simpan lowongan ${job.jobTitle}`
              }
              className="min-h-10 min-w-10 cursor-pointer"
            >
              <Bookmark
                className={
                  isSaved ? "fill-blue-800 text-blue-800" : "text-neutral-700"
                }
                aria-hidden="true"
              />
            </Button>
          )}
          {onApply ? (
            <Button
              type="button"
              onClick={() => onApply(job)}
              className="min-h-10 cursor-pointer"
            >
              Lamar Cepat
            </Button>
          ) : (
            <Button
              nativeButton={false}
              render={<Link to={applyHref} />}
              className="min-h-10 cursor-pointer"
            >
              Lamar Cepat
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}

