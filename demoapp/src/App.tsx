
import { useEffect } from 'react';
import './App.css';

function App() {

  useEffect(() => {
    console.log("Hello");
    getData();


  }, [])


  const getData = async () :Promise<void> => {
    const Data = await fetch('/api')
    console.log(await Data.json());
    
  }

  return (
    <div className="App">
      <h1>Hello from react!</h1>
    </div>
  );
}

export default App;
