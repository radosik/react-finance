import React, { useState, useEffect, Fragment } from "react";
import { db } from "../firebase"; // add
import ShopForm from "./ShopForm";

const Shops = () => {
  const [shops, setShops] = useState([]); // update

  // add
  useEffect(() => {
    const unsub = db.collection("shops").onSnapshot((snapshot) => {
      const allShops = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setShops(allShops);
    });
    return () => {
      unsub();
    };
  }, []);

  // add
  const deleteShop = (id) => {
    db.collection("shops").doc(id).delete();
  };

  return (
    <div className="container">
      <div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
              <th scope="col">Info</th>
            </tr>
          </thead>
          <tbody>
            {shops.map((shop) => (
              <tr key={shop.id}>
                <td>
                  <div className="shop-name">{shop.name}</div>
                </td>
                <td>
                  <div className="shop-description">{shop.description}</div>
                </td>
                <td>
                  <div className="shop-info">{shop.info}</div>
                </td>
                <td>
                  <div
                    onClick={() => deleteShop(shop.id)}
                    className="shop-delete"
                    style={{ cursor: "pointer" }}
                  >
                    <i className="material-icons">delete</i>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Fragment>
        <ShopForm />
      </Fragment>
    </div>
  );
};

export default Shops;
