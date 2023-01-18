import classes from "./spendings.module.css";
import Chart from "./chart/chart";

const Spendings = (props) => {
  return (
    <div className={classes.spendingsBody}>
      <h1 className={classes.spendingsBodyText}>Spending - Last 7 days</h1>
      <Chart data={props.data} />
      <div className={classes.spendingsTotal}>
        <p className={classes.spendingsTotalText}>Total this month</p>
        <h1 className={classes.spendingsTotalValue}>$478.33</h1>
        <h3 className={classes.spendingsTotalInterest}>+2.4%</h3>
        <p className={classes.spendingsTotalInterestText}>from last month</p>
      </div>
    </div>
  );
};

export default Spendings;
