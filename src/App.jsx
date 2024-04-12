
import './App.css'
import TableComponent from './components/TableComponent'
import tablesData from './tablesData';
import React, { useState } from 'react';

function App() {
  const [selectedTableIndex, setSelectedTableIndex] = useState(0);
  const [tablesData2, setTablesData2] = useState(tablesData);

  const handleTableSelect = (index) => {
    setSelectedTableIndex(index);
  };

  const handleSave = (updatedData) => {
    // Handle the updated data here (e.g., save to database)
    console.log("Updated Data:", updatedData);
    // Update tablesData with the updated data
    const updatedTablesData = [...tablesData];
    updatedTablesData[selectedTableIndex].data = updatedData;
    setTablesData2(updatedTablesData);
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
      <TableComponent data={tablesData[selectedTableIndex].data} onSave={handleSave} />
      </div>
    </div>
  )
}

export default App
