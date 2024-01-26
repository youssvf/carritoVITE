export default function Cesta({articulosCesta,setArticulosCesta,articulosDisponibles,setArticulosDisponibles}) {
    
    const total = articulosCesta.reduce((acc, articulo) => acc + articulo.precio, 0);
    const eliminarArticuloCesta = (articulo) => {
        setArticulosCesta((previusState)=>[...previusState, articulo]);
        setArticulosDisponibles(articulosDisponibles.map(art => art.codigo === articulo.codigo ? {...art, unidades: art.unidades - 1} : art));
    } 
    return (
        <div>
            <h2>Cesta</h2>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Precio</th>
                    </tr>
                </thead>
                <tbody>
                    {articulosCesta.map(articulo => (
                        <tr key={articulo.codigo}>
                            <td>{articulo.nombre}</td>
                            <td>{articulo.precio}</td>
                            <button id={articulo.codigo} onChange={eliminarArticuloCesta(e.target.key)}>Eliminar</button>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td>Total Cesta</td>
                        <td>{total}</td>
                    </tr>
                </tfoot>
            </table>
            
        </div>
    )
}