import React, { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";
const Products = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios({
      method: "GET",
      url: "https://fakestoreapi.com/products",
    })
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
    <div className="intro">
      <h2 id="h1">You Can Find All Things You Want It In Our Store:</h2>
    </div>
    <div className="products-container">
      {loading && (
        <div>
          <h1>Loading...</h1>
        </div>
      )}
      
      {Array.isArray(data) &&
        data.map((product) => (
          <div key={product.id} className="card">
            <div>
              <img src={product.image} alt="#" />
            </div>
            <div className="card-description">
              <h6>{product.title}</h6>
              <h6>{`price: ${product.price}`}</h6>
              <h6>{`description: ${product.description}`}</h6>
            </div>
          </div>
        ))}
    </div>
    </>
  );
};

export default Products;
