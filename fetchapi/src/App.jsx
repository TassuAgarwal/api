import { useEffect, useState } from 'react'
import { fetchapi } from './api'
import Productlist from './components/Productlist';

function App() {

  const [data, setdata] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchapi().then((api) => {
      setdata(api);
    })
      .catch((error) => console.log("error in data", error)
      )
      .finally(() => setLoading(false));
  }, []);

  return (
    <>

      {loading ? (<p>Data loading</p>) : data ? data.map((e) =>
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
