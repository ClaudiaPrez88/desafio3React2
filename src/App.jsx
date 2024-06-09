import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Navegacion from "./components/Navegacion";
import { PokemonContext } from "./context/PokeApi";
import Home from "./views/Home";
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pokemones from "./components/Pokemones";
import { DetallesPokemon } from "./components/DetallesPokemon";

const App = () => {
  const { pokemonList } = useContext(PokemonContext);
  console.log(pokemonList)

  return (
    <div>
    <Navegacion/>
      <Container>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/pokemones" element={<Pokemones />} />
             <Route path="/pokemones/:id" element={<DetallesPokemon />} /> 
          </Routes>
      </Container>
    </div>
  );
};
export default App;
