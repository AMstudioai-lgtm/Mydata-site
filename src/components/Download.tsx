import Reveal from "@/lib/Reveal";
import { RELEASES_URL } from "@/lib/links";

const STEPS = [
  {
    n: "01",
    title: "Téléchargez l'APK",
    body: (
      <>
        Un seul fichier, servi par les &nbsp;
        <a
          href={RELEASES_URL}
          className="text-accent underline decoration-line underline-offset-4 transition-colors hover:text-white"
        >
          Versions GitHub
        </a>
        &nbsp;du dépôt officiel.
      </>
    ),
  },
  {
    n: "02",
    title: "Autorisez l'installation",
    body: (
      <>
        Android bloque les apps hors Play Store : acceptez les sources
        inconnues pour votre navigateur dans{" "}
        <kbd>Paramètres</kbd> → <kbd>Applications</kbd>, puis confirmez.
      </>
    ),
  },
  {
    n: "03",
    title: "Ouvrez Mydata",
    body: (
      <>
        Depuis la version 1.2.0, chaque mise à jour s&apos;installe
        par-dessus, sans désinstallation. Pas de compte à créer.
      </>
    ),
  },
];

export default function Download() {
  return (
    <section id="installation" aria-label="Téléchargement" className="border-b border-line">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
        <h2 className="max-w-2xl text-3xl font-bold tracking-tighter md:text-5xl">
          Installez Mydata en une minute.
        </h2>

        <div className="mt-8">
          <Reveal>
            <a
              href={RELEASES_URL}
              className="inline-block bg-accent px-8 py-4 text-base font-bold text-white transition-colors hover:bg-sel active:translate-y-px"
            >
              Télécharger la dernière version
            </a>
          </Reveal>
        </div>

        <ol className="mt-12 grid grid-cols-1 gap-px border border-line bg-line md:grid-cols-3">
          {STEPS.map((s, i) => (
            <li key={s.n} className="bg-panel">
              <Reveal index={i}>
                <article className="h-full p-6 md:p-8">
                  <span className="font-mono text-sm font-bold text-accent">{s.n}</span>
                  <h3 className="mt-3 text-lg font-bold tracking-tight">{s.title}</h3>
                  <p className="mt-2 max-w-[48ch] text-sm leading-relaxed text-ink2">
                    {s.body}
                  </p>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>

        <p className="mt-6 max-w-[65ch] text-xs leading-relaxed text-ink3">
          La désinstallation complète efface les données locales : connectez-vous
          et synchronisez avant toute réinstallation. Si vous veniez de la 1.1.1
          ou plus ancienne, une unique désinstallation est nécessaire (la clé de
          signature a changé), puis les mises à jour suivantes s&apos;enchaînent
          normalement.
        </p>
      </div>
    </section>
  );
}
