export default function OfflineBand() {
  return (
    <section aria-label="Hors-ligne" className="border-b border-line">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
        <p className="max-w-4xl text-2xl font-bold leading-snug tracking-tight md:text-4xl">
          Tout est enregistré sur votre téléphone. Aucune donnée ne part sur
          internet sans que vous ne vous connectiez.
        </p>
        <p className="mt-4 max-w-[65ch] text-base leading-relaxed text-ink2">
          L&apos;application s&apos;ouvre et fonctionne entièrement hors
          connexion. La synchronisation n&apos;existe que si vous créez un
          compte.
        </p>
      </div>
    </section>
  );
}
