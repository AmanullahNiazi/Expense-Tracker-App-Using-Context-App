import React, { useContext } from "react";
import './expenseui.css'
import {useForm} from 'react-hook-form';
import App, { GlobalTransactions } from "../../App";
export default function Expenseui() {
    let data = useForm()
    // / data transfer to app ///////////////////
    const {fecthTransactions} = useContext(GlobalTransactions)
    const addtransaction = (transactions) =>{
        fecthTransactions(transactions)
    }
    // / data transfer to app ///////////////////

  return <>
    
  <div>
        <div className="parent-main">
          <div className="wrapper">
            <div className="expense-tracker">
              <div className="heading">
                <h2>Expense Tracker by Amanullah</h2>
              </div>

              <div className="balance">
                <h2>Current Balance</h2>
                <div className="balance-digits">
                  <span>Rs</span>
                  {/* {total} */}
                </div>
              </div>

              <div className="panel">
                <div className="left-panel stn">
                  <div className="pnl-heading">
                    <h4>income</h4>{" "}
                  </div>
                  <div className="money-plus">
                    {/* {income} */}
                    </div>
                </div>

                <div className="right-panel stn">
                  <div className="pnl-heading">
                    <h4>expense</h4>
                  </div>
                  <div className="money-minus">
                    {/* {Math.abs(expense)} */}
                    </div>
                </div>
              </div>

              <div className="parent-transaction">
                <div className="transaction-history-section">
                  <div className="heading-trans">
                    <h3>Transaction History</h3>
                  </div>
                  <div className="display-transactions">
                    <ul className="list">
                      {/* {transaction.map((trans, meraIndex) => {
                        return (
                          <li className={trans.type}>
                            {" "}
                            <span>{trans.discritption}</span> {trans.amount}
                            <button
                              onClick={() => transdelete(meraIndex, trans)}
                              className="delete-btn"
                            >
                              X
                            </button>
                          </li>
                        );
                      })} */}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="parent-add-transaction">
                <div className="add-transaction">
                  <div className="heading-trans">
                    <h3>Add New Transaction</h3>
                  </div>
                  <div className="form">
                    <form onSubmit={data.handleSubmit(addtransaction)}>
                      <div className="form-control">
                        <label htmlFor="discription">Discription</label>
                        <input
                          {...data.register("discritption")}
                          placeholder="Detail Of Transaction"
                          type="text"
                          required
                          className="input-box"
                          id="discription"
                        />
                      </div>
                      <div className="form-control">
                        <label htmlFor="transaction-amount">
                          Transaction Amount
                        </label>
                        <input
                          {...data.register("amount")}
                          placeholder="Amount"
                          required
                          type="number"
                          className="input-box"
                          id="transaction-amount"
                        />
                      </div>
                      <button className="btn">Add Transaction</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

  </>
}
