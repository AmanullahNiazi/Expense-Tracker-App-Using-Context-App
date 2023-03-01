import React from "react";
import "../components/expenseui.css";
import {useForm} from 'react-hook-form';
import { GlobalContext } from '../context/Context.js'


export default function Addtransaction() {
    let data = useForm()
    let  {addTransaction} = GlobalContext()
    // let  {netBalnce} = GlobalContext()


    const dataSubmit = (transData) =>{
      
      if(!transData.amount.includes('-')){
        transData.id = new Date().getTime()
        transData.type = 'plus'
        addTransaction(transData)
        

    }else{
      transData.type = 'minus'
      transData.id = new Date().getTime()
        addTransaction(transData)
      }
      data.reset()

      
    }
  return (
    <>
      <div className="parent-main">
        <div className="wrapper">
          <div className="expense-tracker">
          <div className="parent-add-transaction">
                <div className="add-transaction">
                  <div className="heading-trans">
                    <h3>Add New Transaction</h3>
                  </div>
                  <div className="form">
                    <form onSubmit={data.handleSubmit(dataSubmit)}>
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
      
    </>
  );
}
