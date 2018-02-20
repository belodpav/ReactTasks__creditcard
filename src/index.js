import React from 'react';
import ReactDOM from 'react-dom';
import CreditCard from './CreditCard';
import './index.css';

const cardData = {
  bank: {
    name: 'Big Data Bank'
  },
  name: 'TOM CRUSE',
  validTHRU: '12/21',
  id: '1234 5678 8765 4321',
};

ReactDOM.render(<CreditCard cardData={cardData} />, document.getElementById('root'));

