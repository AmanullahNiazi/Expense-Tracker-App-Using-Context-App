import React,{useState  } from "react";
import "../components/expenseui.css";

import { GlobalContext } from '../context/Context.js'

export default function Balance() {

  let  {transactions} = GlobalContext()
  // let  {setBalance} = GlobalContext()



  // let [netbalance,setnetBalance] = useState(0)
  
  let transAmount = transactions.map(trans=>+trans.amount)
  //balance
  const balance = transAmount.reduce((acc, item) => (acc += item), 0);
  // setBalance(balance)

  //income
  const income = transAmount.filter(transaction => transaction > 0)
  .reduce((acc, transaction) => (acc += transaction), 0);
  //expense
  const expense = Math.abs(transAmount.filter(transaction => transaction < 0).reduce((acc, transaction) => (acc += transaction), 0)
    );

  return (
    <>
      <div className="parent-main">
        <div className="wrapper">
          <div className="expense-tracker">
            <div className="balance">
              <h2>Current Balance</h2>
              <div className="balance-digits">
                <span>Rs. &nbsp;</span>
                {balance}
              </div>
            </div>

            <div className="panel">
              <div className="left-panel stn">
                <div className="pnl-heading">
                  <h4>income</h4>{" "}
                </div>
                <div className="money-plus">{income}</div>
              </div>

              <div className="right-panel stn">
                <div className="pnl-heading">
                  <h4>expense</h4>
                </div>
                <div className="money-minus">{expense}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
