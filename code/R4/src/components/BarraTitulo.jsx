import React from "react";
import './BarraTitulo.css';

function BarraTitulo() {
  return (
    <div className="scroll">
    <table className="table">
      <tbody>
        <tr >
          <th>City</th>
          <th>Max.Temp.</th>
          <th>Min. Temp.</th>
          <th>Actual Temp.</th>
          <th>Wind</th>
          <th>Close City</th>
        </tr>
      </tbody>
    </table>
    </div>
  );
}

export default BarraTitulo;
