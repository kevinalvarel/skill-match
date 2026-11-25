import { Link } from "react-router";
import { ArrowUpRight, Mail, MapPin, ShieldCheck } from "lucide-react";

export function Footer() {
  return (
    <footer
      aria-label="Footer Navigasi"
      className="w-full bg-slate-950 text-slate-300 border-t border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-slate-800/80">
          {/* Brand & Mission Column (Spans 2 columns on desktop) */}
          <div className="lg:col-span-2 flex flex-col space-y-4">
            <Link
              to="/"
              className="inline-flex flex-col w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded-sm"
              aria-label="SkillMatch Job Portal Beranda"
            >
              <span className="text-xl font-bold text-white tracking-tight">
                SkillMatch
              </span>
              <span className="text-[10px] uppercase tracking-widest text-blue-400 font-semibold">
                Job Portal
              </span>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Platform rekrutmen terverifikasi di Indonesia yang menghubungkan
              talenta profesional dengan perusahaan impian melalui transparansi
              gaji nyata dan kecocokan skill yang akurat.
            </p>

            <div className="flex flex-col gap-1.5 pt-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin
                  className="size-3.5 text-slate-500 shrink-0"
                  aria-hidden="true"
                />
                <span>Jakarta Selatan, DKI Jakarta, Indonesia</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail
                  className="size-3.5 text-slate-500 shrink-0"
                  aria-hidden="true"
                />
                <a
                  href="mailto:bantuan@skillmatch.id"
                  className="hover:text-white transition-colors focus-visible:outline-none focus-visible:underline"
                >
                  bantuan@skillmatch.id
                </a>
              </div>
            </div>
          </div>

          {/* Pencari Kerja */}
          <div className="flex flex-col space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Pencari Kerja
            </h3>
            <ul className="flex flex-col space-y-2.5 text-sm">
              <li>
                <Link
                  to="/lowongan-pekerjaan"
                  className="text-slate-400 hover:text-white transition-colors focus-visible:outline-none focus-visible:underline"
                >
                  Semua Lowongan
                </Link>
              </li>
              <li>
                <a
                  href="/#kategori-pekerjaan"
                  className="text-slate-400 hover:text-white transition-colors focus-visible:outline-none focus-visible:underline"
                >
                  Kategori Industri
                </a>
              </li>
              <li>
                <a
                  href="/#perusahaan-terverifikasi"
                  className="text-slate-400 hover:text-white transition-colors focus-visible:outline-none focus-visible:underline"
                >
                  Perusahaan Idaman
                </a>
              </li>
              <li>
                {/* TODO: Fitur kalkulator estimasi gaji tahap pengembangan */}
                <span className="inline-flex items-center gap-2 text-slate-500 cursor-not-allowed">
                  <span>Estimasi Gaji</span>
                  <span className="text-[10px] font-medium bg-slate-800 text-slate-400 px-1.5 py-0.5 rounded">
                    Segera
                  </span>
                </span>
              </li>
            </ul>
          </div>

          {/* Untuk Perusahaan */}
          <div className="flex flex-col space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Untuk Perusahaan
            </h3>
            <ul className="flex flex-col space-y-2.5 text-sm">
              <li>
                {/* TODO: Portal pasang lowongan bagi employer */}
                <span className="inline-flex items-center gap-2 text-slate-500 cursor-not-allowed">
                  <span>Pasang Lowongan</span>
                  <span className="text-[10px] font-medium bg-slate-800 text-slate-400 px-1.5 py-0.5 rounded">
                    Segera
                  </span>
                </span>
              </li>
              <li>
                {/* TODO: Akses database talenta verified */}
                <span className="inline-flex items-center gap-2 text-slate-500 cursor-not-allowed">
                  <span>Cari Talenta</span>
                  <span className="text-[10px] font-medium bg-slate-800 text-slate-400 px-1.5 py-0.5 rounded">
                    Segera
                  </span>
                </span>
              </li>
              <li>
                <a
                  href="/#perusahaan-terverifikasi"
                  className="text-slate-400 hover:text-white transition-colors focus-visible:outline-none focus-visible:underline"
                >
                  Standar Verifikasi
                </a>
              </li>
            </ul>
          </div>

          {/* Dukungan & Legal */}
          <div className="flex flex-col space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Pusat Informasi
            </h3>
            <ul className="flex flex-col space-y-2.5 text-sm">
              <li>
                <a
                  href="mailto:bantuan@skillmatch.id?subject=Bantuan%20Pengguna"
                  className="inline-flex items-center gap-1 text-slate-400 hover:text-white transition-colors focus-visible:outline-none focus-visible:underline"
                >
                  <span>Pusat Bantuan</span>
                  <ArrowUpRight
                    className="size-3.5 text-slate-500"
                    aria-hidden="true"
                  />
                </a>
              </li>
              <li>
                <a
                  href="mailto:keamanan@skillmatch.id?subject=Laporan%20Keamanan"
                  className="text-slate-400 hover:text-white transition-colors focus-visible:outline-none focus-visible:underline"
                >
                  Panduan Keamanan
                </a>
              </li>
              <li>
                {/* TODO: Halaman detail syarat dan privasi legal */}
                <span className="text-slate-500">Syarat & Ketentuan</span>
              </li>
              <li>
                <span className="text-slate-500">Kebijakan Privasi</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & System Health */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            Hak Cipta © 2026 SkillMatch Indonesia. Hak cipta dilindungi
            undang-undang.
          </p>

          <div className="flex items-center gap-2">
            <span
              className="size-2 rounded-full bg-emerald-500"
              aria-hidden="true"
            />
            <span className="text-slate-300 font-medium">
              Sistem Operasional Normal
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
