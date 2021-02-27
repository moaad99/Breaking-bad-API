
import './App.css';
import React from 'react'
import Header from './components/Header'
import axios from 'axios';
import Caracteres from './components/Caracteres'
import Search from './components/Search'
function App() {
  const [items,setItems] = React.useState([])
  const [data,setData] = React.useState('')
  
  React.useEffect(() => {
   
      axios.get(`https://breakingbadapi.com/api/characters?name=${data}`)   
      .then(response=>{
        setItems(response.data)
      })
  
    }
  
  , [data])

  return (
    <div className="App">
     <Header />
     <Search getQuery={(q)=> setData(q)} />
     <div className="container mt-3">
     <Caracteres items={items} />
    </div>
    </div>
  );
}

export default App;
