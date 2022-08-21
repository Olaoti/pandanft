import React, { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis } from "recharts";

function Producthistory() {
  const data = [
    { name: "15/7", uv: 0.7, pv: 2400, amt: 2400 },
    { name: "17/7", uv: 1.5, pv: 1200, amt: 1400 },
    { name: "19/7", uv: 2, pv: 1800, amt: 2800 },
    { name: "21/7", uv: 2.2, pv: 2400, amt: 2400 },
    { name: "23/7", uv: 1.8, pv: 1200, amt: 1400 },
    { name: "25/7", uv: 2.4, pv: 1800, amt: 2800 },
    { name: "27/7", uv: 2.7, pv: 2400, amt: 2400 },
    { name: "29/7", uv: 1.9, pv: 1200, amt: 1400 },
    { name: "31/7", uv: 2, pv: 1800, amt: 2800 },
  ];
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  return (
    <div className="producthistory">
      <div className="texts">All Time Avg.Price</div>
      <LineChart
        className="lineChart"
        width={windowSize.innerWidth - windowSize.innerWidth / 12}
        height={300}
        data={data}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      >
        <Line type="monotone" dataKey="uv" stroke="#1E50FF" dot={false} />
        <XAxis dataKey="name" />
        <YAxis />
      </LineChart>
    </div>
  );
}
function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}
export default Producthistory;
