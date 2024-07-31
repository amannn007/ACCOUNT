// src/components/Card.js
import React from 'react';
import './Card.css'; // You can create a CSS file for custom styles

const Card = ({ children }) => {
  return <div className="card">{children}</div>;
};

export default Card;
