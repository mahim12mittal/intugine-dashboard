import React, { useState, useEffect } from "react";
import "./tableview.css";
import { ReactComponent as ReactDestination } from "./destination.svg";
import { ReactComponent as ReactWareHouse } from "./warehouse.svg";
import _default from "react-bootstrap/esm/CardColumns";

const Tableview = () => {
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
  console.log(planets);
  function abc(y) {
    return (
      <ul className="progressul">
        <ReactDestination className="destination" />
        {planets.data[y]
          ? planets.data[y].scan.map((i, k) => (
              <li className="steps" key={k}>
                <strong>{i.location}</strong>
                <time className="dt" dateTime={i.time}>
                  {i.time}
                </time>
              </li>
            ))
          : "na"}
        <ReactWareHouse className="warehouse" />
      </ul>
    );
  }
  let [sassy, setSassy] = useState();
  function handleClick(x) {
    setSassy(abc(x));
    console.log({ x });
  }

  const renderData = (data, index) => {
    return (
      <tr onClick={handleClick.bind(this, index)} className=" trow" key={index}>
        <td>{data.awbno}</td>
        <td>{data.carrier}</td>
        <td>{data.from}</td>
        <td>{data.to}</td>
        <td>{data.carrier}</td>
        <td>{data.pickup_date}</td>
        <td>
          {data.extra_fields ? data.extra_fields.expected_delivery_date : "na"}
        </td>
        <td>{data.current_status}</td>
      </tr>
    );
  };
  function xyz(x) {
    return planets.data
      .filter((i) => i.current_status_code === x)
      .map(renderData);
  }
  let [sass, setSass] = useState(xyz());

  function handleButton(x) {
    setSass(xyz(x));
  }

  return (
    <div>
      <div className="badgediv">
        <button
          onClick={handleButton.bind(this, "DEL")}
          className="btn btn-primary text-left m-3 "
          type="button"
        >
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
        <button
          onClick={handleButton.bind(this, "INT")}
          className="btn btn-primary text-left m-3"
          type="button"
        >
          INT
          <h3>
            <span className="badge badge-primary m-3 ">
              {
                planets.data.filter((i) => {
                  return i.current_status_code === "INT";
                }).length
              }
            </span>
          </h3>
        </button>
        <button
          onClick={handleButton.bind(this, "OOD")}
          className="btn btn-primary text-left m-3"
          type="button"
        >
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
        <button
          onClick={handleButton.bind(this, "DEX")}
          className="btn btn-primary text-left m-3"
          type="button"
        >
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
        <button
          onClick={handleButton.bind(this, "NFI")}
          className="btn btn-primary text-left m-3"
          type="button"
        >
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
      <div className="tablediv">
        <table className="table table-hover main">
          <thead className="tablehead">
            <tr className="tabletr">
              <th scope="col">AWB NUMBER</th>
              <th scope="col">TRANSPORTER</th>
              <th scope="col">SOURCE</th>
              <th scope="col">DESTINATION</th>
              <th scope="col">BRAND</th>
              <th scope="col">START DATE</th>
              <th scope="col">ETD</th>
              <th scope="col">STATUS</th>
            </tr>
          </thead>
          <tbody className="tablebody">
            {sass.length == 0 ? xyz("DEL") : sass}
          </tbody>
        </table>
      </div>
      <div className="progressdiv">{sassy}</div>
    </div>
  );
};
export default Tableview;
