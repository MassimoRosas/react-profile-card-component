import React from 'react';

const Card = () => (
  <div className="card">
    <img alt="card-img" className="card-img" />
    <h2 className="card-name">Victor Crest</h2>
    <span className="card-age">26</span>
    <h3 className="card-city">London</h3>
    <ul className="card-data">
      <li>
        <h2>80K</h2>
        <p>Followers</p>
      </li>
      <li>
        <h2>803K</h2>
        <p>Likes</p>
      </li>
      <li>
        <h2>1.4K</h2>
        <p>Photos</p>
      </li>
    </ul>
  </div>
);

export default Card;
