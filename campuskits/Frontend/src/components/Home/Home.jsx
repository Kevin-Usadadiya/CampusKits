import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Home.css";

export default function Home() {
  const [category, setCategory] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/gethomes")
      .then((response) => {
        const { category, products } = response.data;
        setCategory(category);
        setProducts(products);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      {/* <!-- BROWSE BY CATEGORY --> */}

      <div className="categories container mb-5">
        <i>
          <Link to="/" className="text-decoration-none">
            <strong>-The Categories</strong>
          </Link>
        </i>
        <h3>Browse by Category</h3>
        <ul className="cards">
          {category.map((data, index) => {
            return (
              <>
                <li className="card" key={index}>
                  <div>
                    <div className="card-content">
                      <img src={data.image} width="30px" height="30px" />
                    </div>
                    <h3 className="card-title">{data.title}</h3>
                  </div>
                </li>
              </>
            );
          })}
        </ul>
      </div>

      {/* <!-- OUR PRODUCTS --> */}

      <div className="our_products container">
        <i>
          <Link to="/" className="text-decoration-none">
            <strong>-Our Products</strong>
          </Link>
        </i>
        <h3>Explore our Products</h3>

        <div className="our_products_container mt-5 d-flex">
          <div className="our_products_cards_container d-flex row">
            {/* Products Mapping */}

            {products.map((data, index) => {
              if (data.offer === " ") {
                return (
                  <>
                    <div className="our_products_card">
                      <div className="our_products_header d-flex mb-3 justify-content-end">
                        <i className="bi bi-suit-heart-fill"></i>
                      </div>
                      <div className="our_products_card_img d-flex">
                        <Link to="/">
                          <img src={data.image} alt={data.name} width="200px" />
                        </Link>
                      </div>
                      <div className="our_products_card_details">
                        <h4>
                          <strong>{data.name}</strong>
                        </h4>
                        <div className="d-flex">
                          <button className="label_button btn my-2">
                            {data.label}
                          </button>
                          <p className="mx-4 mt-3">
                            <strong>${data.price}</strong>
                          </p>
                        </div>
                        <br />
                      </div>
                    </div>
                  </>
                );
              } else {
                return (
                  <>
                    <div className="our_products_card">
                      <div className="our_products_header d-flex mb-3 ">
                        <button className="btn">{data.offer}</button>
                        <i className=" bi bi-suit-heart-fill"></i>
                      </div>
                      <div className="our_products_card_img d-flex">
                        <Link to="/">
                          <img src={data.image} alt={data.name} width="200px" />
                        </Link>
                      </div>
                      <div className="our_products_card_details">
                        <h4>
                          <strong>{data.name}</strong>
                        </h4>
                        <div className="d-flex">
                          <button className="label_button btn my-2">
                            {data.label}
                          </button>
                          <p className="mx-4 mt-3">
                            <strong>${data.price}</strong>
                          </p>
                        </div>
                        <br />
                      </div>
                    </div>
                  </>
                );
              }
            })}
          </div>
        </div>
      </div>
    </>
  );
}
