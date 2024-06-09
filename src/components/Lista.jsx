// Lista.jsx
import React, { useContext, useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const Lista = () => {

  const [pokemonList, setPokemonList] = useState([]);
  const [selectedPokemonId, setSelectedPokemonId] = useState('');

  useEffect(() => {
    const fetchPokemonList = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=20');
        const data = response.data.results.map((pokemon, index) => ({
          id: index + 1,
          name: pokemon.name
        }));
        setPokemonList(data);
      } catch (error) {
        console.error('Error fetching Pokemon list:', error);
      }
    };

    fetchPokemonList();
  }, []);

    const [selectedPokemonIdLocal, setSelectedPokemonIdLocal] = useState('');
    const navigate = useNavigate();

    const handleChange = (event) => {
        setSelectedPokemonIdLocal(event.target.value);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setSelectedPokemonId(selectedPokemonIdLocal);
        navigate(`/pokemones/${selectedPokemonIdLocal}`);
    };


    return (
        <Form onSubmit={handleFormSubmit} className='form'>
            <Form.Select aria-label="Pokémon" onChange={handleChange} value={selectedPokemonIdLocal}>
                <option value="">Selecciona un Pokémon</option>
                {pokemonList.map(pokemon => (
                    <option key={pokemon.id} value={pokemon.id}>{pokemon.name}</option>
                ))}
            </Form.Select>
            <Button className='boton-form' variant="primary" type="submit">Ver detalles</Button>
        </Form>
    );
}
