import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  useEffect(() => {
  fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
      .then((res) => res.json())
      .then((res) => setData(res[currency]))
      console.log(data);
  }, [currency])
  console.log(data);
  return data
//  ------------------ Working in this package -------------------------------- 

//   const getData = async () => {
//     const responce = await fetch(
//       `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
//     );
//     setData(await responce.json());
//   console.log(responce);
//   };
//   useEffect(() => {
//     getData();
//   }, [currency]);
//   return data;
}
export default useCurrencyInfo;
