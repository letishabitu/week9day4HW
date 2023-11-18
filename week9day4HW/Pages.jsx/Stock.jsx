import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function Stock() {
      
  const apiKey = "8ROICx5FPqmegtvl1cQEICcD2e4AxH81";
 
  const params = useParams();
  console.log(params);
  const symbol = params.symbol;
  const baseurl = "https://financialmodelingprep.com/api/v3/profile/"

  const url = baseurl + symbol + "?apikey=" + apiKey
  console.log({url});

  // state to hold the stock data
  const [stockFetch, setStockFetch] = useState("null");

  // function to fetch stock data
  const getStock = async () => {
      try {
          console.log(url)
          const response = await fetch(url);
          const data = await response.json();
          setStockFetch(data);
      } catch (e) {
          console.error(e);
      }
  }


  console.log(stockFetch);

  useEffect(() => {
      getStock();
  }, []);

  
  
 

// console.log(stockValue);
const loaded = () => {
  return (
    <>
             
        {stockFetch.map (stock => {
            return (<><h4>{stock.companyName}</h4>
            <h4>{stock.price}</h4>
            <h4>{stock.changes}</h4></>)
        })  }
    </>
)
}

// function for when data doesn't exist yet
const loading = () => {
  return <h1>Loading...</h1>
}



return (
  <div>
    {

   stockFetch ? loaded() : loading()
  
   }  
</div>
)

}


export default Stock