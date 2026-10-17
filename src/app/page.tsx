import Header from "@/components/Header";
import Hero from "@/components/Hero";
import OfflineBand from "@/components/OfflineBand";
import Features from "@/components/Features";
import GettingStarted from "@/components/GettingStarted";
import Privacy from "@/components/Privacy";
import Sync from "@/components/Sync";
import Download from "@/components/Download";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <OfflineBand />
        <Features />
        <GettingStarted />
        <Privacy />
        <Sync />
        <Download />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
