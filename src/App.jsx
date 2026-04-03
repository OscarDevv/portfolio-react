import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";
import GradientLine from "./components/GradientLine";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutMeSection from "./components/AboutMeSection";
import HabilitiesSection from "./components/HabilitiesSection";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <main>
        <AboutMeSection />
        <HabilitiesSection />
      </main>
      <GradientLine />

      <SpeedInsights />
      <Analytics />
    </>
  );
}

export default App;
