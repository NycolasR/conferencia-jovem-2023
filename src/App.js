import { createRef, useState } from "react";
import { Box, Modal } from "@mui/material";
import Carousel from "react-elastic-carousel";

import Graph from "./components/Graph";
import { styleModals } from "./utils/constantes";

import arteConferencia from "./assets/images/arte-conf.png";
import musica from "./assets/music/reluz.mp3";

import teste from "./assets/images/teste.jpeg";

import "./App.css";
import CarrosselImagens from "./components/CarrosselImagens";

function App() {
  const [openModalVideoDivulgacao, setOpenModalVideoDivulgacao] =
    useState(false);
  const handleOpenModalVideoDivulgacao = () =>
    setOpenModalVideoDivulgacao(true);
  const handleCloseModalVideoDivulgacao = () =>
    setOpenModalVideoDivulgacao(false);

  const audioRef = createRef();

  const playMusica = () => {
    // audioRef.current.play();
  };

  const showInformacoes = () => {
    playMusica();
    handleOpenModalVideoDivulgacao();
  };

  return (
    <div className="container">
      <Graph />
      <audio ref={audioRef} src={musica} controls loop />
      <div id="foto">
        <img src={arteConferencia} alt="arteConferencia" />
      </div>
      <div id="botoes">
        <button onClick={showInformacoes} className="btn-info">
          Mais informações aqui!
        </button>
      </div>
      <Modal
        open={openModalVideoDivulgacao}
        onClose={handleCloseModalVideoDivulgacao}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styleModals}>
          <div id="video-divulgacao">
            <CarrosselImagens />
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default App;
