const CLAIMS = [
  {
    t: "Aucun tracker",
    d: "Pas d'analytique, pas de publicité, pas de pixels. Ce site ne pose aucun cookie.",
  },
  {
    t: "Sans compte",
    d: "L'application fonctionne entièrement en local. Le compte ne sert qu'à synchroniser.",
  },
  {
    t: "Sync par consentement",
    d: "Vous décidez. Créez un compte et appuyez sur « Synchroniser maintenant » pour envoyer vos données.",
  },
];

export default function Privacy() {
  return (
    <section
      id="confidentialite"
      aria-label="Confidentialité"
      className="border-b border-line"
    >
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
        <h2 className="max-w-xl text-3xl font-bold tracking-tighter md:text-5xl">
          Privé par construction.
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-px border border-line bg-line md:grid-cols-3">
          {CLAIMS.map((c) => (
            <article key={c.t} className="bg-panel p-6 md:p-8">
              <h3 className="text-xl font-bold tracking-tight">{c.t}</h3>
              <p className="mt-2 max-w-[55ch] text-sm leading-relaxed text-ink2">
                {c.d}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
