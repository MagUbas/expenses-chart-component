import classes from "./balance.module.css";

const Balance = () => {
  return (
    <div className={classes.balanceBody}>
      <p>My balance</p>
      <h2>$921.48</h2>
      <span className={classes.balanceLogo}></span>
    </div>
  );
};
export default Balance;
