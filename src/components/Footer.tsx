import { RELEASES_URL, REPO_URL } from "@/lib/links";

export default function Footer() {
  return (
    <footer className="bg-panel">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 text-sm text-ink2 md:flex-row md:items-center md:justify-between md:px-8">
        <p className="font-bold text-ink">Mydata</p>
        <nav aria-label="Pied de page" className="flex flex-wrap gap-x-6 gap-y-2">
          <a href={RELEASES_URL} className="transition-colors hover:text-ink">
            Versions
          </a>
          <a href={REPO_URL} className="transition-colors hover:text-ink">
            Code source
          </a>
          <a href="#haut" className="transition-colors hover:text-ink">
            Haut de page
          </a>
        </nav>
      </div>
    </footer>
  );
}
