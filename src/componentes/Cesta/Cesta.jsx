export default function Cesta({articulosCesta}) {
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
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}