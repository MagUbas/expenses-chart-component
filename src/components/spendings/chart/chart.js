import { useEffect, useState } from "react";
import classes from "./chart.module.css";

const Chart = (props) => {
  const [day, setDay] = useState("");

  useEffect(() => {
    const weekday = ["sun", "mond", "tues", "wed", "thu", "fri", "sat"];
    const d = new Date();
    setDay(weekday[d.getDay()]);
  }, []);

  return (
    <div className={classes.chartBody}>
      {props.data.map((elem) => {
        return (
          <div className={classes.chartDay} key={elem["day"]}>
            <div className={classes.chartDayValue}>$ {elem["amount"]}</div>
            <div
              className={`${classes.chartDayBar} ${
                day === elem["day"] ? classes.chartDayBarActive : null
              }`}
              style={{ height: `${elem["amount"] * 2}px` }}
            ></div>
            <p>{elem["day"]}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Chart;
