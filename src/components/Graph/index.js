import React, { useEffect, useRef, useState } from "react";
import { DataSet } from "vis-data";
import { Network } from "vis-network";

const Graph = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const containerRef = useRef(null);

  const data = {
    nodes: new DataSet(
      Array.from({ length: 60 }, (_, i) => ({
        id: i + 1,
        color: { background: "#fff", border: "#10ff31" },
      }))
    ),
    edges: new DataSet(
      Array.from({ length: 140 }, (_, i) => ({
        from: Math.floor(Math.random() * 60) + 1,
        to: Math.floor(Math.random() * 60) + 1,
      }))
    ),
  };

  const options = {
    width: Number(windowWidth),
    height: Number(windowHeight),
    layout: {
      randomSeed: 1, // semente aleatória para garantir a mesma posição dos nós em cada execução
      improvedLayout: true,
    },
    physics: {
      barnesHut: {
        gravitationalConstant: -80000,
        centralGravity: 10,
        springLength: 250,
        springConstant: 0.04,
        damping: 0.09,
        avoidOverlap: 0,
      },
      stabilization: {
        enabled: false,
        iterations: 1000,
        fit: true,
      },
    },
  };
  let network = null;

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
  };

  useEffect(() => {
    network = new Network(containerRef.current, data, options);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <div ref={containerRef}></div>;
};

export default Graph;
