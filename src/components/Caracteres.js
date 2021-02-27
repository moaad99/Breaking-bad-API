import React from 'react'
import Caraitems from './Caraitems'
function Caracteres(props) {
    return (
        <section className='cards'>
            {props.items.map((item) => (
                <Caraitems  item={item} key={item.char_id}/> 
            ))}

        </section>
      
    )
}

export default Caracteres
