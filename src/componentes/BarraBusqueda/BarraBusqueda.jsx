
export default function BarraBusqueda({filter,setFilter}) {


 
return(
    <>
        <input type="text"  value={filter} placeholder="Buscar artículo" onChange={(e)=>setFilter(e.target.value)}/>
    </>
)
}
