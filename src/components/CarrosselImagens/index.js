import React, { useEffect, useState } from "react";
import Carousel from "react-elastic-carousel";

import teste from "../../assets/images/teste.jpeg";
import teste2 from "../../assets/images/teste2.jpeg";

import "./styles.css";

const CarrosselImagens = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Carousel itemsToShow={1}>
      <div className="foto">
        <img src={windowWidth < 700 ? teste2 : teste} alt="imagem" />
      </div>
      <div className="foto">
        <img src={teste} alt="imagem" />
      </div>
      <div className="foto">
        <img src={teste} alt="imagem" />
      </div>
      <div className="foto">
        <img src={teste} alt="imagem" />
      </div>
      <div className="foto">
        <img src={teste} alt="imagem" />
      </div>
    </Carousel>
  );
};

export default CarrosselImagens;
