import Reveal from "@/lib/Reveal";

const STEPS = [
  {
    n: "01",
    title: "Créez une table",
    body: "Menu latéral, bouton +, ou « Créer une database » depuis l'accueil.",
  },
  {
    n: "02",
    title: "Ajoutez des colonnes",
    body: "Nom, type, options pour les sélections. Le modèle standard donne un départ immédiat.",
  },
  {
    n: "03",
    title: "Remplissez",
    body: "Bouton « + Ligne », saisie au clavier, sélecteur de date, listes de choix.",
  },
];

export default function GettingStarted() {
  return (
    <section
      id="prise-en-main"
      aria-label="Prise en main"
      className="border-b border-line"
    >
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
        <Reveal>
          <h2 className="max-w-xl text-3xl font-bold tracking-tighter md:text-5xl">
            En route en trois gestes.
          </h2>
        </Reveal>
        <ol className="mt-10">
          {STEPS.map((s, i) => (
            <li
              key={s.n}
              className="border-b border-line py-6 first:border-t"
            >
              <Reveal className="grid grid-cols-12 gap-4" index={i}>
                <span className="col-span-3 font-mono font-bold text-accent md:col-span-2 md:text-lg">
                  {s.n}
                </span>
                <div className="col-span-9 md:col-span-10">
                  <h3 className="text-lg font-bold">{s.title}</h3>
                  <p className="mt-1 max-w-[60ch] text-sm leading-relaxed text-ink2">
                    {s.body}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
