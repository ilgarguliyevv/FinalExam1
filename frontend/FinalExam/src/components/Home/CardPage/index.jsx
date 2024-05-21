import React, { useEffect, useState } from "react";
import "./cardPage.scss";
import axios from "axios";
import GradeIcon from "@mui/icons-material/Grade";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import About from "../About";
import { useDispatch } from "react-redux";
import { setBasket } from "../../../redux/cardSlice";

const CardPage = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("http://localhost:3000/card")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }, []);
  const handlesetBasket = (products) => {
    dispatch(setBasket(products));
  };
  return (
    <div>
      <div className="card-hero">
        <div className="card-word">
          <h4>POPULAR PRODUCTS</h4>
          <h1>Our Products</h1>
          <h5>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            nostrum natus excepturi fuga ullam accusantium vel ut eveniet aut
            consequatur laboriosam ipsam.
          </h5>
        </div>
      </div>
      <div className="card">
        {products.length > 0 ? (
          products.map((product, index) => (
            <div className="card-box" key={index}>
              <div className="card-div">
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <div className="card-rating">
                  <p>
                    <GradeIcon fontSize="5px" />
                    {product.rating}
                  </p>
                  <p>
                    {" "}
                    <FavoriteBorderIcon fontSize="5px" />
                    {product.likes}
                  </p>
                </div>
                <p className="card-lorem">{product.description}</p>
                <button
                  onClick={() => handlesetBasket(product)}
                  className="card-button"
                >
                  Cart
                </button>
                <button className="view-button">View</button>
              </div>
            </div>
          ))
        ) : (
          <p>Ürünler yükleniyor...</p>
        )}
      </div>
      <About />
    </div>
  );
};

export default CardPage;
