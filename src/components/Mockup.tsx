/**
 * Maquette fidèle à l'application Mydata — reproduite uniquement en CSS,
 * pour rester nette sur tous les écrans (aucune capture d'écran).
 */

const ROWS = [
  { nom: "AirPods Pro", statut: "À vendre", dot: "neutral", montant: "249 $", date: "2026-02-14" },
  { nom: "Licence design", statut: "Gagné", dot: "green", montant: "1 200 $", date: "2026-03-02" },
  { nom: "Écran 27 pouces", statut: "En cours", dot: "blue", montant: "189,99 $", date: "2026-03-11" },
];

const DOT: Record<string, string> = {
  neutral: "border border-ink3",
  green: "bg-[#4CAF50]",
  blue: "bg-accent",
};

function Chain() {
  return (
    <span aria-hidden className="flex h-1.5 w-1.5">
      <span className={`${DOT.green} h-1.5 w-1.5 rounded-full`} />
      <span className={`${DOT.blue} ml-1 h-1.5 w-1.5 rounded-full`} />
    </span>
  );
}

export default function Mockup() {
  return (
    <div aria-label="Maquette de l'application" className="space-y-3">
      {/* Tableau */}
      <div className="border border-line bg-panel">
        <div className="flex items-center justify-between border-b border-line px-4 py-3">
          <span className="font-mono text-xs tracking-wide text-ink3">
            mes-choses
          </span>
          <span className="flex items-center gap-2 font-mono text-[10px] text-ink3">
            <Chain />
            ligne sélectionnée
          </span>
        </div>

        <div className="grid grid-cols-12 gap-2 border-b border-line px-4 py-2 font-mono text-[10px] uppercase tracking-wider text-ink3">
          <span className="col-span-5 md:col-span-4">Nom</span>
          <span className="col-span-4 md:col-span-3">Statut</span>
          <span className="col-span-2 text-right md:col-span-3">Montant</span>
          <span className="hidden col-span-2 text-right md:block">Date</span>
        </div>

        {ROWS.map((r, i) => (
          <div
            key={r.nom}
            className={`grid grid-cols-12 items-center gap-2 border-b border-line px-4 py-3 text-sm last:border-b ${
              i === 2 ? "bg-sel" : ""
            }`}
          >
            <span className="col-span-5 font-medium md:col-span-4">{r.nom}</span>
            <span className="col-span-4 flex items-center gap-1.5 text-ink2 md:col-span-3">
              <span className={`h-1.5 w-1.5 rounded-full ${DOT[r.dot]}`} />
              {r.statut}
            </span>
            <span className="col-span-2 text-right tabular-nums md:col-span-3">
              {r.montant}
            </span>
            <span className="hidden col-span-2 text-right font-mono text-xs text-ink3 md:block">
              {r.date}
            </span>
          </div>
        ))}

        <div className="grid grid-cols-12 gap-2 px-4 py-2 font-mono text-[10px] text-ink3">
          <span className="col-span-7 md:col-span-7">Total — 3 lignes</span>
          <span className="col-span-5 text-right text-xs tabular-nums text-ink md:col-span-5">
            1 639 $
          </span>
        </div>
      </div>

      {/* Détail d'une ligne : images + notes */}
      <div className="border border-line bg-panel p-4">
        <p className="font-mono text-[10px] uppercase tracking-wider text-ink3">
          Détail de ligne
        </p>
        <div className="mt-3 grid grid-cols-2 gap-2">
          <div className="flex h-16 items-center justify-center border border-line bg-line">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
              <rect x="1" y="1" width="18" height="18" stroke="currentColor" className="text-ink3" />
              <path d="M4 14l4-5 3 4 2-2 3 3" stroke="currentColor" className="text-ink3" />
            </svg>
          </div>
          <div className="flex h-16 items-center justify-center border border-line bg-line">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
              <rect x="1" y="1" width="18" height="18" stroke="currentColor" className="text-ink3" />
              <circle cx="7" cy="7" r="2" stroke="currentColor" className="text-ink3" />
            </svg>
          </div>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-ink2">
          Acheté pour la session photo de mars. À re-tester sur la batterie
          au retour.<span className="ml-1 cursor-text inline-block w-px h-4 align-middle bg-accent" />
        </p>
      </div>
    </div>
  );
}
