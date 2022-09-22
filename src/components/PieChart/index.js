import React from "react";
import { Chart } from "react-google-charts";
import { useTheme } from "../../hooks/useTheme";

import { useQtdPredominancias } from "../../hooks/useQtdPredominancias";

export const PieChart = (props) => {
  const { isDarkTheme } = useTheme();

  const { predominancias } = useQtdPredominancias();

  const data = [
    ["Tipo", "Quantidade"],
    ["Dominantes", predominancias && predominancias.dominantes],
    ["Influentes", predominancias && predominancias.influentes],
    ["Estáveis", predominancias && predominancias.estaveis],
    ["Condescendentes", predominancias && predominancias.condescendentes],
  ];

  const options = {
    title: "Quadro Geral de Predominancias",
    titleColor: isDarkTheme === "dark" ? "#F0F2F5" : "#1C1C1C",
    legend: {
      textStyle: { color: isDarkTheme === "dark" ? "#F0F2F5" : "#1C1C1C" },
      position: "bottom",
    },
    is3D: true,
    colors: ["#FC5A5A", "#E2992B", "#3AB04D", "#2261BC"],
    backgroundColor: isDarkTheme === "dark" ? "#1C1C1C" : "#F0F2F5",
    vAxis: { textStyle: { color: "F0F2F5" } },
  };

  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
     
    />
  );
};
