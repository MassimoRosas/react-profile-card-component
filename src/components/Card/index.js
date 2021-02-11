import React from 'react';

const Card = () => (
  <div className="card">
    <img alt="card-img" className="card-img" />
    <h2 className="card-name">Victor Crest</h2>
    <span className="card-age">26</span>
    <h3 className="card-city">London</h3>
    <ul className="card-data">
      <li className="card-data-item">
        <h2 className="card-data-item-number">80K</h2>
        <p className="card-data-item-title">Followers</p>
      </li>
      <li className="card-data-item">
        <h2 className="card-data-item-number">803K</h2>
        <p className="card-data-item-title">Likes</p>
      </li>
      <li className="card-data-item">
        <h2 className="card-data-item-number">1.4K</h2>
        <p className="card-data-item-title">Photos</p>
      </li>
    </ul>
  </div>
);

export default Card;
