import { RELEASES_URL, REPO_URL } from "@/lib/links";
import Mockup from "./Mockup";

export default function Hero() {
  return (
    <section id="haut" className="border-b border-line pt-16 md:pt-[72px]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-12 md:px-8 md:py-24">
        <div className="md:col-span-7">
          <h1 className="max-w-xl text-4xl font-bold leading-none tracking-tighter md:text-6xl">
            Vos bases de données, sur votre téléphone.
          </h1>
          <p className="mt-6 max-w-[52ch] text-base leading-relaxed text-ink2">
            Mydata crée des tableaux personnalisés qui fonctionnent sans
            internet. Vos données restent sur votre appareil.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={RELEASES_URL}
              className="bg-accent px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-sel active:translate-y-px"
            >
              Télécharger l&apos;APK
            </a>
            <a
              href={REPO_URL}
              className="border border-line px-6 py-3 text-sm font-bold text-ink transition-colors hover:border-ink3 active:translate-y-px"
            >
              Code source
            </a>
          </div>
        </div>
        <div className="md:col-span-5">
          <Mockup />
        </div>
      </div>
    </section>
  );
}
