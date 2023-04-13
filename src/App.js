import { useState } from "react";
import { Box, Modal } from "@mui/material";

import Graph from "./components/Graph";
import { styleModals } from "./utils/constantes";

import arteConferencia from "./assets/images/arte-conf.png";

import "./App.css";

function App() {
  const [openModalVideoDivulgacao, setOpenModalVideoDivulgacao] =
    useState(false);
  const handleOpenModalVideoDivulgacao = () =>
    setOpenModalVideoDivulgacao(true);
  const handleCloseModalVideoDivulgacao = () =>
    setOpenModalVideoDivulgacao(false);

  const playVideo = () => {
    handleOpenModalVideoDivulgacao();
  };

  return (
    <div className="container">
      <Graph />
      <div id="foto">
        <img src={arteConferencia} alt="arteConferencia" />
      </div>
      <div id="botoes">
        <button onClick={playVideo} className="btn-info">
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
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/P-rFhRi7jwc"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default App;
