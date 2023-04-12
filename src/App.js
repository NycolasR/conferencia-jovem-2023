import { useState, useEffect } from "react";
import { Box, Typography, Modal } from "@mui/material";

import Graph from "./Graph";

import teste from "./assets/images/teste.png";

import "./App.css";

const styleModals = {
  p: 4,
  top: "50%",
  left: "50%",
  boxShadow: 25,
  position: "absolute",
  border: "2px solid #105131",
  bgcolor: "background.paper",
  transform: "translate(-50%, -50%)",
};

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [numBubbles, setNumBubbles] = useState(0);
  const [bubbles, setBubbles] = useState([]);

  const [openModalVideoDivulgacao, setOpenModalVideoDivulgacao] =
    useState(false);
  const handleOpenModalVideoDivulgacao = () =>
    setOpenModalVideoDivulgacao(true);
  const handleCloseModalVideoDivulgacao = () =>
    setOpenModalVideoDivulgacao(false);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  };

  const playVideo = () => {
    handleOpenModalVideoDivulgacao();
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    setBubbles(
      [...Array(numBubbles)].map((_, index) => (
        <span key={index} style={{ "--i": getRandomInt(20) + 10 }}></span>
      ))
    );

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [numBubbles]);

  useEffect(() => {
    setNumBubbles(Math.ceil(0.0435 * windowWidth));
  }, [windowWidth]);

  return (
    <div className="container">
      {/* <div className="bubbles">{bubbles.map((bubble) => bubble)}</div> */}
      <Graph />
      <div id="foto">
        <img src={teste} alt="teste" />
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

          <Typography
            id="modal-modal-title"
            variant="p"
            component="p"
            style={{
              textAlign: "center",
              fontFamily: "sans-serif",
              marginBottom: "20px",
              maxWidth: "560px",
            }}
          >
            Aq vai ficar a mensagem depois do vídeo. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Cras ut est at lorem ornare varius.
            Fusce in imperdiet mauris, quis tristique nisi. Vivamus quis
            tristique eros, non molestie massa. Sed maximus diam ac leo sodales
            rutrum. Curabitur et aliquam nisi, vitae ultricies lacus. Donec in
            turpis semper, bibendum libero ac, efficitur felis. In luctus sapien
            dui, eu sollicitudin risus pretium eu. Etiam malesuada nunc orci, in
            pretium nibh facilisis non. pulvinar id quis tortor.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default App;
