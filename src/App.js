import './App.css';
import { useQuery } from 'react-query';
import { QueryClientProvider,QueryClient } from 'react-query';
import axios from "axios"
import React from 'react';
// import { ReactQueryDevtools } from 'react-query/devtools';

const queryClient = new QueryClient();

function Example() {
  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: ["productList"],
    queryFn: ()=>axios.get("http://localhost:4000/content/list") });
    const productList = data.data
    console.log(productList)
  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      {productList.map((product)=>(
        <div  key={product.id}>
          <h2>{product.title}</h2>
          <p>{product.category}</p>
          <p>{product.owner.name}</p>
          <p>{product.body}</p>
          <p>{product.price}</p>
        </div>
      ))}
      {/* <ReactQueryDevtools initialIsOpen /> */}
    </div>
  );
}


function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Example />
    </QueryClientProvider>
  );
}

export default App;
