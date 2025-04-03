import React, { useEffect } from 'react';
import PropTypes from "prop-types";
import { useState } from 'react';



function Course(props) {
    const [purchased, setPurchased] = useState(false);
    const [price, setPrice] = useState(props.price);
    const [aDiscount, setADiscount] = useState(false);

    function buycourse(discount) {
        console.log(props.name, "buy now", "% discount ", discount, "price", price);
        setPurchased(true);
    }
    function applyDiscount(aDiscount) {
        console.log("Apply discount of 20% on", props.name, "course", aDiscount);


        setADiscount(true);
        setPrice(props.price - (props.price * aDiscount / 100));
        console.log("New price after discount is", price);
    }
   




    return (

        props.name && <div className="course_card">
           
            <img src={props.img} alt="" />
            <h3>{props.name}</h3>
            <p>Price: <span>{price}</span></p>
            <button onClick={() => buycourse(20)}>buy now</button>
            <p style={{ color: purchased ? "green" : "black" }}>{purchased ? " Already Purchased" : " Get it now"}</p>
            <button onClick={() => applyDiscount(5)}>Apply discount</button>
            <button onClick={() => props.onDelete(props.id)}>Delete</button>
        </div>
        
    );p



}

Course.PropTypes = {
    name: PropTypes.string,
    price: PropTypes.numbstringer,
    show: PropTypes.bool

}




export default Course;
