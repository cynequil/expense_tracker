import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  let sign = transaction.amount < 0 ? "-" : "+";
  let rupee = "\u20B9";

  return (
    <div>
      <li className={transaction.amount < 0 ? "minus" : "plus"}>
        {transaction.text}
        <span>
          {sign}
          {rupee}
          {Math.abs(transaction.amount)}
        </span>
        <button
          className="delete-btn"
          onClick={() => deleteTransaction(transaction.id)}
        >
          x
        </button>
      </li>
    </div>
  );
};
