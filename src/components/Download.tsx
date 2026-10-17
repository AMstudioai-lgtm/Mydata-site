import { RELEASES_URL } from "@/lib/links";

export default function Download() {
  return (
    <section aria-label="Téléchargement" className="border-b border-line">
      <div className="mx-auto max-w-7xl px-4 py-16 text-center md:px-8 md:py-24">
        <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tighter md:text-5xl">
          Installez Mydata en une minute.
        </h2>
        <p className="mx-auto mt-4 max-w-[60ch] text-base leading-relaxed text-ink2">
          Téléchargez le fichier APK depuis la page des versions, autorisez
          l&apos;installation, ouvrez l&apos;application. Depuis la version
          1.2.0, les mises à jour s&apos;installent par-dessus, sans
          désinstallation.
        </p>
        <div className="mt-8">
          <a
            href={RELEASES_URL}
            className="inline-block bg-accent px-8 py-4 text-base font-bold text-white transition-colors hover:bg-sel active:translate-y-px"
          >
            Télécharger la dernière version
          </a>
        </div>
        <p className="mx-auto mt-4 max-w-[60ch] text-xs leading-relaxed text-ink3">
          Android demande une confirmation pour les applications hors du Play
          Store. La désinstallation complète efface les données locales :
          connectez-vous et synchronisez avant toute réinstallation.
        </p>
      </div>
    </section>
  );
}
