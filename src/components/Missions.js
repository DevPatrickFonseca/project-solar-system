import React from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';
import '../styles/missions.css';

class Missions extends React.Component {
  render() {
    return (
      <>
        <div data-testid="missions">
          <Title headline="Missões" />
        </div>
        <ul className="missions">
          {missions.map((planets) => (
            <MissionCard
              key={ planets.name }
              name={ planets.name }
              year={ planets.year }
              country={ planets.country }
              destination={ planets.destination }
            />))}
        </ul>
      </>
    );
  }
}

export default Missions;
