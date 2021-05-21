import React from "react";
import "./Card.css";

export default function Card({ name, temp, termica, winddir, wind, id, onClose }) {
  return (
    <div >
    <table className="table">
      <tbody>
        <tr className="cuadro">
            <td>{name}</td>
            <td>{temp}°C</td>
            <td>{termica}°C</td>
            <td>{wind}°C</td>
            <td>{winddir} km/h</td>
            <td>
              <button onClick={onClose} className="btn btn-sm btn-danger">
                X
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
