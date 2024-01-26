import BarraBusqueda from "../BarraBusqueda/BarraBusqueda";
import { useState } from "react";

export default function ArticulosDisponibles({ articulosDisponibles, setArticulosCesta, setArticulosDisponibles }) {   

   const agregarArticulo = (articulo) => {
        setArticulosCesta((previusState)=>[...previusState, articulo]);
        setArticulosDisponibles(articulosDisponibles.map(art => art.codigo === articulo.codigo ? {...art, unidades: art.unidades - 1} : art));
    }   
    const [filter,setFilter]=useState('')
    return (
        <div>
            <h2>Artículos Disponibles</h2>
            <BarraBusqueda filter={filter} setFilter={setFilter}/>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Unidades</th>
                        <th>Acción</th>
                    </tr>
                </thead>
                <tbody>
                    {articulosDisponibles.filter(articulo=>articulo.nombre.toLowerCase().includes(filter.toLowerCase())).map(articulo => (
                        <tr key={articulo.codigo}>
                            <td>{articulo.nombre}</td>
                            <td>{articulo.precio}</td>
                            <td>{articulo.unidades}</td>
                            <td><button onClick={() => agregarArticulo(articulo)}>Comprar</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

