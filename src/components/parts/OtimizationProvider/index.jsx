import { useEffect, useRef, useState } from "react";
import OtimizationContext from "./OtimizationContext";
import { useFps } from "react-fps";
import Button from "../Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

function OtimizationProvider({ children }) {
  const { avgFps } = useFps();
  const showSugestion = avgFps < 300;
  const [slowMode, setSlowMode] = useState(() => {
    const storageSlowMode = localStorage.getItem("slow-mode-active");
    return storageSlowMode ? JSON.parse(storageSlowMode) : false;
  });
  const dialog = useRef(null);
  const [dialogDisplay, setDialogDisplay] = useState(true);

  useEffect(() => {
    localStorage.setItem("slow-mode-active", JSON.stringify(slowMode));
  }, [slowMode]);

  useEffect(() => {
    if (!dialogDisplay) {
      dialog.current.remove();
    }
  }, [dialogDisplay]);

  return (
    <OtimizationContext value={{ avgFps, slowMode }}>
      {children}

      {showSugestion && (
        <div
          className="fixed right-0 bottom-0 z-70 p-10 bg-slate-950 border-t-2 border-l-2 border-slate-500 rounded-tl-md"
          ref={dialog}
        >
          <div className="flex items-center justify-between">
            <span>FPS atual: {avgFps}</span>
            <FontAwesomeIcon
              icon={faX}
              className="cursor-pointer text-2xl"
              onClick={() => setDialogDisplay(false)}
              aria-label="Não avisar novamente durante esta seção"
            />
          </div>

          <p className="my-5">
            Seu FPS está baixo, considere ativar a opção {"Modo lento"} para
            melhor performance.
          </p>

          <Button
            type="button"
            variant="light"
            onClick={() => setSlowMode((prev) => !prev)}
          >
            Alternar modo lento
          </Button>
        </div>
      )}
    </OtimizationContext>
  );
}

export default OtimizationProvider;
