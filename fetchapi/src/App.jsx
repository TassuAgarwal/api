import { useEffect, useState } from 'react'
import { fetchapi } from './api'
import Productlist from './components/Productlist';

function App() {

  const [data, setdata] = useState(null);

  useEffect(() => {
    // fetchapi().then((api) => console.log(api));
    fetchapi().then((api) => setdata(api));
  }, []);

  return (
    <>
      {data ? data.map((e) =>
        <Productlist
        
          title={e.title}
          image={e.image}
          desc={e.description}
          category={e.category}
          price={e.price}
          rating={{
            rate: e.rate,
            count: e.count
          }}

        />) : <p> No data</p>}
    </>
  );
}

export default App
