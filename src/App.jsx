import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";
import GradientLine from "./components/page/GradientLine";
import Header from "./components/page/Header";
import Hero from "./components/page/Hero";
import AboutMe from "./components/page/AboutMe";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <main>
        <AboutMe />
      </main>
      <GradientLine />

      <SpeedInsights />
      <Analytics />
    </>
  );
}

export default App;
