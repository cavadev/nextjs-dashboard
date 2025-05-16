"use client"
import React, { useState } from "react";

//const PriceCalculator = () => {
export default function PriceCalculator () {
  const [properties, setProperties] = useState({
    typeDiscount: 'standard',
    weight: 0,
    totalPrice: 0,
  });

  const calculateDiscountedPrice = () => {
    let discount = 0;
    if (properties.typeDiscount === 'standard' || (properties.typeDiscount == 'weight' && properties.weight <= 10)) discount = 0.06;
    if (properties.typeDiscount === 'seasonal') discount = 0.12;
    if (properties.typeDiscount === 'weight' && properties.weight > 10) discount = 0.18;

    return properties.totalPrice - (properties.totalPrice * discount); 
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    let val = value;
    if (name === "weight" || name === "totalPrice") {
      val = parseFloat(value) || '';
    }
    setProperties({
      ...properties,
      [name]: val
    });
  }

  const discountedPrice = calculateDiscountedPrice();

  return (
    <div>
      <label htmlFor="type">Select Type:</label>
      <select id="type" name="typeDiscount" value={properties.typeDiscount} onChange={handleChange}>
        <option value="standard">Standard</option>
        <option value="seasonal">Seasonal</option>
        <option value="weight">Weight</option>
      </select>

      <label htmlFor="weight">Weight (kg):</label>
      <input type="number" id="weight" name="weight" step="0.01" value={properties.weight} onChange={handleChange}
      />

      <label htmlFor="totalPrice">Total Price ($):</label>
      <input type="number" id="totalPrice" name="totalPrice" step="0.01" value={properties.totalPrice} onChange={handleChange}/>

      <div>Discounted price:<span id="discountedPrice">{discountedPrice}</span></div>
      
    </div>
  );
};