import React from 'react';
import PropTypes from 'prop-types';
import '../styles/mission-card.css';

class MissionCard extends React.Component {
  render() {
    const { name } = this.props;
    const { year } = this.props;
    const { country } = this.props;
    const { destination } = this.props;

    return (
      <div data-testid="mission-card" className="mission-card">
        <p data-testid="mission-name" className="mission-card-title">{ name }</p>
        <p data-testid="mission-year" className="mission-year">
          📅
          { year }
        </p>
        <p data-testid="mission-country" className="mission-country">
          📌
          { country }
        </p>
        <p data-testid="mission-destination" className="mission-dest">
          🏳️
          { destination }
        </p>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissionCard;
