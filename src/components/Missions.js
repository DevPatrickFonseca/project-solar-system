import React from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

class Missions extends React.Component {
  render() {
    return (
      <>
        <div data-testid="missions">
          <Title headline="Missões" />
        </div>
        <ul>
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
