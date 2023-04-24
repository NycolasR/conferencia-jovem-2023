import React from "react";
import gif from "../../assets/images/infos.gif";

import { Link, Typography } from "@mui/material";
import "./styles.css";

const GifInfos = () => {
  return (
    <div>
      <div className="foto">
        <img src={gif} alt="imagem" />
      </div>
      <div id="msg-convite">
        <Typography id="modal-mensagem" variant="p" component="p">
          Você está oficialmente convidado para a Conferência FOLLOWERS:
          Conectados com Cristo em um Mundo Digital! Para ficar por dentro do
          nosso evento, siga o Instagram da nossa Igreja clicando{" "}
          <Link
            rel="noopener noreferer"
            href="https://www.instagram.com/primeiraipbpatos/"
            color="rgb(245, 245, 245)"
            target="_blank"
            style={{ textDecoration: "none !important" }}
          >
            {"aqui!"}
          </Link>
        </Typography>
      </div>
    </div>
  );
};

export default GifInfos;
