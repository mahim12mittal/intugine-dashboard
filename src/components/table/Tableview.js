import React, { useState, useEffect } from "react";
import "./tableview.css";
import { ReactComponent as ReactDestination } from "./destination.svg";
import { ReactComponent as ReactWareHouse } from "./warehouse.svg";

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
  let [sassy, setSassy] = useState(abc(0));
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

  return (
    <div>
      <div className="tablediv">
        <table className="table table-hover main">
          <thead className="tablehead">
            <tr>
              <th>AWB NUMBER</th>
              <th>TRANSPORTER</th>
              <th>SOURCE</th>
              <th>DESTINATION</th>
              <th>BRAND</th>
              <th>START DATE</th>
              <th>ETD</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody className="tablebody">{planets.data.map(renderData)}</tbody>
        </table>
      </div>
      <div className="progressdiv">{sassy}</div>
    </div>
  );
};
export default Tableview;
