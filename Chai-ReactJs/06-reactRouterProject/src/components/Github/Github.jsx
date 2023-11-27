import React, { useState, useEffect, } from "react";
import { useLoaderData } from "react-router-dom";
const Github = () => {
//    const data= useLoaderData()
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`https://api.github.com/users/umarfaisal295c`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        // console.log(data);
      });
  });
  return (
    <>
      <h1 className="text-6xl bg-blue-600 text-center text-yellow-50">
        Github Followers : {data.followers}
      </h1>
      <img src={data.avatar_url} alt="Github Profile" width={350} />
    </>
  );
};

export default Github;
// export const githubInfo = async () => {
//     const response = await fetch('https://api.github.com/users/umarfaisal295c')
//     return response.json()
// }
