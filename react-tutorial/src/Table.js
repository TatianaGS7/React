import React, {Component} from 'react';

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Product</th>
        <th>Price</th>
        <th>Remove</th>
      </tr>
    </thead>
  )
}

const TableBody = (props) => {
  const rows = props.recordData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.product}</td>
        <td>{row.price}</td>
        <td>
          <button className="muted-button" onClick={() => props.removeRecord(index)}>X</button>
        </td>
      </tr>
    )
  });

  return <tbody>{rows}</tbody>
}

const Table = (props) => {
  return (
    <table>
      <TableHeader />
      <TableBody recordData={props.recordData} removeRecord={props.removeRecord} />
    </table>
  )
}

export default Table