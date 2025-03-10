import { useEffect, useState } from 'react'
import { fetchapi } from './api'
import './App.css'

function App() {

  const [data, setdata] = useState(null);

  useEffect(() => {
    // fetchapi().then((api) => console.log(api));
    fetchapi().then((api) => setdata(api));
  }, []);

  return (
    <div className="App">
     {data ? data.map((e) => <li>{e.title}</li>) : <p> No data</p>}
    </div>
  );
}

export default App
