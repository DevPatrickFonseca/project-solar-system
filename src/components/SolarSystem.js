import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';
import '../styles/solar-system.css';
import '../styles/planet-card.css';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <div className="solar-system">
          <hr />
          {planets
            .map((dataPlanets) => (<PlanetCard
              key={ dataPlanets.name }
              planetName={ dataPlanets.name }
              planetImage={ dataPlanets.image }
            />)) }
        </div>
      </div>
    );
  }
}

export default SolarSystem;
