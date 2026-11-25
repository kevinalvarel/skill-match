import { Link } from "react-router";
import { ArrowRight, BadgeCheck, Star } from "lucide-react";

export interface CompanyItem {
  id: string;
  name: string;
  slug: string;
  industry: string;
  location: string;
  rating: number;
  reviewCount: string;
  description: string;
  activeJobs: number;
  verified?: boolean;
  avatarUrl?: string;
  avatarInitials: string;
  avatarBgColor?: string;
  avatarTextColor?: string;
}

export const TOP_COMPANIES: CompanyItem[] = [
  {
    id: "astra-digital",
    name: "Astra Digital International",
    slug: "astra-digital-international",
    industry: "Otomotif & Financial Tech",
    location: "Jakarta",
    rating: 4.8,
    reviewCount: "820 ulasan",
    description:
      "Pelopor transformasi mobilitas cerdas di Indonesia dengan budaya kerja lincah dan fasilitas kesehatan komprehensif.",
    activeJobs: 28,
    verified: true,
    avatarUrl:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=160&q=80",
    avatarInitials: "AD",
  },
  {
    id: "nusantara-pay",
    name: "Nusantara Pay Asia",
    slug: "nusantara-pay-asia",
    industry: "Fintech Payment Gateway",
    location: "Jakarta",
    rating: 4.7,
    reviewCount: "512 ulasan",
    description:
      "Infrastruktur pembayaran digital tercepat yang menghubungkan jutaan UMKM dengan sistem perbankan terpadu.",
    activeJobs: 19,
    verified: true,
    avatarUrl:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=160&q=80",
    avatarInitials: "NP",
  },
  {
    id: "kawan-lama",
    name: "Kawan Lama Retail Group",
    slug: "kawan-lama-retail-group",
    industry: "Omnichannel Retail",
    location: "Jakarta Barat",
    rating: 4.6,
    reviewCount: "1.430 ulasan",
    description:
      "Ritel perlengkapan rumah tangga dan industri terluas yang kini bertransformasi menjadi platform e-commerce modern.",
    activeJobs: 44,
    verified: true,
    avatarInitials: "KL",
    avatarBgColor: "bg-teal-100 dark:bg-teal-950/60",
    avatarTextColor: "text-teal-800 dark:text-teal-300 font-bold",
  },
];

interface CompaniesSectionProps {
  companies?: CompanyItem[];
}

export function CompaniesSection({
  companies = TOP_COMPANIES,
}: CompaniesSectionProps) {
  return (
    <section
      id="perusahaan-terverifikasi"
      aria-labelledby="companies-heading"
      className="w-full py-12 md:py-16 bg-white dark:bg-neutral-950"
    >
      <div className="max-w-7xl px-6 mx-auto">
        {/* Section Header */}
        <header className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-blue-900 dark:text-blue-400 mb-1.5">
              Perusahaan Idaman
            </p>
            <h2
              id="companies-heading"
              className="text-2xl md:text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100"
            >
              Perusahaan Terverifikasi Sedang Aktif Merekrut
            </h2>
          </div>

          <Link
            to="/lowongan-pekerjaan"
            className="group inline-flex items-center gap-1.5 text-sm font-semibold text-blue-900 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 rounded-sm w-fit"
            aria-label="Lihat semua perusahaan terverifikasi"
          >
            <span>Lihat Semua Perusahaan</span>
            <ArrowRight
              className="size-4 transition-transform group-hover:translate-x-1 motion-reduce:transform-none"
              aria-hidden="true"
            />
          </Link>
        </header>

        {/* Companies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {companies.map((company) => (
            <article
              key={company.id}
              className="group relative flex flex-col justify-between p-5 md:p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 shadow-xs hover:shadow-md hover:border-blue-200 dark:hover:border-blue-800/80 hover:-translate-y-0.5 transition-all duration-200 motion-reduce:transform-none motion-reduce:transition-none"
              aria-label={`${company.name}, rating ${company.rating}, ${company.activeJobs} lowongan aktif`}
            >
              <div>
                {/* Header: Avatar, Name, Industry, Rating */}
                <div className="flex items-start gap-3.5">
                  <div
                    className={`size-13 rounded-xl overflow-hidden shrink-0 flex items-center justify-center border border-neutral-200/60 dark:border-neutral-800 ${
                      company.avatarBgColor || "bg-neutral-100 dark:bg-neutral-800"
                    }`}
                  >
                    {company.avatarUrl ? (
                      <img
                        src={company.avatarUrl}
                        alt=""
                        aria-hidden="true"
                        className="size-full object-cover"
                        loading="lazy"
                        width={52}
                        height={52}
                      />
                    ) : (
                      <span
                        className={`text-base tracking-wide ${
                          company.avatarTextColor || "font-bold text-neutral-800 dark:text-neutral-200"
                        }`}
                      >
                        {company.avatarInitials}
                      </span>
                    )}
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1.5">
                      <h3 className="text-base font-bold text-neutral-900 dark:text-neutral-100 truncate group-hover:text-blue-900 dark:group-hover:text-blue-400 transition-colors">
                        <Link
                          to={`/lowongan-pekerjaan?perusahaan=${company.slug}`}
                          className="focus-visible:outline-none focus-visible:underline"
                        >
                          {company.name}
                        </Link>
                      </h3>
                      {company.verified && (
                        <BadgeCheck
                          className="size-4 shrink-0 text-blue-600 dark:text-blue-400"
                          aria-label="Perusahaan Terverifikasi"
                        />
                      )}
                    </div>

                    <p className="text-xs text-neutral-500 dark:text-neutral-400 truncate mt-0.5">
                      {company.industry} • {company.location}
                    </p>

                    <div className="flex items-center gap-1 mt-1 text-xs text-amber-700 dark:text-amber-400 font-medium">
                      <Star
                        className="size-3.5 fill-amber-500 text-amber-500 shrink-0"
                        aria-hidden="true"
                      />
                      <span>{company.rating.toFixed(1)}</span>
                      <span className="text-neutral-500 dark:text-neutral-400 font-normal">
                        ({company.reviewCount})
                      </span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs md:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mt-4 line-clamp-2">
                  {company.description}
                </p>
              </div>

              {/* Footer: Openings count & Action button */}
              <div className="pt-4 mt-5 border-t border-neutral-100 dark:border-neutral-800/80 flex items-center justify-between gap-3">
                <span className="text-xs md:text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                  {company.activeJobs} Lowongan Aktif
                </span>

                <Link
                  to={`/lowongan-pekerjaan?perusahaan=${company.slug}`}
                  className="inline-flex items-center justify-center px-3.5 py-1.5 text-xs font-medium rounded-xl text-blue-900 dark:text-blue-300 bg-blue-50 dark:bg-blue-950/60 hover:bg-blue-100 dark:hover:bg-blue-900/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
                  aria-label={`Kunjungi profil ${company.name}`}
                >
                  Kunjungi Profil
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
