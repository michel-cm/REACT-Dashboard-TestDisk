import React from "react";
import { Chart } from "react-google-charts";
import { useTheme } from "../../hooks/useTheme";


export const PieChart = (props) => {

  const { isDarkTheme } = useTheme();

 const data = [
    ["Task", "Hours per Day"],
    ["Dominantes", 11],
    ["Influentes", 2],
    ["Estáveis", 2],
    ["Condescendentes", 2], 
  ];
  
  const options = {
    title: "Predominancias",
    titleColor:  isDarkTheme === 'dark' ? '#F0F2F5' : '#1C1C1C',
    legend:{textStyle: { color: isDarkTheme === 'dark' ? '#F0F2F5' : '#1C1C1C'}},
    is3D: true,
    colors : ['#FC5A5A','#E2992B', '#3AB04D', '#2261BC'],
    backgroundColor: isDarkTheme === 'dark' ? '#1C1C1C' : '#F0F2F5',    
    vAxis: {textStyle: { color: 'F0F2F5'}}

  };

 

  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"80%"}
      height={"400px"}  
      style={{
       color: 'F0F2F5',
      }}       
    />
  );
}
