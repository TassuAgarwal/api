import { useEffect, useState } from 'react'
import { fetchApi } from './api'
import ProductList from './components/ProductList';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // old (.then not preferred - callback hell)

  // useEffect(() => {
  //   fetchApi().then((api) => {
  //     setData(api);
  //   })
  //     .catch((error) => console.log("error in data", error)
  //     )
  //     .finally(() => setLoading(false));
  // }, []);


  // new (try/catch method)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiData = await fetchApi();
        setData(apiData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);


  // Prevent unnecessary loop - before return 
  if (loading) return <p>Data Loading...</p>;
  if (!data) return <p>No data found</p>;

  return (
    <>
      {data.map((e) => (
        <ProductList
          key={e.id}
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
        />
      ))}
    </>
  );
}

export default App;