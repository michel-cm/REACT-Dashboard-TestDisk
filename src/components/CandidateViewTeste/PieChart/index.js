import React from "react";
import { Chart } from "react-google-charts";
import { useTheme } from "../../../hooks/useTheme";

import { useQtdPredominancias } from "../../../hooks/useQtdPredominancias";

export const PieChart = ({ candidate }) => {
  const { isDarkTheme } = useTheme();

  const { predominancias } = useQtdPredominancias();

  const data = [
    [
      "Predominancia",
      "Valor",
      { role: "style" },
      {
        sourceColumn: 0,
        role: "annotation",
        type: "string",
        calc: "stringify",
      },
    ],
    ["Dominante", candidate && candidate.totalCadaLetra[0].a, "#FC5A5A", null],
    ["Influente", candidate && candidate.totalCadaLetra[0].b, "#E2992B", null],
    ["Estável", candidate && candidate.totalCadaLetra[0].c, "#3AB04D", null],
    [
      "Condescendente",
      candidate && candidate.totalCadaLetra[0].d,
      "#2261BC",
      null,
    ],
  ];

  const options = {
    legend: {
      position: "none",
    },
  };

  return (
    <Chart
      chartType="BarChart"
      data={data}
      options={options}
      width="100%"
      height="350px"
    />
  );
};
