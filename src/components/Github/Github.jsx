import { useEffect, useState } from "react";

function Github() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(" https://api.github.com/users/Pushpa-rajput9")
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
        setData(res);
      });
  }, []);

  return (
    <div className="text-center m-4 bg-yellow-400 text-black p-4 text-3xl font-extrabold">
      Github Followers : {data.followers}
      <div>
        <img
          className="flex rounded-full justify-center "
          src={data.avatar_url}
          alt=" "
        />
      </div>
      <p className="text-left text-lg ml-24 mb-9 mt-6">
        Pushpa Rajput
        <ul>
          <li>Following: {data.following}</li>
          <li>Repositories: {data.public_repos}</li>
        </ul>
      </p>
    </div>
  );
}

export default Github;
