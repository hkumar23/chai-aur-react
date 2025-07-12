import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

export default function Github() {
  //   let [data, setData] = useState({});
  const data = useLoaderData();
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/hkumar23")
  //       .then((res) => res.json())
  //       .then((res) => {
  //         console.log(res);
  //         setData(res);
  //       });
  //   }, []);
  return (
    <>
      <div className="flex flex-row gap-2">
        <img src={data.avatar_url} alt="Avatar Url" />
        <div>
          <h1 className="text-3xl gap-2">{data.login}</h1>
          <h1 className="text-4xl gap-2">{data.name}</h1>
        </div>
      </div>
    </>
  );
}

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/hkumar23");
  return response.json();
};
