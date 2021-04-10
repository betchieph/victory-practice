import React from 'react';
import './App.css';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryTooltip } from 'victory';
const earningsData = [
  {quarter: 1, earnings: 13000, label: "$13,000"},
  {quarter: 2, earnings: 16500, label: "$16,500"},
  {quarter: 3, earnings: 14250, label: "$14,250"},
  {quarter: 4, earnings: 19000, label: "$19,000"}
];

function App() {
  return (
    <div className="App">
      <h1>Data Dashboard</h1>
      <div className="card">
        <h3>Company Earnings By Quarter</h3>
      
      <VictoryChart
      domainPadding={30}
      theme={VictoryTheme.material}>
      <VictoryAxis
      tickvalues={[1,2,3,4]}
      tickFormat={["Quarter1", "Quarter2", "Quarter3", "Quarter4"]}/>
      <VictoryAxis
      dependentAxis
      tickFormat={(x) => (`$${x /1000} k`)}/>
      <VictoryBar 
      label={<VictoryTooltip/>}
      data={earningsData} 
      x="quarter" y="earnings"/>
      </VictoryChart>
    </div>
    </div>
  );
}

export default App;
