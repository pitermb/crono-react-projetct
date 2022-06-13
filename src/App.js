import "./App.css";
import { useState } from "react";

function App() {
  const [cronoMinuto, setCronoMinuto] = useState(0);
  const [cronoSegundo, setCronoSegundo] = useState(0);
  const [cronoInterval, setCronoInterval] = useState();

  function iniciarTimer() {
    let minuto = Number(document.querySelector("#inputMinuto").value);
    setCronoMinuto(minuto);
    let segundo = Number(document.querySelector("#inputSegundo").value);
    setCronoSegundo(segundo);

    setCronoInterval(
      setInterval(() => {
        mudarTempo();
      }, 1000)
    );
  }

  function mudarTempo(params) {
    setCronoSegundo((prevSegundo) => {
      if (prevSegundo - 1 === 0) {
        setCronoMinuto((prevMinutos) => {
          if (prevMinutos - 1 === -1) {
            stopTimer();
          } else {
            return prevMinutos - 1;
          }
        });
        return 60;
      }
      return prevSegundo - 1;
    });
  }

  function stopTimer(params) {
    console.log(cronoInterval);
    setCronoInterval((prevInterval) => {
      clearInterval(prevInterval);
    });
    setCronoMinuto(0);
    setCronoSegundo(0);
  }

  function playTimer(params) {
    setCronoInterval(
      setInterval(() => {
        mudarTempo();
      }, 1000)
    );
  }

  function pausarTimer(params) {
    setCronoInterval((prevInterval) => {
      clearInterval(prevInterval);
    });
    setCronoMinuto((prevMin) => {
      setCronoMinuto(prevMin);
    });
    setCronoSegundo((prevSeg) => {
      setCronoSegundo(prevSeg);
    });
  }

  return (
    <div className="corpo">
      <div className="timer">
        <span className="crono" id="cronoId">
          {cronoMinuto}:{cronoSegundo}
        </span>
      </div>
      <div className="botoes">
        <button className="btn iniciar" onClick={iniciarTimer}>
          Iniciar
        </button>
        <button className="btn play" onClick={playTimer}>
          Play
        </button>
        <button className="btn pause" onClick={pausarTimer}>
          Pause
        </button>
        <button className="btn stop" onClick={stopTimer}>
          Stop
        </button>
      </div>
      <div className="marcadores">
        <div className="marcador minuto">
          <span>Minutos:</span>
          <input type="number" step="1" id="inputMinuto" />
        </div>
        <div className="marcador segundo">
          <span>Segundos:</span>
          <input type="number" step="1" id="inputSegundo" />
        </div>
      </div>
    </div>
  );
}

export default App;
