import React, { useState, useEffect } from "react";
import { db } from "../firebase"; // add

const Receipt = () => {
  const [receipts, setReceipts] = useState([]); // update

  // add
  useEffect(() => {
    const unsub = db.collection("receipts").onSnapshot((snapshot) => {
      const allReceipts = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setReceipts(allReceipts);
    });
    return () => {
      unsub();
    };
  }, []);

  // add
  const deleteReceipt = (id) => {
    db.collection("receipts").doc(id).delete();
  };

  return (
    <div className="container">
      <div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Description</th>
              <th scope="col">Cost</th>
              <th scope="col">Shop</th>
            </tr>
          </thead>
          <tbody>
            {receipts.map((receipt) => (
              <tr key={receipt.id}>
                <td>
                  <div className="receipt-date">{receipt.date}</div>
                </td>
                <td>
                  <div className="receipt-description">
                    {receipt.description}
                  </div>
                </td>
                <td>
                  <div className="receipt-cost">{receipt.cost}</div>
                </td>
                <td>
                  <div className="receipt-shop">{receipt.shop}</div>
                </td>
                <td>
                  <div
                    onClick={() => deleteReceipt(receipt.id)}
                    className="receipt-delete"
                    style={{ cursor: "pointer" }}
                  >
                    <i className="material-icons">delete</i>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <form action="/receiptForm">
          <button className="btn btn-dark">Edit Receipt</button>
        </form>
      </div>
    </div>
  );
};

export default Receipt;
