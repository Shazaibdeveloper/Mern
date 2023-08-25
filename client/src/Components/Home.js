import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState("");
  const getData = async () => {
    try {
      const res = await fetch("/getdata", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      if (!res.ok) {
        throw new Error(`Request failed with status: ${res.status}`);
      }

      const response = await res.json();
      setData(response);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {data ? (
        <div className="Home-Main-container">
          <div className="Main-container">
            <h1>Welcome</h1>
            <p>{data.name}</p>
            <Link className="button" to="/signin">
              Get Started
            </Link>
          </div>
        </div>
      ) : (
        <div className="Home-Main-container">
          <div className="Main-container">
            <h1>Welcome</h1>
            <p>Sign in to get data</p>
            <Link className="button" to="/signin">
              Get Started
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
