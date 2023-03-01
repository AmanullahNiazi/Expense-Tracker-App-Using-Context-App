import React from "react";
import "../components/expenseui.css";
import { GlobalContext } from '../context/Context.js'

export default function Transaction() {
  let  {delTransaction,transactions} = GlobalContext()
  return (
    <>
      <div className="parent-main">
        <div className="wrapper">
          <div className="expense-tracker">
          <div className="parent-transaction">
                <div className="transaction-history-section">
                  <div className="heading-trans">
                    <h3>Transaction History</h3>
                  </div>
                  <div className="display-transactions">
                    <ul className="list">
                      {transactions.map((trans) => {
                        return (
                          <li className={trans.type}>
                            {" "}
                            <span>{trans.discritption}</span> {trans.amount}
                            <button
                              onClick={() => delTransaction(trans.id)}
                              className="delete-btn"
                            >
                              X
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>

          </div>
        </div>
      </div>
    </>
  );
}
