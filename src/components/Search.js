import React , {useState} from 'react'

function Search() {
    const [text, setText] = useState('');
    return (
        <div>
            <form action="">

                <input type="text"
                className='form-control'
                placeholder='Search characters'
                onChange={(e)=> setText(e.target.value)}
                />
            </form>
        </div>
    )
}

export default Search
