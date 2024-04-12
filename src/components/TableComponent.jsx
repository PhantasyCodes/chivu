import React, { useState, useEffect} from "react";

const TableComponent = ({ data, onSave }) => {
  // Define initial data for the table
  const [editableData, setEditableData] = useState(data.map(item => item.split(':')));

  const handleCellChange = (index, columnIndex, value) => {
    const newData = [...editableData];
    newData[index][columnIndex] = value;
    setEditableData(newData);
  };

  const handleSaveClick = () => {
    // Convert editable data back to original format (string with colon separator)
    const updatedData = editableData.map(item => item.join(':'));
    onSave(updatedData);
  };

  useEffect(() => {
    setEditableData(data.map(item => item.split(':')))
  }, [data])
  
  return (
    <div>
    <table>
      <thead>
        <tr>
          <th>Range</th>
          <th>Score Points</th>
        </tr>
      </thead>
      <tbody>
      {editableData.map((item, index) => (
          <tr key={index}>
            <td>
              <input
                type="text"
                value={item[0]}
                onChange={(e) => handleCellChange(index, 0, e.target.value)}
              />
            </td>
            <td>
              <input
                type="text"
                value={item[1]}
                onChange={(e) => handleCellChange(index, 1, e.target.value)}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    <button onClick={handleSaveClick}>Save</button>
    </div>
  );
};

export default TableComponent;
