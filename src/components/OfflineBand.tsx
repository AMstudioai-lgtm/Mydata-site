const STATS: Array<[string, string]> = [
  ["100 %", "hors-ligne"],
  ["4", "types de colonnes"],
  ["0", "compte obligatoire"],
  ["∞", "tables locales"],
];

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
        <dl className="mt-10 grid grid-cols-2 gap-px border border-line bg-line md:grid-cols-4">
          {STATS.map(([v, l]) => (
            <div key={l} className="flex flex-col bg-panel p-6">
              <dd className="text-3xl font-bold tracking-tight text-ink">{v}</dd>
              <dt className="mt-1 text-sm text-ink2">{l}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
