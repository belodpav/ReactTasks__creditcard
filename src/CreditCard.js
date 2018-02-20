import React from 'react';
import PropTypes from 'prop-types';
import './CreditCard.css';

function CreditCard(props) {
  const {
    bank,
    name,
    id,
    validTHRU
  } = props.cardData;

  return (
    <div className="creditcard">
      <div className="creditcard__data-level">
        <span className="creditcard__bank-name">{bank.name}, inc.</span>
        <span className="creditcard__id">{id}</span>
        <span className="creditcard__service-id">{id.substr(0,4)}</span>
        <span className="creditcard__valid-thru">
          <span className="creditcard__valid-thru-label">valid <br />THRU</span>
          <span className="creditcard__valid-thru-value">{validTHRU}</span>
        </span>
        <span className="creditcard__name">{name}</span>
      </div>
    </div>    
  );
}


CreditCard.propTypes = {
  cardData: PropTypes.shape({
    bank: PropTypes.shape({
      name: PropTypes.string.isRequired
    }).isRequired,
    name: PropTypes.string.isRequired,
    validTHRU: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
  }).isRequired
};



export default CreditCard;