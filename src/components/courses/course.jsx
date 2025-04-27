import React, { useState } from 'react';
import PropTypes from "prop-types";
import 'bootstrap/dist/css/bootstrap.min.css';

function Course(props) {
  const [purchased, setPurchased] = useState(false);
  const [price, setPrice] = useState(props.price);
  const [aDiscount, setADiscount] = useState(false);

  const buyCourse = () => {
    console.log(props.name, "buy now", "% discount 20%", "price", price);
    setPurchased(true);
  };

  const applyDiscount = (discount) => {
    console.log("Apply discount of 20% on", props.name, "course");

    setADiscount(true);
    const newPrice = props.price - (props.price * discount / 100);
    setPrice(newPrice);
    console.log("New price after discount is", newPrice);
  };

  return (
    props.name && (
      <div className="col-md-4 mb-4">
        <div className="card course_card shadow-sm">
          <img src={props.img} alt={props.name} className="card-img-top course_img" />
          <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">
              Price: <span className={purchased ? "text-success" : ""}>{price}</span>
            </p>
            <button
              onClick={buyCourse}
              className="btn btn-primary w-100 mb-2"
              disabled={purchased}
            >
              {purchased ? "Already Purchased" : "Buy Now"}
            </button>
            <button
              onClick={() => applyDiscount(20)}
              className="btn btn-outline-info w-100 mb-2"
            >
              Apply Discount
            </button>
            <button
              onClick={() => props.onDelete(props.id)}
              className="btn btn-danger w-100"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    )
  );
}

Course.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default Course;
