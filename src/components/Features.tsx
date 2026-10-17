import Reveal from "@/lib/Reveal";

const CELLS = [
  {
    title: "Colonnes sur mesure",
    body: "Texte, nombre, date, sélection. Vous définissez chaque colonne, avec format d'affichage pour les nombres.",
    span: "md:col-span-7",
    tint: "bg-panel",
  },
  {
    title: "Totaux automatiques",
    body: "Somme et moyenne calculées en bas de chaque colonne numérique, en dollars ou en pourcentages.",
    span: "md:col-span-5",
    tint: "bg-sel",
  },
  {
    title: "Lignes détaillées",
    body: "Chaque ligne s'ouvre en pleine page, avec images, légendes et notes libres.",
    span: "md:col-span-5",
    tint: "bg-panel",
  },
  {
    title: "Données isolées par compte",
    body: "Chaque compte retrouve uniquement ses propres données. Le mode déconnecté reste strictement local.",
    span: "md:col-span-7",
    tint: "bg-panel",
  },
];

export default function Features() {
  return (
    <section
      id="fonctionnalites"
      aria-label="Fonctionnalités"
      className="border-b border-line"
    >
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
        <Reveal>
          <h2 className="max-w-xl text-3xl font-bold tracking-tighter md:text-5xl">
            Un tableur simple, pensé pour durer.
          </h2>
        </Reveal>
        <div className="mt-10 grid grid-cols-1 gap-px border border-line bg-line md:grid-cols-12">
          {CELLS.map((c, i) => (
            <Reveal key={c.title} className={`${c.span} ${c.tint}`} index={i}>
              <article className="h-full p-6 md:p-8">
                <h3 className="text-xl font-bold tracking-tight">{c.title}</h3>
                <p className="mt-2 max-w-[55ch] text-sm leading-relaxed text-ink2">
                  {c.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
