import AOS from "aos";
import "aos/dist/aos.css";
import {products} from "../Product";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import './Shopall.css'
import { useEffect, useState } from "react";

function Shopall() {
  const { category } = useParams();
  const Products = products;
  const id = category;

  let filterdata = [];
  if (id === "all") {
    filterdata = Products;
  } else {
    filterdata = Products.filter((product) => product.category === id);
  }

  return (
    <div className="d-grid grid-columns-4 mt-5 ">
      <div className=" row row-cols-4  justify-content-center gap-3">
        {filterdata.map((product) => {
          return (
            <>
              <div
                className="Scard1 "
                key={product.id}
                data-aos="zoom-in-up"
                data-aos-duration="1700"
              >
                <div className="Simage">
                  <Link to="/">
                    <img src={product.image} />
                  </Link>
                </div>
                <div className="Sinfo ">
                  <Link>
                    <h5 className="heading">{product.title}</h5>
                  </Link>
                  <h5>
                    <span>&#8377;</span>
                    {product.price}
                  </h5>
                  <button type="submit" className="SBuybutton">
                    BUy Now
                  </button>
                  <button type="submit" className="SAddbutton">
                    Add To Cart
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Shopall;
