import { useRef } from "react";
import Habilities from "../Habilities";
import Heading from "../Heading";

function HabilitiesSection() {
  const habilityDescription = useRef(null);

  return (
    <section
      className="border-t-2 border-slate-500 px-16 py-30"
      id="habilities"
    >
      <Heading>Habilidades</Heading>

      <div
        id="habilities-list-container"
        className="grid grid-cols-6 justify-items-center gap-4 my-12"
      >
        <Habilities element={habilityDescription} />
      </div>

      <p ref={habilityDescription} className="text-center mx-4 text-xl">
        Clique em uma das habilidades para saber o quanto eu sei sobre cada uma
        delas.
      </p>
    </section>
  );
}

export default HabilitiesSection;
