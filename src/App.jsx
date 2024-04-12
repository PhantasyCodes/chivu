
import './App.css'
import TableComponent from './components/TableComponent'
import tablesData from './tablesData';
import React, { useState } from 'react';

function App() {
  const [selectedTableIndex, setSelectedTableIndex] = useState(0);

  const handleTableSelect = (index) => {
    setSelectedTableIndex(index);
  };

  return (
    <div className="container">
          <div className="table-container">
          <div className="button-group">
        {[...Array(11).keys()].map((index) => (
          <button key={index} onClick={() => handleTableSelect(index)}>{index + 1}</button>
        ))}
      </div>
      <h2>{tablesData[selectedTableIndex].title}</h2>
      <TableComponent data={tablesData[selectedTableIndex].data} />
      </div>
    </div>
  )
}

export default App
