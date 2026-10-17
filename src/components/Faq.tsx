const QA: Array<[string, string]> = [
  [
    "L'APK est-il sûr ?",
    "L'application est signée et distribuée uniquement via la page Releases officielle du dépôt GitHub. Le code source est public.",
  ],
  [
    "Je peux mettre à jour sans perdre mes données ?",
    "Oui. Depuis la version 1.2.0, chaque nouvelle version s'installe par-dessus l'ancienne. Antérieures à la 1.1.1, désinstallez une fois (la clé de signature a changé) puis installez la 1.2.0 ou plus récente.",
  ],
  [
    "Mes données partent-elles sur internet ?",
    "Non, tant que vous ne créez pas de compte. La synchronisation est optionnelle et ne s'active qu'en vous connectant. Déconnecté, vous ne voyez que ce qui n'a jamais été rattaché à un compte.",
  ],
  [
    "Une version iPhone ?",
    "Pas pour le moment. Mydata est disponible sur Android, en APK téléchargeable directement.",
  ],
  [
    "Et si je désinstalle l'application ?",
    "La base locale est effacée. Connectez-vous et synchronisez d'abord pour pouvoir tout récupérer, images comprises, sur l'appareil suivant.",
  ],
];

export default function Faq() {
  return (
    <section id="faq" aria-label="FAQ" className="border-b border-line">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
        <h2 className="max-w-xl text-3xl font-bold tracking-tighter md:text-5xl">
          Questions fréquentes.
        </h2>
        <div className="mt-10 max-w-4xl">
          {QA.map(([q, a]) => (
            <details key={q} className="group border-b border-line first:border-t">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="text-base font-bold md:text-lg">{q}</span>
                <span
                  aria-hidden
                  className="font-mono text-xl text-ink2 transition-transform duration-300 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="max-w-[65ch] pb-5 text-sm leading-relaxed text-ink2">
                {a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
