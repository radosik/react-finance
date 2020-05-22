import React, { useState } from "react"; // removed useContext
import { db } from "../firebase"; // add
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ReceiptForm = () => {
  const [receipt, setReceipt] = useState({
    date: "",
    description: "",
    cost: "",
    shop: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection("receipts").add(receipt); // update
    setReceipt({
      date: "",
      description: "",
      cost: "",
      shop: "",
    });
  };

  const handleChange = (e) => {
    setReceipt({ ...receipt, [e.target.name]: e.target.value });
  };

  const handleChange2 = (e) => {
    setStartDate(e);
  };

  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="section">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="input-field">
            <DatePicker
              id="date"
              name="date"
              selected={startDate}
              onChange={handleChange2}
              className="validate"
              required
            />
            <label className="active" htmlFor="date">
              Date
            </label>
          </div>
          <div className="input-field">
            <input
              type="text"
              id="cost"
              name="cost"
              value={receipt.cost}
              onChange={handleChange}
              placeholder="Cost of the Receipt"
              className="validate"
              required
            />
            <label className="active" htmlFor="cost">
              Cost
            </label>
          </div>
          <div className="input-field">
            <input
              type="text"
              id="description"
              name="description"
              value={receipt.description}
              onChange={handleChange}
              placeholder="Some description"
              className="validate"
              required
            />
            <label className="active" htmlFor="description">
              Description
            </label>
          </div>
          <div className="input-field">
            <input
              type="text"
              id="shop"
              name="shop"
              value={receipt.shop}
              onChange={handleChange}
              placeholder="Some shop"
              className="validate"
              required
            />
            <label className="active" htmlFor="shop">
              Prefered Shop
            </label>
          </div>
          <div className="input-field center">
            <button type="submit" className="btn btn-dark">
              <i className="material-icons right">add_circle</i>Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReceiptForm;
