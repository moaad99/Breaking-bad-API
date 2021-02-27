import React , {useState} from 'react'

function Search({getQuery}) {
    const [text, setText] = useState('');
    const hand= (e)=>{
        setText(e.target.value)
        getQuery(e.target.value)
    }
       
    
    return (
        <div>
            <form action="">

                <input type="text"
                className='form-control'
                placeholder='Search characters'
                onChange={hand}
                />
            </form>
        </div>
    )
}

export default Search
