import { GifItem } from './GifItem';

import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category, onDelete }) => {

    const { images, isLoading } = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            {/* {
                // isLoading ? (<h2>Cargando...</h2>) : null
                isLoading && (<h2>Cargando...</h2>) // Más simple
            } */}


            <div className='card-grid'>
                {
                    images.map((img) => (
                        <GifItem
                            key={img.id}
                            // title={img.title}
                            // url={img.url}
                            {...img} //Me permite hacer lo mismo de arriba pero más corto, manda todos los atributos del objeto como props al componente
                        />
                    ))
                }
            </div>
            
            {
                isLoading
                    ? (<h2>Cargando...</h2>)
                    : <button className="button" onClick={() => onDelete(category)}>Eliminar</button>
            }
            {/* <button className="button" onClick={() => onDelete(category)}>Eliminar</button> */}
        </>
    )
}
