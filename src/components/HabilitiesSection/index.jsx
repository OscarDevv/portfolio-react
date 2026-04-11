import { useRef } from "react";
import Habilities from "../Habilities";
import Heading from "../Heading";

function HabilitiesSection() {
  const habilityDescription = useRef(null);

  return (
    <section
      className="px-8 py-30 border-t-2 border-slate-500 md:px-16"
      id="habilities"
    >
      <Heading>Habilidades</Heading>

      <div className="grid grid-cols-1 justify-items-start gap-4 my-12 sm:grid-cols-2 sm:justify-items-center md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        <Habilities element={habilityDescription} />
      </div>

      <p ref={habilityDescription} className="mx-4 text-xl text-center">
        Clique em uma das habilidades para saber o quanto eu sei sobre cada uma
        delas.
      </p>
    </section>
  );
}

export default HabilitiesSection;
