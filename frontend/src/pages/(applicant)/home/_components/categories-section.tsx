import type { ComponentType } from "react";
import { Link } from "react-router";
import {
  Code2,
  Palette,
  Megaphone,
  Landmark,
  Users,
  Headphones,
  BarChart3,
  Truck,
  ArrowRight,
  TrendingUp,
} from "lucide-react";

export interface JobCategoryItem {
  id: string;
  name: string;
  jobCount: string;
  trendToday: number;
  slug: string;
  icon: ComponentType<{
    className?: string;
    "aria-hidden"?: boolean | "true" | "false";
  }>;
  colorClasses: {
    bg: string;
    text: string;
  };
}

export const POPULAR_CATEGORIES: JobCategoryItem[] = [
  {
    id: "tech-it",
    name: "Teknologi & IT",
    jobCount: "8.420 Lowongan",
    trendToday: 142,
    slug: "teknologi-it",
    icon: Code2,
    colorClasses: {
      bg: "bg-blue-50 dark:bg-blue-950/50",
      text: "text-blue-600 dark:text-blue-400",
    },
  },
  {
    id: "creative-design",
    name: "Desain Kreatif",
    jobCount: "3.180 Lowongan",
    trendToday: 88,
    slug: "desain-kreatif",
    icon: Palette,
    colorClasses: {
      bg: "bg-emerald-50 dark:bg-emerald-950/50",
      text: "text-emerald-600 dark:text-emerald-400",
    },
  },
  {
    id: "marketing-sales",
    name: "Pemasaran & Sales",
    jobCount: "6.720 Lowongan",
    trendToday: 95,
    slug: "pemasaran-sales",
    icon: Megaphone,
    colorClasses: {
      bg: "bg-sky-50 dark:bg-sky-950/50",
      text: "text-sky-600 dark:text-sky-400",
    },
  },
  {
    id: "finance-accounting",
    name: "Keuangan & Akuntansi",
    jobCount: "4.350 Lowongan",
    trendToday: 40,
    slug: "keuangan-akuntansi",
    icon: Landmark,
    colorClasses: {
      bg: "bg-indigo-50 dark:bg-indigo-950/50",
      text: "text-indigo-600 dark:text-indigo-400",
    },
  },
  {
    id: "hr-recruitment",
    name: "SDM & Rekrutmen",
    jobCount: "2.210 Lowongan",
    trendToday: 34,
    slug: "sdm-rekrutmen",
    icon: Users,
    colorClasses: {
      bg: "bg-teal-50 dark:bg-teal-950/50",
      text: "text-teal-600 dark:text-teal-400",
    },
  },
  {
    id: "customer-ops",
    name: "Customer Ops",
    jobCount: "5.190 Lowongan",
    trendToday: 82,
    slug: "customer-ops",
    icon: Headphones,
    colorClasses: {
      bg: "bg-blue-50 dark:bg-blue-950/50",
      text: "text-blue-600 dark:text-blue-400",
    },
  },
  {
    id: "data-ai",
    name: "Data & AI",
    jobCount: "2.870 Lowongan",
    trendToday: 71,
    slug: "data-ai",
    icon: BarChart3,
    colorClasses: {
      bg: "bg-violet-50 dark:bg-violet-950/50",
      text: "text-violet-600 dark:text-violet-400",
    },
  },
  {
    id: "logistics-distribution",
    name: "Logistik & Distribusi",
    jobCount: "3.900 Lowongan",
    trendToday: 53,
    slug: "logistik-distribusi",
    icon: Truck,
    colorClasses: {
      bg: "bg-teal-50 dark:bg-teal-950/50",
      text: "text-teal-600 dark:text-teal-400",
    },
  },
];

interface CategoriesSectionProps {
  categories?: JobCategoryItem[];
  totalCategoriesCount?: number;
}

export function CategoriesSection({
  categories = POPULAR_CATEGORIES,
  totalCategoriesCount = 42,
}: CategoriesSectionProps) {
  return (
    <section
      id="kategori-pekerjaan"
      aria-labelledby="categories-heading"
      className="w-full py-12 md:py-16 bg-neutral-50/60 dark:bg-neutral-950/30"
    >
      <div className="max-w-7xl px-6 mx-auto">
        {/* Section Header */}
        <header className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-teal-700 dark:text-teal-400 mb-1.5">
              Eksplorasi Industri
            </p>
            <h2
              id="categories-heading"
              className="text-2xl md:text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100"
            >
              Kategori Pekerjaan Paling Dicari
            </h2>
          </div>

          <Link
            to="/lowongan-pekerjaan"
            className="group inline-flex items-center gap-1.5 text-sm font-semibold text-blue-900 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 rounded-sm w-fit"
            aria-label={`Lihat semua ${totalCategoriesCount} kategori pekerjaan`}
          >
            <span>Lihat Semua Kategori ({totalCategoriesCount})</span>
            <ArrowRight
              className="size-4 transition-transform group-hover:translate-x-1 motion-reduce:transform-none"
              aria-hidden="true"
            />
          </Link>
        </header>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Link
                key={category.id}
                to={`/lowongan-pekerjaan?kategori=${category.slug}`}
                className="group relative flex items-center p-4 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 shadow-xs hover:shadow-md hover:border-blue-200 dark:hover:border-blue-800/80 hover:-translate-y-0.5 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 motion-reduce:transform-none motion-reduce:transition-none"
                aria-label={`${category.name}, ${category.jobCount}, bertambah ${category.trendToday} hari ini`}
              >
                {/* Category Icon */}
                <div
                  className={`size-12 rounded-xl flex items-center justify-center shrink-0 ${category.colorClasses.bg} ${category.colorClasses.text} transition-transform duration-200 group-hover:scale-105 motion-reduce:transform-none`}
                  aria-hidden="true"
                >
                  <Icon className="size-6" aria-hidden="true" />
                </div>

                {/* Content */}
                <div className="ml-3.5 flex-1 min-w-0">
                  <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 truncate group-hover:text-blue-900 dark:group-hover:text-blue-400 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                    {category.jobCount}
                  </p>
                  <div className="flex items-center gap-1 text-[11px] font-medium text-emerald-700 dark:text-emerald-400 mt-1">
                    <TrendingUp
                      className="size-3 shrink-0"
                      aria-hidden="true"
                    />
                    <span>+{category.trendToday} hari ini</span>
                  </div>
                </div>

                {/* Interactive Affordance Chevron */}
                <div
                  className="ml-2 text-neutral-400 dark:text-neutral-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200 motion-reduce:transform-none"
                  aria-hidden="true"
                >
                  <ArrowRight className="size-4" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
