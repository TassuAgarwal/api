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
          id={e.id}
          title={e.title}
          image={e.image}
          desc={e.description}
          category={e.category}
          price={e.price}
          rating={{
            rate: e.rating?.rate,
            count: e.rating?.count
          }}

        />) : <p> No data</p>}
    </>
  );
}

export default App
