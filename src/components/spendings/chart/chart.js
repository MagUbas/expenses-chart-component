import { useEffect, useState } from "react";
import classes from "./chart.module.css";

const Chart = (props) => {
  const [day, setDay] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const weekday = ["sun", "mond", "tues", "wed", "thu", "fri", "sat"];
    const d = new Date();
    setDay(weekday[d.getDay()]);

    const sizing = props.data.every((elem) => elem["amount"] < 140);
    if (sizing) {
      const newData = props.data.map((elem) => {
        let newEl = { ...elem };
        newEl["size"] = elem["amount"];
        return newEl;
      });
      setData(newData);
    } else {
      const divisor =
        Math.max(...props.data.map((elem) => elem["amount"])) / 100;
      const newData = props.data.map((elem) => {
        let newEl = { ...elem };
        newEl["size"] = elem["amount"] / divisor;
        return newEl;
      });
      setData(newData);
    }
  }, [props.data]);

  return (
    <div className={classes.chartBody}>
      {data.map((elem) => {
        return (
          <div className={classes.chartDay} key={elem["day"]}>
            <div className={classes.chartDayValue}>$ {elem["amount"]}</div>
            <div
              className={`${classes.chartDayBar} ${
                day === elem["day"] ? classes.chartDayBarActive : null
              }`}
              style={{ height: `${elem["size"] * 2}px` }}
            ></div>
            <p>{elem["day"]}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Chart;
