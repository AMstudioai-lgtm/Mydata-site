import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <p className="font-mono text-sm text-ink3">404 — page introuvable</p>
      <h1 className="mt-4 max-w-md text-3xl font-bold tracking-tighter md:text-5xl">
        Cette page n&apos;existe pas.
      </h1>
      <Link
        href="/"
        className="mt-8 bg-accent px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-sel active:translate-y-px"
      >
        Retour à l&apos;accueil
      </Link>
    </main>
  );
}
