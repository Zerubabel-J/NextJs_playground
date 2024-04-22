"use client";
import React from "react";

const AddToCart = () => {
  return (
    <div>
      <button
        onClick={() =>
          console.log(`hello there: @ ${new Date().toLocaleTimeString()}`)
        }
        className="btn btn-active btn-accent"
      >
        Add to cart
      </button>
    </div>
  );
};

export default AddToCart;
