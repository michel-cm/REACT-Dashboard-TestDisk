import React from "react";
import { Chart } from "react-google-charts";
import { useTheme } from "../../../hooks/useTheme";

import { useQtdPredominancias } from "../../../hooks/useQtdPredominancias";

export const PieChart = ({candidate}) => {
  const { isDarkTheme } = useTheme();

  const { predominancias } = useQtdPredominancias();

  const data = [
    ["Tipo", "Quantidade"],
    ["Dominante", candidate && candidate.totalCadaLetra[0].a],
    ["Influente", candidate && candidate.totalCadaLetra[0].b],
    ["Estávei", candidate && candidate.totalCadaLetra[0].c],
    ["Condescendente", candidate && candidate.totalCadaLetra[0].d],
  ];



  const options = {
    title: candidate && "Predominancias do " + candidate.name,
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
      style={{
        color: "F0F2F5",
      }}
    />
  );
};