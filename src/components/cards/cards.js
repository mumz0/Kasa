import React from "react";
import { useEffect, useState } from "react";
import Card from "./card";

function Locations() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("./data.json").then((res) => res.json())
    .then((data) => setData(data));
}, []);
  return (
    <div className="cards_container">
      <div className="cont">
        {data.map((location, id) => (
          <Card key={id} obj={location} />
        ))}
      </div>
    </div>
  );
}
export default Locations;
