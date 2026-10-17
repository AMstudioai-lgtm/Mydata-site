const POINTS = [
  "Créez un compte depuis les paramètres de l'application.",
  "Appuyez sur « Synchroniser maintenant » pour envoyer vos tables en ligne.",
  "Reconnectez-vous sur un autre appareil pour tout récupérer, images comprises.",
];

export default function Sync() {
  return (
    <section
      id="synchronisation"
      aria-label="Synchronisation"
      className="border-b border-line bg-panel"
    >
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-12 md:px-8 md:py-24">
        <div className="md:col-span-7">
          <h2 className="max-w-xl text-3xl font-bold tracking-tighter md:text-5xl">
            Vos données vous suivent, si vous le décidez.
          </h2>
          <p className="mt-4 max-w-[60ch] text-base leading-relaxed text-ink2">
            La synchronisation n&apos;envoie que les modifications. En cas de
            conflit, la version la plus récente gagne. Chaque compte reste
            isolé des autres.
          </p>
        </div>
        <ol className="space-y-0 md:col-span-5">
          {POINTS.map((p, i) => (
            <li
              key={p}
              className="border-t border-line py-4 text-sm leading-relaxed text-ink2 last:border-b"
            >
              <span className="mr-3 font-bold text-ink">{i + 1}.</span>
              {p}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
