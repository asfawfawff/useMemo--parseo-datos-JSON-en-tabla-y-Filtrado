/*import { useEffect, useState } from "react";
import provinciasData from "../argentina_states.json";

function Provincias() {
  const [provincias, setProvincias] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [provinciasFiltradas, setProvinciasFiltradas] = useState([]);
  const [mostrarTabla, setMostrarTabla] = useState(true);

  useEffect(() => {
    setProvincias(provinciasData);
    setProvinciasFiltradas(provinciasData);
  }, []);

  const buscarProvincia = () => {
    const resultado = provincias.filter((provincia) =>
      provincia.name === busqueda
    );

    setProvinciasFiltradas(resultado);
  };

  const cambiarTabla = () => {
    setMostrarTabla(!mostrarTabla);
  };

  return (
    <div>
      <h1>Provincias de Argentina</h1>

      <input
        type="text"
        placeholder="Buscar provincia"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />

      <button onClick={buscarProvincia}>
        Buscar
      </button>

      <br />
      <br />

        {mostrarTabla && (
          <table border="1">
            <thead>
              <tr>
                <th>Código</th>
                <th>Provincia</th>
              </tr>
            </thead>

            <tbody>
              {provinciasFiltradas.map((provincia) => (
                <tr key={provincia.code}>
                  <td>{provincia.code}</td>
                  <td>{provincia.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
  );
}

export default Provincias; */