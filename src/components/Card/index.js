import React from 'react';

import CardImg from '../../../public/images/image-victor.jpg';
import './card.scss';

const Card = () => (
  <div className="card">
    <img src={CardImg} alt="card-img" className="card-img" />
    <h2 className="card-name">
      Victor Crest
      <span className="card-age">26</span>
    </h2>
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
