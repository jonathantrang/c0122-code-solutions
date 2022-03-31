import React from 'react';
import ReactDOM from 'react-dom';

function Pokedex(props) {
  const pokemon = props.pokemon;
  const pokedex = (
    <ul>
      {props.pokedex.map((pokemon) =>
        <li key={pokemon.number}>
          {pokemon.name}
        </li>
      )}
    </ul>
  );
  return (
    <div>
      {pokedex}
    </div>
  );
}

const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Pokedex pokedex={pokedex} />);
