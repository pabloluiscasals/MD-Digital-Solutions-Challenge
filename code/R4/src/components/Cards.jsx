import React from 'react';
import './Cards.css';

import Card from './Card.jsx';

export default function Cards({cities, onClose}) {
  return (
    <div className='cards'>
      {cities.map(c => <Card
          key={c.id}
          name={c.name}
          temp={c.temp}
          wind={c.wind}
          termica={c.termica}
          winddir={c.winddir}
          onClose={() => onClose(c.id)}
        /> )}
    </div>
  );
}
