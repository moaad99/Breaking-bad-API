
import './App.css';
import React from 'react'
import Header from './components/Header'
import axios from 'axios';
import Caracteres from './components/Caracteres'
import Search from './components/Search'
function App() {
  const [items,setItems] = React.useState([])
  

  React.useEffect(() => {
    const fetchItems = async () => {
      const result = await axios('https://breakingbadapi.com/api/characters')
      console.log(result.data)
    
      setItems(result.data)
    }
     fetchItems()
  }, [])
  return (
    <div className="App">
     <Header />
     <Search />
     <Caracteres items={items} />
    </div>
  );
}

export default App;
