import { SpeedInsights } from "@vercel/speed-insights/react";
import GradientLine from "./components/page/GradientLine";
import Header from "./components/page/Header";
import Hero from "./components/page/Hero";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <GradientLine />
      <SpeedInsights />
    </>
  );
}

export default App;
