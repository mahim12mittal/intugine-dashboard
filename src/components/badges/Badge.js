import React, { useState, useEffect } from "react";
import "./badge.css";
function Badge() {
  const [hasError, setErrors] = useState(false);
  const [planets, setPlanets] = useState({ data: [] });

  async function fetchData() {
    const res = await fetch(
      `https://93870v1pgk.execute-api.ap-south-1.amazonaws.com/latest/shipments/mahim`,
      {
        method: "POST",
        body: JSON.stringify({
          email: "mahim12mittal@gmail.com",
        }),
        headers: {
          authorization: "Bearer tTU3gFVUdP",
          "Content-type": " application/json",
        },
      }
    );

    res
      .json()
      .then((res) => setPlanets(res))

      .catch((err) => setErrors(err));
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="badgediv">
      <button className="btn btn-primary text-left m-3 " type="button">
        DEL
        <h3>
          <span className="badge badge-primary m-3 ">
            {
              planets.data.filter((i) => {
                return i.current_status_code === "DEL";
              }).length
            }
          </span>
        </h3>
      </button>
      <button className="btn btn-primary text-left m-3" type="button">
        INT
        <h3>
          <span className="badge badge-primary m-3 ">
            {" "}
            {
              planets.data.filter((i) => {
                return i.current_status_code === "INT";
              }).length
            }
          </span>
        </h3>
      </button>
      <button className="btn btn-primary text-left m-3" type="button">
        OOD
        <h3>
          <span className="badge badge-primary m-3 ">
            {" "}
            {
              planets.data.filter((i) => {
                return i.current_status_code === "OOD";
              }).length
            }
          </span>
        </h3>
      </button>
      <button className="btn btn-primary text-left m-3" type="button">
        DEX
        <h3>
          <span className="badge badge-primary m-3 ">
            {" "}
            {
              planets.data.filter((i) => {
                return i.current_status_code === "DEX";
              }).length
            }
          </span>
        </h3>
      </button>
      <button className="btn btn-primary text-left m-3" type="button">
        NFI
        <h3>
          <span className="badge badge-primary m-3 ">
            {" "}
            {
              planets.data.filter((i) => {
                return i.current_status_code === "NFI";
              }).length
            }
          </span>
        </h3>
      </button>
    </div>
  );
}

export default Badge;
