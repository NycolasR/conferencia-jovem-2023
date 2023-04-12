import React, { useEffect, useRef } from "react";
import { DataSet } from "vis-data";
import { Network } from "vis-network";

const Graph = () => {
  const containerRef = useRef(null);

  // const edges = [];
  // for (let i = 1; i <= 80; i++) {
  //   for (let j = i + 1; j <= 80; j++) {
  //     edges.push({ from: i, to: j });
  //   }
  // }

  const data = {
    nodes: new DataSet(
      Array.from({ length: 60 }, (_, i) => ({
        id: i + 1,
        color: { background: "#EA7ED7", border: "#EA1E9A" },
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
    width: "2560px",
    height: "1080px",
    layout: {
      randomSeed: 1, // semente aleatória para garantir a mesma posição dos nós em cada execução
      improvedLayout: true,
      random: {
        enabled: true,
        barnesHut: {
          gravitationalConstant: -30000,
          centralGravity: 0.3,
          springLength: 300,
          springConstant: 0.05,
          damping: 0.09,
          avoidOverlap: 0,
        },
        processProperties: true,
      },
    },
    physics: {
      barnesHut: {
        gravitationalConstant: -80000,
        centralGravity: 15,
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

  useEffect(() => {
    network = new Network(containerRef.current, data, options);
  }, []);

  return <div ref={containerRef}></div>;
};

export default Graph;
